<script setup lang="ts">
import { useCalendar, WEEK_DAYS } from './hooks/useCalendar';

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
		<!-- Header -->
		<div class="calendar-header">
			<button @click="prevMonth" class="nav-btn left-arrow"/>
			<p>{{ headerTitle }}</p>
			<button @click="nextMonth" class="nav-btn right-arrow"/>
		</div>

		<!-- Week days -->
		<div class="weekdays">
			<span v-for="day in WEEK_DAYS" :key="day" class="weekday">
				{{ day }}
			</span>
		</div>

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

.calendar-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding: 10px;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.nav-btn {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

}

.left-arrow {
  border-right: 8px solid #fff;
}

.right-arrow {
  border-left: 8px solid #fff;
}

.weekdays {
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
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
