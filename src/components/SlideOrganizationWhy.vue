<template>
  <section ref="root" class="h-full flex flex-col items-center">
    <h2 class="slide-title">Why organize by logical concern?</h2>
    <section class="grid grid-cols-2 pt-12 gap-20">
      <section class="flex flex-col gap-6">
        <h3 class="text-3xl font-extrabold text-primary-900">Why organize by options?</h3>
        <ImageWtfsOverTimeOptions
          class="w-96 text-red-500 duration-300"
          :class="{ inaccessible: y.location < 1 }"
        />
        <section class="flex flex-col gap-2 text-xl">
          <p class="duration-300" :class="{ inaccessible: y.location < 2 }">
            Fewer "where the F's?" initially
          </p>
          <p class="duration-300" :class="{ inaccessible: y.location < 3 }">
            Over time, "where the F?" count grows steadily
          </p>
        </section>
      </section>
      <section class="flex flex-col gap-6">
        <h3 class="text-3xl font-extrabold text-primary-900">Why organized by logical concern?</h3>
        <ImageWtfsOverTimeLogicalConcerns
          class="w-96 text-emerald-500 duration-300"
          :class="{ 'inaccessible': y.location < 4 }"
        />
        <section class="flex flex-col gap-2 text-xl">
          <p class="duration-300" :class="{ inaccessible: y.location < 5 }">
            Plenty of "where the F's?" initially
          </p>
          <p class="duration-300" :class="{ inaccessible: y.location < 6 }">
            Over time, "where the F?" count stays low
          </p>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut, useY } from '../composition'
import ImageWtfsOverTimeOptions from './ImageWtfsOverTimeOptions.vue'
import ImageWtfsOverTimeLogicalConcerns from './ImageWtfsOverTimeLogicalConcerns.vue'

const props = defineProps<{ slide: number, xOrder: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.xOrder ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)

const { y } = useY({ length: 7, slide: computed(() => props.slide), xOrder: props.xOrder })
</script>
