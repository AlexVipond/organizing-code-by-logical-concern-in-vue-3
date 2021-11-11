<template>
  <section ref="root" class="flex flex-col items-center justify-center">
    <h1 class="slide-title">Bye!</h1>
    <h2 class="flex flex-col items-center justify-center">
      <span class="text-3xl font-extrabold text-primary-900">Find the talk notes at </span>
      <a
        href="https://talks.alexvipond.dev"
        rel="noopener noreferrer"
        class="mt-6 text-6xl font-bold text-primary-600 hover:underline"
      >talks.alexvipond.dev</a>
    </h2>
    <section class="grid grid-cols-1 pt-12 gap-20">
      <section class="flex flex-col gap-6 max-w-md text-xl">
        <p class="flex items-start gap-2">
          <!-- TODO: link -->
          <span>📖</span>
          <span>Link to new ebook, <span class="font-bold">Rethinking Reusability in Vue</span>, expanding on this talk's ideas</span>
        </p>
        <p class="flex items-start gap-2">
          <span>🛠️</span>
          <span>Live demos of the three listboxes</span>
        </p>
        <p class="flex items-start gap-2">
          <span>🔗</span>
          <span>Link to git repo for this talk's code</span>
        </p>
        <p class="flex items-start gap-2">
          <span>📽️</span>
          <span>A live copy of this slideshow</span>
        </p>
        <p class="flex items-start gap-2">
          <span>📹</span>
          <span>Links to videos on related concepts, like function refs</span>
        </p>
      </section>
    </section>
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
