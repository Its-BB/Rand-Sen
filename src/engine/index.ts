import { parseInput } from './parser';
import { classifyTokens } from './classifier';
import { assembleSentence } from './assembler';
import { postProcess } from './postProcess';
import { getLocaleConfig } from '../locales';
import type { Locale } from '../types';

export function generateSentences(
  input: string,
  wordCount: number,
  count = 3,
  locale: Locale = 'en',
): string[] {
  const tokens = parseInput(input);
  const config = getLocaleConfig(locale);
  const buckets = classifyTokens(tokens, config);

  const sentences: string[] = [];
  const seen = new Set<string>();

  let attempts = 0;
  const maxAttempts = count * 5;

  while (sentences.length < count && attempts < maxAttempts) {
    attempts++;
    const raw = assembleSentence(buckets, config, wordCount);
    const processed = postProcess(raw);
    if (!seen.has(processed)) {
      seen.add(processed);
      sentences.push(processed);
    }
  }

  if (sentences.length === 0) {
    const raw = assembleSentence(buckets, config, wordCount);
    sentences.push(postProcess(raw));
  }

  return sentences;
}

export { parseInput, validateInput } from './parser';
export { classifyTokens } from './classifier';
export { postProcess } from './postProcess';
