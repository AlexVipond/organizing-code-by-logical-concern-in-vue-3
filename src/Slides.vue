<template>
  <section class="flex flex-col items center justify-center transition duration-150 bg-gray-100" :class="{ 'opacity-0': status === 'loading' }">
    <SlideTitle class="absolute inset-0 p-10" :slide="horizontal.location" :order="0" />

    <SlideHighlightedCode class="absolute inset-0 p-10" :slide="horizontal.location" :order="1" />

    <SlideOrganizationProsAndCons class="absolute inset-0 p-10" :slide="horizontal.location" :order="2" />
    
    <SlideListboxes class="absolute inset-0 p-10" :slide="horizontal.location" :order="3" />
    
    <h1 class="slide-title text-right duration-200 delay-300" :class="{ inaccessible: horizontal.location < 1 }">Organizing Code by Logical Concern in Vue 3</h1>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useListenable, useNavigateable } from '@baleada/vue-composition'
import SlideTitle from './components/SlideTitle.vue'
import SlideOrganizationProsAndCons from './components/SlideOrganizationProsAndCons.vue'
import SlideHighlightedCode from './components/SlideHighlightedCode.vue'
import SlideListboxes from './components/SlideListboxes.vue'

console.log(SlideTitle)

const status = ref<'loading' | 'loaded'>('loading')

nextTick(() => {
  status.value = 'loaded'
})

const horizontal = useNavigateable(
  new Array(20)
    .fill(undefined)
    .map((_, index) => index)
)

const left = useListenable('left' as '+left'),
      right = useListenable('right' as '+right')

onMounted(() => {
  left.value.listen(() => horizontal.value.previous({ loops: false }))
  right.value.listen(() => horizontal.value.next({ loops: false }))
})
</script>
