import type { InputToken } from '../types';

const VALID_INPUT = /^[a-zA-Z\s',-]*$/;

export function validateInput(input: string): string | null {
  if (!input.trim()) return null;
  if (!VALID_INPUT.test(input)) {
    return 'Only English letters, spaces, commas, quotes, hyphens, and apostrophes are allowed.';
  }
  return null;
}

function tokenizeWord(word: string): InputToken {
  const normalized = word.toLowerCase();
  if (word.length === 1 && /[a-zA-Z]/.test(word)) {
    return { raw: word, normalized, type: 'letter' };
  }
  return { raw: word, normalized, type: 'word' };
}

function extractFromSegment(segment: string): InputToken[] {
  const tokens: InputToken[] = [];
  const regex = /"([^"]+)"|([^\s",]+)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(segment)) !== null) {
    if (match[1]) {
      const phrase = match[1].trim();
      if (phrase) {
        tokens.push({
          raw: phrase,
          normalized: phrase.toLowerCase(),
          type: 'phrase',
        });
      }
    } else if (match[2]) {
      tokens.push(tokenizeWord(match[2]));
    }
  }

  return tokens;
}

export function parseInput(input: string): InputToken[] {
  const tokens: InputToken[] = [];
  const trimmed = input.trim();
  if (!trimmed) return tokens;

  const segments: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < trimmed.length; i++) {
    const ch = trimmed[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      current += ch;
      continue;
    }
    if (!inQuotes && (ch === ',' || ch === '\n')) {
      if (current.trim()) segments.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  if (current.trim()) segments.push(current.trim());

  for (const segment of segments) {
    tokens.push(...extractFromSegment(segment));
  }

  return tokens;
}
