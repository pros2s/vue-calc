<script setup lang="ts">
import type { EmitsI, PropsI } from './HeaderTypes';

defineProps<PropsI>();
const emit = defineEmits<EmitsI>();
</script>

<template>
  <div class="calendar-header">
    <button class="nav-btn" @click="emit('prev')" aria-label="Previous month">
      <span class="arrow left-arrow" />
    </button>

    <p>{{ title }}</p>

    <button class="nav-btn" @click="emit('next')" aria-label="Next month">
      <span class="arrow right-arrow" />
    </button>
  </div>
</template>

<style scoped>
@import './header.css';
</style>
