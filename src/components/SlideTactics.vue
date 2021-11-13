<template>
  <section ref="root" class="h-full flex flex-col items-center">
    <h1 class="slide-title">Tactics for organizing by logical concern</h1>
    <h2 class="text-3xl text-center font-extrabold text-primary-900">Tactics 🎯</h2>
    <section class="grid grid-cols-1 pt-12 gap-20">
      <section class="flex flex-col gap-6 max-w-md text-xl">
        <p class="duration-300" :class="{ inaccessible: y.location < 1 }">
          Often, each <code>data</code> property is the foundation of a separate logical concern. Create a section for each one.
        </p>
        <p class="duration-300" :class="{ inaccessible: y.location < 2 }">
          Within sections, start with reactive state, then write methods, then write side effects.
        </p>
        <p class="duration-300" :class="{ inaccessible: y.location < 3 }">
          Create multiple watchers for the same reactive state, and multiple lifecycle hooks of the same type, multiple event handlers for the same event.
        </p>
        <p class="duration-300" :class="{ inaccessible: y.location < 4 }">
          <span class="font-bold">Be consistent.</span>
        </p>
        <p class="p-2 text-emerald-900 bg-emerald-100 rounded-sm shadow-md duration-300" :class="{ inaccessible: y.location < 5 }">
          Bonus: organize <span class="font-bold">template-related code</span> by logical concern.
        </p>
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

const { y } = useY({ length: 6, slide: computed(() => props.slide), xOrder: props.xOrder })
</script>
