<template>
  <section class="relative flex flex-col items center justify-center transition duration-150">


    <SlideAssetListboxes :slide="slides.location" />
    
    <h1 class="absolute left-0 bottom-0 w-full text-xs tracking-widest text-center italic text-gray-500">Organizing Code by Logical Concern in Vue 3</h1>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useListenable, useNavigateable } from '@baleada/vue-composition'
import SlideAssetListboxes from './components/SlideAssetListboxes.vue'

const slides = useNavigateable(
  new Array(20)
    .fill(undefined)
    .map((_, index) => index)
)

const left = useListenable('left' as '+left'),
      right = useListenable('right' as '+right')

onMounted(() => {
  left.value.listen(() => slides.value.previous({ loops: false }))
  right.value.listen(() => slides.value.next({ loops: false }))
})
</script>
