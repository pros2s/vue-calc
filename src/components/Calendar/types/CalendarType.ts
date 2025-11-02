export type WeekDayType = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс';
export type MonthNameType =
  | 'Янв'
  | 'Фев'
  | 'Мар'
  | 'Апр'
  | 'Май'
  | 'Июн'
  | 'Июл'
  | 'Авг'
  | 'Сен'
  | 'Окт'
  | 'Ноя'
  | 'Дек';

export interface CalendarDayI {
  date: Date;
  day: number;
  isToday: boolean;
  isSelected: boolean;
}

export type CalendarDaysType = (CalendarDayI | null)[];
