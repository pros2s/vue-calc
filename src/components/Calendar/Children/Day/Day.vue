<script setup lang="ts">
import type { DayEmitsI, DayPropsI } from './DayTypes';

defineProps<DayPropsI>();

const emit = defineEmits<DayEmitsI>();
</script>

<template>
  <button
    :class="{
      day: true,
      empty: !day?.isCurrentMonth,
      today: day?.isToday,
      selected: day?.isSelected,
    }"
    :aria-label="day?.date?.toLocaleDateString('ru-RU')"
    :aria-pressed="day?.isSelected"
    @click="emit('click', day?.date ?? null)"
  >
    {{ day?.day }}
  </button>
</template>

<style>
@import './day.css';
</style>
