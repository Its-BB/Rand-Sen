import type { SlotType } from '../../types';

export const glueWords: Record<SlotType, string[]> = {
  det: ['the', 'a', 'an', 'some', 'every', 'this', 'that', 'each', 'no', 'any'],
  adj: [
    'bright', 'quiet', 'gentle', 'wild', 'ancient', 'hidden', 'golden', 'fierce',
    'tender', 'vast', 'strange', 'clever', 'swift', 'deep', 'soft', 'bold',
    'fragile', 'endless', 'mysterious', 'radiant', 'silent', 'warm', 'cold',
    'distant', 'eager', 'hollow', 'keen', 'lonely', 'mighty', 'narrow',
  ],
  noun: [
    'shadow', 'river', 'dream', 'forest', 'light', 'voice', 'path', 'star',
    'wind', 'heart', 'stone', 'cloud', 'flame', 'ocean', 'garden', 'mirror',
    'bridge', 'valley', 'horizon', 'whisper', 'memory', 'secret', 'journey',
    'moment', 'echo', 'thunder', 'crystal', 'harbor', 'spirit', 'wonder',
  ],
  verb: [
    'whispers', 'glows', 'drifts', 'dances', 'rises', 'falls', 'shines',
    'wanders', 'echoes', 'breathes', 'gathers', 'unfolds', 'lingers', 'awaits',
    'embraces', 'reveals', 'carries', 'touches', 'guides', 'opens', 'closes',
    'flows', 'sparks', 'glimmers', 'travels', 'rests', 'grows', 'fades',
  ],
  adv: [
    'softly', 'slowly', 'gently', 'quietly', 'deeply', 'boldly', 'swiftly',
    'silently', 'brightly', 'wildly', 'endlessly', 'suddenly', 'always',
    'never', 'often', 'rarely', 'truly', 'merely', 'barely', 'nearly',
    'clearly', 'warmly', 'coldly', 'fiercely', 'tenderly', 'keenly',
  ],
  prep: [
    'under', 'over', 'through', 'beyond', 'within', 'across', 'beneath',
    'along', 'around', 'between', 'toward', 'into', 'from', 'near', 'upon',
    'against', 'beside', 'behind', 'before', 'after', 'during', 'without',
  ],
  conj: ['and', 'but', 'or', 'yet', 'so', 'for', 'nor', 'while', 'as', 'when'],
  pron: ['it', 'they', 'we', 'she', 'he', 'you', 'I', 'one', 'all', 'each'],
  propNoun: [
    'Atlas', 'Luna', 'River', 'Sky', 'Dawn', 'Echo', 'Nova', 'Sage',
    'Storm', 'Willow', 'Orion', 'Iris', 'Phoenix', 'Cedar', 'Aurora',
  ],
};
