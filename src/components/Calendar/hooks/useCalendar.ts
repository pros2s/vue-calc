import { computed, ref } from 'vue';
import type { CalendarDaysType } from '../types/CalendarType';
import { MONTH_NAMES } from '../consts/monthNames';

export const useCalendar = (initialDate: Date = new Date()) => {
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
    for (let i = offset - 1; i >= 0; i--) {
      days.push(null);
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
      });
    }

    return days;
  });

  const selectDate = (date?: Date) => {
    if (!date) return;

    selectedDate.value = date;

    return date;
  };

  const headerTitle = computed(() => {
    return `${MONTH_NAMES[currentMonth.value]} ${currentYear.value}`;
  });

  return {
    currentYear,
    currentMonth,
    selectedDate,
    headerTitle,
    calendarGrid,
    prevMonth,
    nextMonth,
    selectDate,
  };
};
