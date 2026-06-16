import { useState, useCallback, useEffect } from 'react';
import { InputPanel } from './components/InputPanel';
import { Controls } from './components/Controls';
import { OutputPanel } from './components/OutputPanel';
import { generateSentences, validateInput, parseInput } from './engine';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [wordCount, setWordCount] = useState(10);
  const [sentences, setSentences] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const tokenCount = parseInput(input).length;

  const handleGenerate = useCallback(() => {
    const validationError = validateInput(input);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    if (!input.trim()) {
      setSentences([]);
      setHasGenerated(false);
      return;
    }

    const results = generateSentences(input, wordCount, 3);
    setSentences(results);
    setHasGenerated(true);
    setCopied(false);
  }, [input, wordCount]);

  const handleCopy = useCallback(async () => {
    const text = sentences.join('\n');
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [sentences]);

  const handleClear = useCallback(() => {
    setInput('');
    setSentences([]);
    setError(null);
    setHasGenerated(false);
    setCopied(false);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleGenerate();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleGenerate]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Sentence Weaver</h1>
      </header>

      <main className="main">
        <InputPanel
          value={input}
          onChange={(val) => {
            setInput(val);
            if (error) setError(validateInput(val));
          }}
          error={error}
          tokenCount={tokenCount}
          onClear={handleClear}
        />

        <Controls
          wordCount={wordCount}
          onWordCountChange={setWordCount}
          onGenerate={handleGenerate}
          disabled={!!error || !input.trim()}
        />

        <OutputPanel
          sentences={sentences}
          onRegenerate={handleGenerate}
          onCopy={handleCopy}
          copied={copied}
          hasGenerated={hasGenerated}
          targetWordCount={wordCount}
        />
      </main>
    </div>
  );
}

export default App;
