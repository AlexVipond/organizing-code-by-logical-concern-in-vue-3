<template>
  <section class="flex flex-col items center justify-center transition duration-150 bg-gray-100" :class="{ 'opacity-0': status === 'showing' }">
    <SlideTitle class="absolute inset-0 p-10" :slide="x.location" :xOrder="0" />

    <SlideHighlightedCode class="absolute inset-0 p-10" :slide="x.location" :xOrder="1" />

    <SlideOrganizationWhat class="absolute inset-0 p-10" :slide="x.location" :xOrder="2" />
    
    <SlideOrganizationWhy class="absolute inset-0 p-10" :slide="x.location" :xOrder="3" />
    
    <SlideListboxes class="absolute inset-0 p-10" :slide="x.location" :xOrder="4" />
    
    <h1 class="slide-title text-right duration-200 delay-300" :class="{ inaccessible: x.location < 1 }">Organizing Code by Logical Concern in Vue 3</h1>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useListenable, useNavigateable } from '@baleada/vue-composition'
import SlideTitle from './components/SlideTitle.vue'
import SlideOrganizationWhat from './components/SlideOrganizationWhat.vue'
import SlideOrganizationWhy from './components/SlideOrganizationWhy.vue'
import SlideHighlightedCode from './components/SlideHighlightedCode.vue'
import SlideListboxes from './components/SlideListboxes.vue'

console.log(SlideTitle)


// STATUS
const status = ref<'showing' | 'shown'>('showing')
nextTick(() => status.value = 'shown')


// NAVIGATION
const x = useNavigateable(
  new Array(20).fill(0).map((_, index) => index)
)

const left = useListenable('left' as '+left'),
      right = useListenable('right' as '+right')

onMounted(() => {
  left.value.listen(() => x.value.previous({ loops: false }))
  right.value.listen(() => x.value.next({ loops: false }))
})
</script>
