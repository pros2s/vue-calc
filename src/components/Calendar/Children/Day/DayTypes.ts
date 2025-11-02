import type { CalendarDayI } from '../../types/CalendarType';

export interface DayPropsI {
  day: CalendarDayI | null;
}

export interface DayEmitsI {
  (evt: 'click', date: Date | null): void;
}
