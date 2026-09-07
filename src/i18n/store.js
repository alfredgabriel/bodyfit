import { writable, derived } from 'svelte/store';
import { translations } from './translations.js';

export const currentLang = writable('es');

export const t = derived(currentLang, ($lang) => {
  return translations[$lang] || translations.es;
});

export function setLanguage(lang) {
  if (translations[lang]) {
    currentLang.set(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }
}
