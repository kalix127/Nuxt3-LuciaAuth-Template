<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <div class="grid min-h-screen place-content-center">
    <slot />
    <SpeedInsights />
  </div>
</template>

<style></style>
