<script setup lang="ts">
import Header from './children/Header/Header.vue';
import WeekDays from './children/WeekDays/WeekDays.vue';
import Day from './children/Day/Day.vue';

import type { CalendarPropsI } from './CalendarTypes';
import { useInitialDate } from './hooks/useInitialDate';
import { useCalendar } from './hooks/useCalendar';
import { useChangeLocale } from './hooks/useChangeLocale';

const props = defineProps<CalendarPropsI>();

const initialDate = useInitialDate(props.initialDate);

const { locale, toggleLocale } = useChangeLocale();

const { headerTitle, calendarGrid, weekdays, prevMonth, nextMonth, selectDate } = useCalendar(
  initialDate.value,
  locale,
);

if (props.initialDate) {
  selectDate(initialDate.value);
}

const handleDayClick = (date: Date | null) => {
  selectDate(date);
};
</script>

<template>
  <div class="container">
    <div class="calendar">
      <Header :title="headerTitle" @prev="prevMonth" @next="nextMonth" />

      <WeekDays :week-days="weekdays" />

      <div class="days">
        <Day v-for="day in calendarGrid" :key="day.date.getTime()" :day @click="handleDayClick(day.date)" />
      </div>
    </div>

    <button @click="toggleLocale">{{ locale }}</button>
  </div>
</template>

<style scoped>
@import './calendar.css';
</style>
