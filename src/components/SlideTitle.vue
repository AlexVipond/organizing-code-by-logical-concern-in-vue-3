<template>
  <section ref="root" class="flex flex-col items-center justify-center">
    <h1 class="flex flex-col items-center justify-center">
      <span class="text-3xl font-extrabold tracking-[.5rem] uppercase text-primary-900/70">Organizing Code</span>
      <span class="mt-5 text-6xl font-bold text-primary-1000">by Logical Concern</span>
      <span class="mt-7 text-3xl font-extrabold tracking-[.5rem] uppercase text-primary-900/70">in Vue 3</span>
    </h1>
    <p class="mt-10 text-xl">
      <span>Talk notes at </span>
      <a
        href="https://talks.alexvipond.dev"
        rel="noopener noreferrer"
        class="text-primary-600 hover:underline"
      >talks.alexvipond.dev</a>
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut } from '../composition'

const props = defineProps<{ slide: number, xOrder: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.xOrder ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)
</script>
