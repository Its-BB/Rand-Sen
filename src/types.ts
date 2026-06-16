export type TokenType = 'word' | 'letter' | 'phrase';

export interface InputToken {
  raw: string;
  normalized: string;
  type: TokenType;
}

export type SlotType =
  | 'det'
  | 'adj'
  | 'noun'
  | 'verb'
  | 'adv'
  | 'prep'
  | 'conj'
  | 'pron'
  | 'propNoun';

export type PosTag = 'noun' | 'verb' | 'adjective' | 'adverb' | 'properNoun' | 'flexible';

export interface TemplateSlot {
  type: SlotType;
}

export interface SentenceTemplate {
  id: string;
  slots: TemplateSlot[];
}

export interface ClassifiedBuckets {
  nouns: string[];
  verbs: string[];
  adjectives: string[];
  adverbs: string[];
  properNouns: string[];
  flexible: string[];
  letters: string[];
  phrases: string[];
}

export interface LocaleConfig {
  templates: SentenceTemplate[];
  glueWords: Record<SlotType, string[]>;
  suffixRules: { suffix: string; pos: PosTag }[];
  lexicon: Record<string, PosTag>;
}

export type Locale = 'en';
