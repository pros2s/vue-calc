<script setup lang="ts">
import { ref, computed } from 'vue';

const year = ref(new Date().getFullYear());
const month = ref(new Date().getMonth());

const monthNames = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
] as const;

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const;

// months
const prevMonth = () => {
	if (month.value === 0) {
		month.value = 11;
		year.value--;
	} else {
		month.value--;
	}
};

const nextMonth = () => {
	if (month.value === 11) {
		month.value = 0;
		year.value++;
	} else {
		month.value++;
	}
};

const firstDayOfMonth = computed(() =>
	new Date(year.value, month.value, 1).getDay(),
);

const daysInMonth = computed(() =>
	new Date(year.value, month.value + 1, 0).getDate(),
);

// empty squares before start day
const startOffset = computed(() => {
	const day = firstDayOfMonth.value;
	return day === 0 ? 6 : day - 1;
});

// calendar net
const calendarDays = computed((): (number | null)[] => {
	const days: (number | null)[] = [];

	// empty squares
	for (let i = 0; i < startOffset.value; i++) {
		days.push(null);
	}

	for (let day = 1; day <= daysInMonth.value; day++) {
		days.push(day);
	}

	return days;
});
</script>

<template>
	<div class="calendar">
		<!-- Header -->
		<div class="calendar-header">
			<button @click="prevMonth" class="nav-btn left-arrow"/>
			<p>{{ monthNames[month] }} {{ year }}</p>
			<button @click="nextMonth" class="nav-btn right-arrow"/>
		</div>

		<!-- Week days -->
		<div class="weekdays">
			<span v-for="day in weekDays" :key="day" class="weekday">
				{{ day }}
			</span>
		</div>

		<!-- Month's days -->
		<div class="days">
			<button
				v-for="(day, index) in calendarDays"
				:key="index"
				:class="{ day: true, empty: !day }"
			>
				{{ day ?? '' }}
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
  font-size: 1rem;
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
