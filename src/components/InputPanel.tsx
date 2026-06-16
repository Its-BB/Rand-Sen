interface InputPanelProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  tokenCount: number;
  onClear: () => void;
}

export function InputPanel({ value, onChange, error, tokenCount, onClear }: InputPanelProps) {
  return (
    <section className="section" aria-labelledby="input-label">
      <div className="section-head">
        <h2 id="input-label" className="section-label">
          Input
        </h2>
        <span className="meta">
          {tokenCount} {tokenCount === 1 ? 'token' : 'tokens'}
        </span>
      </div>

      <textarea
        id="word-input"
        className={`textarea ${error ? 'textarea-error' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="moon, x, running, purple, &quot;silent night&quot;"
        rows={5}
        spellCheck={false}
        aria-invalid={!!error}
        aria-describedby={error ? 'input-error' : undefined}
      />

      {error && (
        <p id="input-error" className="error-message" role="alert">
          {error}
        </p>
      )}

      {value.length > 0 && (
        <div>
          <button type="button" className="btn btn-ghost" onClick={onClear}>
            Clear
          </button>
        </div>
      )}
    </section>
  );
}
