<script setup lang="ts">
import type { WeekDaysPropsI } from './WeekDaysTypes';

defineProps<WeekDaysPropsI>();
</script>

<template>
  <div class="weekdays">
    <span v-for="day in weekDays" :key="day">
      {{ day }}
    </span>
  </div>
</template>

<style>
@import './weekDays.css';
</style>
