<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()

// Slide counter: exclude cover (1) and closing (last)
const isContentSlide = computed(() => currentPage.value > 1 && currentPage.value < total.value)
const contentIndex = computed(() => currentPage.value - 1)
const contentTotal = computed(() => total.value - 2)
</script>

<template>
  <!-- Slide counter bottom-right (content slides only) -->
  <div v-if="isContentSlide" class="slide-counter">
    {{ contentIndex }} / {{ contentTotal }}
  </div>
</template>

<style scoped>
.slide-counter {
  position: fixed;
  bottom: 16px;
  right: 20px;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  z-index: 100;
  letter-spacing: 0.05em;
}
</style>
