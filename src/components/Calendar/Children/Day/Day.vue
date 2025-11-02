<script setup lang="ts">
import type { DayEmitsI, DayPropsI } from './DayTypes';

const props = defineProps<DayPropsI>();
const { date = null, day = '', isSelected = false, isToday = false } = props.day ?? {};

const emit = defineEmits<DayEmitsI>();
</script>

<template>
  <button
    :class="{
      day: true,
      empty: !day,
      today: isToday,
      selected: isSelected,
    }"
    :aria-label="date?.toLocaleDateString('ru-RU')"
    :aria-pressed="isSelected"
    @click="emit('click', date)"
  >
    {{ day }}
  </button>
</template>

<style>
@import './day.css';
</style>
