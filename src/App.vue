<script setup lang="ts">
import { ref } from 'vue';
import Calendar from './components/Calendar/Calendar.vue';

// const initialDate = ref<string>("2030-09-21")
const initialDate = ref<string>('');
</script>

<template>
  <Calendar :initial-date="initialDate" />
</template>
