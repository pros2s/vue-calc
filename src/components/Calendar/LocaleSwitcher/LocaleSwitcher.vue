<script setup lang="ts">
import { type LocaleSwitcherPropsI, type LocaleSwitcherEmitsI } from './LocaleSwitcherTypes';
import RuSvg from './assets/ru.svg';
import DeSvg from './assets/de.svg';
import UsSvg from './assets/us.svg';

defineProps<LocaleSwitcherPropsI>();
const emit = defineEmits<LocaleSwitcherEmitsI>();
</script>

<template>
  <button class="switcher" @click="emit('toggleLocale')">
    <img v-if="locale === 'ru'" class="img" :src="RuSvg" alt="ru" />
    <img v-if="locale === 'de'" class="img" :src="DeSvg" alt="de" />
    <img v-if="locale === 'en'" class="img" :src="UsSvg" alt="us" />
  </button>
</template>

<style scoped>
@import './localeSwitcher.css';
</style>
