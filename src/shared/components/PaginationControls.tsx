import React from 'react';

 interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Asegura que nunca se envíe una página fuera de [1, totalPages]
  const goTo = (page: number) => {
    const safeTotal = Math.max(1, totalPages); // evita 0 o negativos
    const clamped = Math.min(Math.max(page, 1), safeTotal);
    if (clamped !== currentPage) onPageChange(clamped);
  };

  return (
    <div style={{ marginTop: '1rem' }} className={className}>
      <button
        type="button"
        disabled={!canGoPrev}
        onClick={() => goTo(currentPage - 1)}
        aria-label="Página anterior"
      >
        Previous
      </button>

      <span style={{ margin: '0 1rem' }} aria-live="polite">
        Page {Math.min(currentPage, Math.max(1, totalPages))} of {Math.max(1, totalPages)}
      </span>

      <button
        type="button"
        disabled={!canGoNext}
        onClick={() => goTo(currentPage + 1)}
        aria-label="Página siguiente"
      >
        Next
      </button>
    </div>
  );
};