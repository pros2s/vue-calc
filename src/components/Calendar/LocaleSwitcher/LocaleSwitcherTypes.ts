import type { LocaleType } from '../CalendarTypes';

export interface LocaleSwitcherPropsI {
  locale: LocaleType;
}

export interface LocaleSwitcherEmitsI {
  (evt: 'toggleLocale'): void;
}
