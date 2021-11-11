<template>
  <section ref="root">
    <h1 class="slide-title">The promise of Vue 3</h1>
    <section class="flex items-start justify-center gap-16 pb-20">
      <section
        class="w-48 flex flex-col gap-1 duration-300"
        :class="{
          'translate-x-1/2': y.location < 1,
        }"
      >
        <img
          src="/highlighted-listbox-options-api.png"
          alt="Highlighted code"
          class="w-full"
        >
        <h2 class="text-gray-700">Options API</h2>
      </section>
      
      <section class="w-48 flex flex-col gap-1 transition duration-300" :class="{ inaccessible: y.location < 1 }">
        <img
          src="/highlighted-listbox-composition-api-organized-by-options.png"
          alt="Highlighted code"
          class="w-full"
        >
        <h2 class="text-gray-700">Composition API, organized by options</h2>
      </section>
      
      <section
        class="w-48 flex flex-col gap-1 duration-300"
        :class="{
          '-translate-x-1/2': y.location < 1,
        }"
      >
        <img
          src="/highlighted-listbox-composition-api-organized-by-logical-concern.png"
          alt="Highlighted code"
          class="w-full"
        >
        <h2 class="text-gray-700">Composition API, organized by logical concern</h2>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut, useY } from '../composition'

const props = defineProps<{ slide: number, xOrder: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.xOrder ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)

const { y } = useY({ length: 2, slide: computed(() => props.slide), xOrder: props.xOrder })
</script>
