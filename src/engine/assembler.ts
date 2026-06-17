import type { ClassifiedBuckets, LocaleConfig, SentenceTemplate, SlotType } from '../types';
import { pickWithLetterConstraint } from './letterResolver';

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getUserPool(slot: SlotType, buckets: ClassifiedBuckets): string[] {
  switch (slot) {
    case 'noun':
      return [...buckets.nouns, ...buckets.flexible, ...buckets.phrases];
    case 'verb':
      return [...buckets.verbs, ...buckets.flexible];
    case 'adj':
      return [...buckets.adjectives, ...buckets.flexible];
    case 'adv':
      return [...buckets.adverbs, ...buckets.flexible];
    case 'propNoun':
      return [...buckets.properNouns, ...buckets.flexible, ...buckets.nouns];
    case 'det':
    case 'prep':
    case 'conj':
    case 'pron':
      return [...buckets.flexible, ...buckets.nouns];
    default:
      return [...buckets.flexible];
  }
}

function pickFromPool(
  pool: string[],
  used: Set<string>,
  allowReuse: boolean,
): string | null {
  const available = allowReuse ? pool : pool.filter((w) => !used.has(w.toLowerCase()));
  const source = available.length > 0 ? available : pool;
  if (source.length === 0) return null;
  return source[Math.floor(Math.random() * source.length)];
}

function pickGlue(
  slot: SlotType,
  glueWords: Record<SlotType, string[]>,
  letters: string[],
  used: Set<string>,
): string {
  const pool = glueWords[slot];
  const constrained = pickWithLetterConstraint(pool, letters, used);
  if (constrained) return constrained;

  const available = pool.filter((w) => !used.has(w.toLowerCase()));
  const source = available.length > 0 ? available : pool;
  return source[Math.floor(Math.random() * source.length)];
}

function pickTemplate(templates: SentenceTemplate[], wordCount: number): SentenceTemplate {
  let best = templates[0];
  let bestDiff = Math.abs(best.slots.length - wordCount);

  for (const template of templates) {
    const diff = Math.abs(template.slots.length - wordCount);
    if (diff < bestDiff) {
      best = template;
      bestDiff = diff;
    }
  }

  return best;
}

function fillTemplate(
  template: SentenceTemplate,
  buckets: ClassifiedBuckets,
  config: LocaleConfig,
  allowReuse: boolean,
): string[] {
  const words: string[] = [];
  const used = new Set<string>();
  const userPools = {
    det: shuffle(getUserPool('det', buckets)),
    adj: shuffle(getUserPool('adj', buckets)),
    noun: shuffle(getUserPool('noun', buckets)),
    verb: shuffle(getUserPool('verb', buckets)),
    adv: shuffle(getUserPool('adv', buckets)),
    prep: shuffle(getUserPool('prep', buckets)),
    conj: shuffle(getUserPool('conj', buckets)),
    pron: shuffle(getUserPool('pron', buckets)),
    propNoun: shuffle(getUserPool('propNoun', buckets)),
  };

  let userIdx: Record<SlotType, number> = {
    det: 0, adj: 0, noun: 0, verb: 0, adv: 0,
    prep: 0, conj: 0, pron: 0, propNoun: 0,
  };

  for (const slot of template.slots) {
    const pool = userPools[slot.type];
    let word: string | null = null;

    while (userIdx[slot.type] < pool.length) {
      const candidate = pool[userIdx[slot.type]++];
      if (allowReuse || !used.has(candidate.toLowerCase())) {
        word = candidate;
        break;
      }
    }

    if (!word) {
      word = pickFromPool(pool, used, allowReuse);
    }

    if (!word) {
      word = pickGlue(slot.type, config.glueWords, buckets.letters, used);
    }

    words.push(word);
    used.add(word.toLowerCase());
  }

  return words;
}

function appendExtraWords(
  words: string[],
  buckets: ClassifiedBuckets,
  targetCount: number,
): string[] {
  const allUserWords = [
    ...buckets.nouns,
    ...buckets.verbs,
    ...buckets.adjectives,
    ...buckets.adverbs,
    ...buckets.properNouns,
    ...buckets.flexible,
    ...buckets.phrases,
  ];

  const result = [...words];
  const used = new Set(result.map((w) => w.toLowerCase()));
  let idx = 0;

  while (result.length < targetCount && idx < allUserWords.length * 2) {
    const word = allUserWords[idx % allUserWords.length];
    idx++;
    if (!used.has(word.toLowerCase())) {
      result.push(word);
      used.add(word.toLowerCase());
    } else if (allUserWords.length <= 3) {
      result.push(word);
    }
  }

  return result;
}

function trimToTarget(words: string[], targetCount: number): string[] {
  if (words.length <= targetCount) return words;

  const tolerance = 2;
  if (words.length - targetCount <= tolerance) return words;

  return words.slice(0, targetCount);
}

export function assembleSentence(
  buckets: ClassifiedBuckets,
  config: LocaleConfig,
  wordCount: number,
): string {
  const template = pickTemplate(config.templates, wordCount);
  const totalUserWords =
    buckets.nouns.length +
    buckets.verbs.length +
    buckets.adjectives.length +
    buckets.adverbs.length +
    buckets.properNouns.length +
    buckets.flexible.length +
    buckets.phrases.length;

  const allowReuse = totalUserWords < template.slots.length;
  let words = fillTemplate(template, buckets, config, allowReuse);

  if (words.length < wordCount && totalUserWords > template.slots.length) {
    words = appendExtraWords(words, buckets, wordCount);
  }

  words = trimToTarget(words, wordCount);

  return words.join(' ');
}
