import type { Locale, LocaleConfig } from '../types';
import { glueWords } from './en/glueWords';
import { suffixRules } from './en/suffixRules';
import { templates } from './en/templates';
import { lexicon } from './en/lexicon';

const locales: Record<Locale, LocaleConfig> = {
  en: {
    templates,
    glueWords,
    suffixRules,
    lexicon,
  },
};

export function getLocaleConfig(locale: Locale = 'en'): LocaleConfig {
  return locales[locale];
}

export { locales };
