import type { ClassifiedBuckets, InputToken, LocaleConfig, PosTag } from '../types';

function classifyWord(word: string, config: LocaleConfig): PosTag {
  const lower = word.toLowerCase();

  if (config.lexicon[lower]) {
    return config.lexicon[lower];
  }

  for (const rule of config.suffixRules) {
    if (lower.endsWith(rule.suffix) && lower.length > rule.suffix.length + 2) {
      return rule.pos;
    }
  }

  if (/^[A-Z]/.test(word) && word.length > 1) {
    return 'properNoun';
  }

  return 'flexible';
}

export function classifyTokens(tokens: InputToken[], config: LocaleConfig): ClassifiedBuckets {
  const buckets: ClassifiedBuckets = {
    nouns: [],
    verbs: [],
    adjectives: [],
    adverbs: [],
    properNouns: [],
    flexible: [],
    letters: [],
    phrases: [],
  };

  for (const token of tokens) {
    if (token.type === 'letter') {
      buckets.letters.push(token.raw);
      continue;
    }
    if (token.type === 'phrase') {
      buckets.phrases.push(token.raw);
      continue;
    }

    const pos = classifyWord(token.raw, config);
    switch (pos) {
      case 'noun':
        buckets.nouns.push(token.raw);
        break;
      case 'verb':
        buckets.verbs.push(token.raw);
        break;
      case 'adjective':
        buckets.adjectives.push(token.raw);
        break;
      case 'adverb':
        buckets.adverbs.push(token.raw);
        break;
      case 'properNoun':
        buckets.properNouns.push(token.raw);
        break;
      default:
        buckets.flexible.push(token.raw);
    }
  }

  return buckets;
}
