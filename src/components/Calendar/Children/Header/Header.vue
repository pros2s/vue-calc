<script setup lang="ts">
import type { HeaderEmitsI, HeaderPropsI } from './HeaderTypes';

defineProps<HeaderPropsI>();
const emit = defineEmits<HeaderEmitsI>();
</script>

<template>
  <div class="calendar-header">
    <button class="nav-btn" aria-label="Previous month" @click="emit('prev')">
      <span class="arrow left-arrow" />
    </button>

    <p>{{ title }}</p>

    <button class="nav-btn" aria-label="Next month" @click="emit('next')">
      <span class="arrow right-arrow" />
    </button>
  </div>
</template>

<style scoped>
@import './header.css';
</style>
