<script setup lang="ts">
import { WEEK_DAYS } from './consts/weekDays';
import Header from './Header/Header.vue';
import { useCalendar,  } from './hooks/useCalendar';
import WeekDays from './WeekDays/WeekDays.vue';

const {
  headerTitle,
  calendarGrid,
  prevMonth,
  nextMonth,
  selectDate
} = useCalendar()

const handleDayClick = (date?: Date) => {
  if (!date) return;

  selectDate(date)
}
</script>

<template>
	<div class="calendar">
    <Header :title="headerTitle" @prev="prevMonth" @next="nextMonth"/>

		<WeekDays :week-days="WEEK_DAYS"/>

		<!-- Month's days -->
		<div class="days">
			<button
				v-for="(day, index) in calendarGrid"
				:key="index"
        :day="day"
				:class="{ day: true, empty: !day }"
        @click="handleDayClick(day?.date)"
			>
				{{ day?.day ?? '' }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.calendar {
	max-width: 320px;
	border: 1px solid gray;
  margin: auto;
}

.days {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
}

.day {
  text-align: center;
  padding: 10px;
}
</style>
