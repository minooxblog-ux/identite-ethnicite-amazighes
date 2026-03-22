import React from 'react';

interface FootnoteRefProps {
  id: number;
}

export const FootnoteRef: React.FC<FootnoteRefProps> = ({ id }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const noteEl = document.getElementById(`note-${id}`);
    if (noteEl) {
      noteEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      noteEl.classList.remove('highlighted');
      // Force reflow
      void noteEl.offsetWidth;
      noteEl.classList.add('highlighted');
      setTimeout(() => noteEl.classList.remove('highlighted'), 2500);
    }
  };

  return (
    <a
      href={`#note-${id}`}
      id={`ref-${id}`}
      className="footnote-ref"
      onClick={handleClick}
      title={`Voir la note ${id}`}
      aria-label={`Note de bas de page ${id}`}
    >
      {id}
    </a>
  );
};
