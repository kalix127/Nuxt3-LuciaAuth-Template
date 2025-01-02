<script lang="ts" setup>
import { useClipboard } from '@vueuse/core';

const input = ref(
  'git clone https://github.com/kalix127/Nuxt3-LuciaAuth-Template.git',
);
const { copy } = useClipboard();

const copied = ref(false);

function handleCopy() {
  copy(input.value);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1000);
}
</script>

<template>
  <div class="hero">
    <div class="hero-content text-center">
      <div class="flex max-w-lg flex-col items-center gap-6">
        <div class="flex items-center justify-center gap-4">
          <Icon name="logos:nuxt-icon" size="50" />
          <span class="select-none text-4xl"> + </span>
          <Icon name="simple-icons:lucia" size="50" />
        </div>
        <h1 class="text-5xl font-bold leading-[55px]">
          Nuxt.js Lucia-Auth Template
        </h1>
        <p class="">
          A Nuxt.js Authentication template (login, register, email validation,
          reset password and oauth) using Lucia-Auth, Prisma, PostgreSQL and
          Mailtrap.
        </p>
        <div class="flex w-full items-center justify-center gap-4">
          <input
            v-model="input"
            aria-label="Git clone command"
            :disabled="true"
            type="text"
            class="custom-disabled input input-bordered input-primary w-full"
          >
          <button
            aria-label="Copy git clone command"
            class="btn btn-neutral"
            :disabled="copied"
            @click="handleCopy"
          >
            <Icon
              v-if="!copied"
              name="material-symbols:content-copy-outline-rounded"
              size="22"
            />
            <Icon v-else name="lets-icons:done-round" size="22" />
          </button>
        </div>
        <div class="flex w-full items-center justify-center gap-4">
          <a
            href="https://github.com/kalix127/Nuxt3-LuciaAuth-Template"
            target="_blank"
            class="btn btn-primary btn-neutral"
          >
            <Icon name="mdi:github" size="24" />
            Github</a>
          <NuxtLink to="/auth/login" class="btn btn-primary">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-disabled:disabled {
  cursor: text;
  opacity: 1;
  pointer-events: none;
}
</style>
