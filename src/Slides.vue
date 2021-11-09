<template>
  <section class="flex flex-col items center justify-center transition duration-150 bg-gray-100">
    <SlideAssetTitle class="absolute inset-0 p-10" :slide="horizontal.location" :order="0" />

    <SlideAssetHighlightedCode class="absolute inset-0 p-10" :slide="horizontal.location" :order="1" />
    
    <SlideAssetListboxes class="absolute inset-0 p-10" :slide="horizontal.location" :order="2" />
    
    <h1 class="absolute left-0 bottom-4 w-full text-xs tracking-widest text-center italic text-gray-500">Organizing Code by Logical Concern in Vue 3</h1>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useListenable, useNavigateable } from '@baleada/vue-composition'
import SlideAssetTitle from './components/SlideAssetTitle.vue'
import SlideAssetHighlightedCode from './components/SlideAssetHighlightedCode.vue'
import SlideAssetListboxes from './components/SlideAssetListboxes.vue'

console.log(SlideAssetTitle)

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
