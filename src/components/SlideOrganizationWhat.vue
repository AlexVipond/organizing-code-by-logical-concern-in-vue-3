<template>
  <section ref="root" class="h-full flex flex-col items-center">
    <h2 class="slide-title">What does it mean to organize by logical concern?</h2>
    <section class="grid grid-cols-2 pt-12 gap-20">
      <section class="flex flex-col gap-10 max-w-md">
        <h3 class="text-3xl font-extrabold text-primary-900">What are options?</h3>
        <p class="text-2xl p-2 text-red-900 bg-red-100 rounded-sm shadow-md duration-300" :class="{ inaccessible: y.location < 1 }">
          Options are categories that describe what your code <span class="font-extrabold">is</span>.
        </p>
        <section class="flex flex-col gap-3 text-xl duration-300" :class="{ inaccessible: y.location < 2 }">
          <p>
            The <code>data</code> category holds <span class="bold">reactive references</span>
          </p>
          <p>
            The <code>computed</code> category holds <span class="bold">memoized values</span>
          </p>
          <p>
            The <code>methods</code> category holds <span class="bold">functions that mutate data</span>
          </p>
          <p>
            ...etc.
          </p>
        </section>
        <p class="mt-auto text-2xl p-2 text-red-900 bg-red-100 rounded-sm shadow-md duration-300" :class="{ inaccessible: y.location < 3 }">
          Code inside each category <span class="font-bold">is not</span> tightly coupled.
        </p>
      </section>
      <section class="flex flex-col gap-10 max-w-md">
        <h3 class="text-3xl font-extrabold text-primary-900">What are logical concerns?</h3>
        <p class="text-2xl p-2 text-emerald-900 bg-emerald-100 rounded-sm shadow-md duration-300" :class="{ inaccessible: y.location < 4 }">
          Logical concerns are categories that describe what your code <span class="font-extrabold">does</span>.
        </p>
        <section class="flex flex-col gap-3 text-xl duration-300" :class="{ inaccessible: y.location < 5 }">
          <p>
            Each <span class="font-bold">feature</span> in your <code>setup</code> or composition function is a logical concern
          </p>
          <p>
            Concerns <span class="font-bold">change</span> for every function
          </p>
          <p>
            There's <span class="font-bold">no limit</span> to the number of concerns you can have in a given function
          </p>
        </section>
        <p class="mt-auto text-2xl p-2 text-emerald-900 bg-emerald-100 rounded-sm shadow-md duration-300" :class="{ inaccessible: y.location < 6 }">
          Code inside each category <span class="font-bold">is</span> tightly coupled.
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

const { y } = useY({ length: 7, slide: computed(() => props.slide), xOrder: props.xOrder })
</script>
