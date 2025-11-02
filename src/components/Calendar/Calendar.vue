<script setup lang="ts">
import Header from './children/Header/Header.vue';
import WeekDays from './children/WeekDays/WeekDays.vue';

import { useCalendar } from './hooks/useCalendar';

import { WEEK_DAYS } from './consts/weekDays';
import Day from './children/Day/Day.vue';

const {
  headerTitle,
  calendarGrid,
  prevMonth,
  nextMonth,
  selectDate
} = useCalendar()

const handleDayClick = (date: Date | null) => {
  selectDate(date)
}
</script>

<template>
	<div class="calendar">
    <Header :title="headerTitle" @prev="prevMonth" @next="nextMonth"/>

		<WeekDays :week-days="WEEK_DAYS"/>

		<div class="days">
			<Day
        v-for="(day, index) in calendarGrid"
        :key="new Date().getTime() + index"
        :day="day"
        @click="handleDayClick"
      />
		</div>
	</div>
</template>

<style scoped>
@import './calendar.css'
</style>
