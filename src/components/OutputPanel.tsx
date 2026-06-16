function countWords(sentence: string): number {
  return sentence.replace(/[.!?]+$/, '').split(/\s+/).filter(Boolean).length;
}

interface OutputPanelProps {
  sentences: string[];
  onRegenerate: () => void;
  onCopy: () => void;
  copied: boolean;
  hasGenerated: boolean;
  targetWordCount: number;
}

export function OutputPanel({
  sentences,
  onRegenerate,
  onCopy,
  copied,
  hasGenerated,
  targetWordCount,
}: OutputPanelProps) {
  return (
    <section className="section" aria-labelledby="output-label">
      <div className="section-head">
        <h2 id="output-label" className="section-label">
          Output
        </h2>
        {hasGenerated && sentences.length > 0 && (
          <span className="meta">
            {sentences.length} {sentences.length === 1 ? 'sentence' : 'sentences'}
          </span>
        )}
      </div>

      {!hasGenerated ? (
        <p className="output-empty">Results appear here</p>
      ) : sentences.length === 0 ? (
        <p className="output-empty">Nothing generated</p>
      ) : (
        <ol className="sentence-list">
          {sentences.map((sentence, i) => {
            const words = countWords(sentence);
            return (
              <li key={i} className="sentence-item">
                <span className="sentence-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="sentence-body">
                  <p className="sentence-text">{sentence}</p>
                  <p className="sentence-meta">
                    {words} word{words === 1 ? '' : 's'}
                    {words !== targetWordCount && ` · target ${targetWordCount}`}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {hasGenerated && sentences.length > 0 && (
        <div className="output-actions">
          <button type="button" className="btn" onClick={onCopy}>
            {copied ? 'Copied' : 'Copy all'}
          </button>
          <button type="button" className="btn" onClick={onRegenerate}>
            Again
          </button>
        </div>
      )}
    </section>
  );
}
