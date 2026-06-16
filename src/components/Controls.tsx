interface ControlsProps {
  wordCount: number;
  onWordCountChange: (count: number) => void;
  onGenerate: () => void;
  disabled: boolean;
}

function clamp(count: number) {
  return Math.min(40, Math.max(3, count));
}

export function Controls({ wordCount, onWordCountChange, onGenerate, disabled }: ControlsProps) {
  return (
    <section className="section" aria-label="Generation controls">
      <div className="toolbar">
        <div className="toolbar-group">
          <span className="toolbar-label">Length</span>
          <div className="stepper" role="group" aria-label="Words in sentence">
            <button
              type="button"
              className="stepper-btn"
              onClick={() => onWordCountChange(clamp(wordCount - 1))}
              disabled={wordCount <= 3}
              aria-label="Decrease word count"
            >
              −
            </button>
            <span className="stepper-value" aria-live="polite">
              {wordCount}
            </span>
            <button
              type="button"
              className="stepper-btn"
              onClick={() => onWordCountChange(clamp(wordCount + 1))}
              disabled={wordCount >= 40}
              aria-label="Increase word count"
            >
              +
            </button>
          </div>
        </div>

        <div className="toolbar-group">
          <span className="kbd-hint">Ctrl+Enter</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onGenerate}
            disabled={disabled}
          >
            Generate
          </button>
        </div>
      </div>
    </section>
  );
}
