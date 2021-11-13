<template>
  <section ref="root" class="flex flex-col items-center justify-center">
    <h1 class="slide-title">Bye!</h1>
    <h2 class="flex flex-col items-center justify-center">
      <span class="text-3xl font-extrabold text-primary-900">Find the talk notes at </span>
      <a
        href="https://talks.alexvipond.dev"
        rel="noopener noreferrer"
        class="mt-4 text-6xl font-bold text-primary-600 hover:underline"
      >talks.alexvipond.dev</a>
    </h2>
    <p class="mt-5 flex items-center gap-10">
      <a
        href="https://twitter.com/AlPalVipond"
        rel="noopener noreferrer"
        class="text-2xl flex items-center gap-2 text-primary-600 hover:underline"
      >
        <svg class="fill-current h-[1em] w-[1em]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        @AlPalVipond
      </a>
    </p>
    <section class="mt-12 grid grid-cols-1 gap-20">
      <section class="flex flex-col gap-6 max-w-md text-xl">
        <p class="flex items-start gap-2">
          <!-- TODO: link -->
          <span>📖</span>
          <span>Link to new ebook, <span class="font-bold">Rethinking Reusability in Vue</span>, expanding on this talk's ideas</span>
        </p>
        <p class="flex items-start gap-2">
          <span>🔗</span>
          <span>Link to git repo for this talk's code</span>
        </p>
        <p class="flex items-start gap-2">
          <span>📽️</span>
          <span>A live copy of this slideshow, including live demos of the listboxes</span>
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
