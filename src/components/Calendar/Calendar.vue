<script setup lang="ts">
import Header from './Children/Header/Header.vue';
import WeekDays from './Children/WeekDays/WeekDays.vue';

import { useCalendar,  } from './hooks/useCalendar';

import { WEEK_DAYS } from './consts/weekDays';

const {
  headerTitle,
  calendarGrid,
  prevMonth,
  nextMonth,
  selectDate
} = useCalendar()
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
        @click="selectDate(day?.date)"
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
