import { ref } from 'vue';
import type { LocaleType } from '../../../AppTypes';

const locales = ['ru', 'en', 'de'] as const;

export const useChangeLocale = () => {
  const locale = ref<LocaleType>('ru');

  const toggleLocale = () => {
    const i = locales.indexOf(locale.value);
    locale.value = locales[(i + 1) % locales.length] ?? locales[0];
  };

  return {
    locale,
    toggleLocale,
  };
};
