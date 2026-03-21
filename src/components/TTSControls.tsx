import React from 'react';
import { Play, Pause, Square, Volume2, VolumeX } from 'lucide-react';

interface TTSControlsProps {
  isPlaying: boolean;
  isPaused: boolean;
  voicesLoaded: boolean;
  frenchVoice: SpeechSynthesisVoice | null;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
}

export const TTSControls: React.FC<TTSControlsProps> = ({
  isPlaying,
  isPaused,
  voicesLoaded,
  frenchVoice,
  onPlay,
  onPause,
  onStop,
}) => {
  if (!('speechSynthesis' in window)) return null;

  return (
    <div className="no-print flex items-center gap-3 bg-earth-50 border border-earth-200 rounded-xl px-4 py-3">
      <Volume2 size={18} className="text-amazigh-600 shrink-0" />
      <span className="text-sm text-ink-600 hidden sm:inline">Lecture vocale</span>
      
      <div className="flex items-center gap-2 ml-auto">
        {!isPlaying ? (
          <button
            onClick={onPlay}
            disabled={!voicesLoaded}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amazigh-600 text-white text-sm rounded-lg hover:bg-amazigh-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            title={isPaused ? "Reprendre la lecture" : "Lire l'article"}
            aria-label={isPaused ? "Reprendre la lecture" : "Lire l'article à voix haute"}
          >
            <Play size={14} />
            {isPaused ? 'Reprendre' : 'Lire'}
          </button>
        ) : (
          <button
            onClick={onPause}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amazigh-500 text-white text-sm rounded-lg hover:bg-amazigh-600 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Mettre en pause"
            aria-label="Mettre en pause la lecture"
          >
            <Pause size={14} />
            Pause
          </button>
        )}

        {(isPlaying || isPaused) && (
          <button
            onClick={onStop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-ink-200 text-ink-700 text-sm rounded-lg hover:bg-ink-300 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Arrêter la lecture"
            aria-label="Arrêter la lecture vocale"
          >
            <Square size={14} />
            Stop
          </button>
        )}
      </div>

      {!frenchVoice && voicesLoaded && (
        <div className="flex items-center gap-1 text-xs text-amber-600">
          <VolumeX size={12} />
          <span>Voix FR non disponible</span>
        </div>
      )}
    </div>
  );
};
