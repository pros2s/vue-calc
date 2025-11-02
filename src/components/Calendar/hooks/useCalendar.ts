import { computed, ref, watchEffect, type Ref } from 'vue';
import type { CalendarDaysType } from '../CalendarTypes';
import type { LocaleType } from '../../../AppTypes';
import { locales } from '../consts/config';

export const useCalendar = (initialDate: Date = new Date(), localeRef: Ref<LocaleType>) => {
  const currentYear = ref(initialDate.getFullYear());
  const currentMonth = ref(initialDate.getMonth());
  const selectedDate = ref<Date | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  };

  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  };

  const firstDayOfMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value, 1).getDay();
  });

  const daysInMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
  });

  const startOffset = computed(() => {
    const day = firstDayOfMonth.value;
    return day === 0 ? 6 : day - 1;
  });

  const calendarGrid = computed((): CalendarDaysType => {
    const days: CalendarDaysType = [];

    const year = currentYear.value;
    const month = currentMonth.value;
    const totalDays = daysInMonth.value;
    const offset = startOffset.value;

    // empty squares
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = offset - 1; i >= 0; i--) {
      const dayNum = prevMonthDays - i;
      const date = new Date(year, month - 1, dayNum);
      days.push({
        date,
        day: dayNum,
        isToday: false,
        isSelected: false,
        isCurrentMonth: false,
      });
    }

    // current month
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      date.setHours(0, 0, 0, 0);
      const isToday = date.getTime() === today.getTime();

      const isSelected = selectedDate.value?.getTime() === date.getTime();

      days.push({
        date,
        day,
        isToday,
        isSelected,
        isCurrentMonth: true,
      });
    }

    return days;
  });

  const selectDate = (date: Date | null) => {
    selectedDate.value = date;

    console.log(date);
    return date;
  };

  const headerTitle = ref('');
  const weekdays = ref<string[]>([]);

  watchEffect(() => {
    const loc = locales[localeRef.value];
    headerTitle.value = `${loc.months[currentMonth.value]} ${currentYear.value}`;
    weekdays.value = loc.weekdays;
  });

  return {
    currentYear,
    currentMonth,
    selectedDate,
    headerTitle,
    calendarGrid,
    weekdays,
    prevMonth,
    nextMonth,
    selectDate,
  };
};
