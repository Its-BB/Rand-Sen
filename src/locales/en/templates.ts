import type { SentenceTemplate } from '../../types';

export const templates: SentenceTemplate[] = [
  {
    id: 'short-1',
    slots: [
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'adv' },
    ],
  },
  {
    id: 'short-2',
    slots: [
      { type: 'pron' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' }, { type: 'det' }, { type: 'noun' },
    ],
  },
  {
    id: 'short-3',
    slots: [
      { type: 'det' }, { type: 'noun' }, { type: 'verb' }, { type: 'prep' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' },
    ],
  },
  {
    id: 'short-4',
    slots: [
      { type: 'propNoun' }, { type: 'verb' }, { type: 'adv' }, { type: 'conj' }, { type: 'det' }, { type: 'noun' }, { type: 'verb' },
    ],
  },
  {
    id: 'short-5',
    slots: [
      { type: 'adv' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'prep' }, { type: 'pron' },
    ],
  },
  {
    id: 'medium-1',
    slots: [
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'adv' },
      { type: 'prep' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' },
    ],
  },
  {
    id: 'medium-2',
    slots: [
      { type: 'det' }, { type: 'noun' }, { type: 'verb' }, { type: 'prep' }, { type: 'det' },
      { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'pron' }, { type: 'verb' }, { type: 'adv' },
    ],
  },
  {
    id: 'medium-3',
    slots: [
      { type: 'adv' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' },
      { type: 'prep' }, { type: 'det' }, { type: 'noun' }, { type: 'conj' }, { type: 'det' }, { type: 'noun' }, { type: 'verb' },
    ],
  },
  {
    id: 'medium-4',
    slots: [
      { type: 'propNoun' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' }, { type: 'det' },
      { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'pron' }, { type: 'verb' },
    ],
  },
  {
    id: 'medium-5',
    slots: [
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'det' },
      { type: 'noun' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' }, { type: 'det' }, { type: 'noun' },
    ],
  },
  {
    id: 'medium-6',
    slots: [
      { type: 'pron' }, { type: 'verb' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' },
      { type: 'prep' }, { type: 'det' }, { type: 'noun' }, { type: 'conj' }, { type: 'adv' }, { type: 'verb' },
    ],
  },
  {
    id: 'long-1',
    slots: [
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'adv' },
      { type: 'prep' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'conj' },
      { type: 'pron' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' }, { type: 'det' }, { type: 'noun' },
    ],
  },
  {
    id: 'long-2',
    slots: [
      { type: 'adv' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' },
      { type: 'prep' }, { type: 'det' }, { type: 'noun' }, { type: 'conj' }, { type: 'det' },
      { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' }, { type: 'pron' },
    ],
  },
  {
    id: 'long-3',
    slots: [
      { type: 'propNoun' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' }, { type: 'det' },
      { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'det' }, { type: 'noun' },
      { type: 'verb' }, { type: 'prep' }, { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'adv' },
    ],
  },
  {
    id: 'long-4',
    slots: [
      { type: 'det' }, { type: 'noun' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' },
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'pron' },
      { type: 'verb' }, { type: 'det' }, { type: 'noun' }, { type: 'prep' }, { type: 'det' }, { type: 'noun' },
    ],
  },
  {
    id: 'long-5',
    slots: [
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'prep' },
      { type: 'det' }, { type: 'noun' }, { type: 'conj' }, { type: 'adv' }, { type: 'det' },
      { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'prep' }, { type: 'det' },
      { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'pron' }, { type: 'verb' },
    ],
  },
  {
    id: 'long-6',
    slots: [
      { type: 'adv' }, { type: 'det' }, { type: 'noun' }, { type: 'verb' }, { type: 'prep' },
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'propNoun' },
      { type: 'verb' }, { type: 'adv' }, { type: 'prep' }, { type: 'det' }, { type: 'noun' },
      { type: 'conj' }, { type: 'pron' }, { type: 'verb' }, { type: 'adv' },
    ],
  },
  {
    id: 'extra-1',
    slots: [
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'verb' }, { type: 'det' }, { type: 'noun' },
    ],
  },
  {
    id: 'extra-2',
    slots: [
      { type: 'pron' }, { type: 'verb' }, { type: 'prep' }, { type: 'det' }, { type: 'adj' },
      { type: 'noun' }, { type: 'conj' }, { type: 'det' }, { type: 'noun' },
    ],
  },
  {
    id: 'extra-3',
    slots: [
      { type: 'det' }, { type: 'noun' }, { type: 'verb' }, { type: 'adv' }, { type: 'prep' },
      { type: 'det' }, { type: 'adj' }, { type: 'noun' }, { type: 'conj' }, { type: 'verb' },
      { type: 'det' }, { type: 'noun' }, { type: 'adv' }, { type: 'prep' }, { type: 'pron' },
    ],
  },
];
