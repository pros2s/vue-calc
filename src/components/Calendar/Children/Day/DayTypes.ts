import type { CalendarDayI } from '../../CalendarTypes';

export interface DayPropsI {
  day: CalendarDayI | null;
}

export interface DayEmitsI {
  (evt: 'click', date: Date | null): void;
}
