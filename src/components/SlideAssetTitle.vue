<template>
  <section ref="root" class="flex flex-col items-center justify-center">
    <h1 class="flex flex-col items-center justify-center">
      <span class="text-3xl font-extrabold tracking-widest uppercase text-primary-900">Organizing Code</span>
      <span class="mt-2 text-6xl font-bold text-primary-1000">by Logical Concern</span>
      <span class="mt-4 text-3xl font-extrabold tracking-widest uppercase text-primary-900">in Vue 3</span>
    </h1>
    <h3 class="mt-10 text-xl">Alex Vipond</h3>
    <a
      href="https://vueconf.alexvipond.dev"
      rel="noopener noreferrer"
      class="mt-1 text-primary-600 hover:underline"
    >vueconf.alexvipond.dev</a>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut } from '../composition'

const props = defineProps<{ slide: number, order: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.order ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)
</script>
