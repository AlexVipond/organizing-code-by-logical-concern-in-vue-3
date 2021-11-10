<template>
  <section ref="root" class="h-full flex flex-col items-center justify-center">
    <h2 class="slide-title">Pros and cons of code organization</h2>
    <section class="grid grid-cols-2 items-center gap-20">
      <section class="flex flex-col gap-6">
        <h3 class="text-3xl font-extrabold text-primary-900">Organized by options</h3>
        <ImageWtfsOverTimeOptions
          class="w-96 text-red-500 duration-300"
          :class="{ inaccessible: vertical.location < 1 }"
        />
        <ul class="ml-2 flex flex-col gap-2 list-disc">
          <li class="text-xl duration-300" :class="{ inaccessible: vertical.location < 2 }">
            Fewer "where the F's?" initially
          </li>
          <li class="text-xl duration-300" :class="{ inaccessible: vertical.location < 3 }">
            Over time, "where the F?" count grows steadily
          </li>
        </ul>
      </section>
      <section class="flex flex-col gap-6">
        <h3 class="text-3xl font-extrabold text-primary-900">Organized by logical concern</h3>
        <ImageWtfsOverTimeLogicalConcerns
          class="w-96 text-emerald-500 duration-300"
          :class="{ 'inaccessible': vertical.location < 4 }"
        />
        <ul class="ml-2 flex flex-col gap-2 list-disc">
          <li class="text-xl duration-300" :class="{ inaccessible: vertical.location < 5 }">
            Plenty of "where the F's?" initially
          </li>
          <li class="text-xl duration-300" :class="{ inaccessible: vertical.location < 6 }">
            Over time, "where the F?" count stays low
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut, useVertical } from '../composition'
import ImageWtfsOverTimeOptions from './ImageWtfsOverTimeOptions.vue'
import ImageWtfsOverTimeLogicalConcerns from './ImageWtfsOverTimeLogicalConcerns.vue'

const props = defineProps<{ slide: number, order: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.order ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)

const vertical = useVertical({ length: 7, slide: computed(() => props.slide), order: props.order })
</script>
