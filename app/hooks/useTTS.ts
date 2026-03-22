import { useCallback, useEffect, useRef, useState } from 'react';

export function useTTS() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState<string | null>(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [frenchVoice, setFrenchVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const paragraphsRef = useRef<string[]>([]);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      const french = voices.find(v => v.lang.startsWith('fr') && v.localService) 
        || voices.find(v => v.lang.startsWith('fr'))
        || null;
      setFrenchVoice(french);
      setVoicesLoaded(voices.length > 0);
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
    return () => { speechSynthesis.onvoiceschanged = null; };
  }, []);

  const speakParagraph = useCallback((index: number) => {
    if (index >= paragraphsRef.current.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentParagraph(null);
      return;
    }

    const text = paragraphsRef.current[index];
    currentIndexRef.current = index;
    setCurrentParagraph(`tts-p-${index}`);

    // Scroll to current paragraph
    const el = document.getElementById(`tts-p-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.95;
    utterance.pitch = 1;
    if (frenchVoice) utterance.voice = frenchVoice;

    utterance.onend = () => {
      speakParagraph(index + 1);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentParagraph(null);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  }, [frenchVoice]);

  const collectParagraphs = useCallback(() => {
    const articleEl = document.getElementById('article-content');
    if (!articleEl) return [];

    const elements = articleEl.querySelectorAll('[data-tts]');
    const texts: string[] = [];
    elements.forEach((el, i) => {
      el.id = `tts-p-${i}`;
      const text = el.textContent?.trim();
      if (text && text.length > 5) {
        texts.push(text);
      }
    });
    return texts;
  }, []);

  const play = useCallback(() => {
    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    speechSynthesis.cancel();
    paragraphsRef.current = collectParagraphs();
    if (paragraphsRef.current.length === 0) return;

    setIsPlaying(true);
    setIsPaused(false);
    speakParagraph(0);
  }, [isPaused, collectParagraphs, speakParagraph]);

  const pause = useCallback(() => {
    speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  }, []);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentParagraph(null);
  }, []);

  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return {
    isPlaying,
    isPaused,
    currentParagraph,
    voicesLoaded,
    frenchVoice,
    play,
    pause,
    stop,
  };
}
