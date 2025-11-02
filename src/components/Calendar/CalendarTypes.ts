export interface CalendarDayI {
  date: Date;
  day: number;
  isToday: boolean;
  isSelected: boolean;
  isCurrentMonth: boolean;
}

export type CalendarDaysType = CalendarDayI[];

export interface CalendarPropsI {
  initialDate?: string;
}

export type LocaleType = 'ru' | 'en' | 'de';
