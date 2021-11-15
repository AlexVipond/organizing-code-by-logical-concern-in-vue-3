<template>
  <section class="flex flex-col items center justify-center transition duration-150 bg-gray-100 text-primary-1000" :class="{ 'opacity-0': status === 'showing' }">
    <section class="absolute z-10 top-4 left-1/2 -translate-x-1/2 flex gap-4">
      <button
        v-for="location in x.array"
        class="p-1 rounded-full border border-primary-900 duration-150"
        :class="{ 'bg-primary-900': x.location === location }"
        @click="() => x.navigate(location)"
      />
    </section> 

    <SlideTitle class="absolute inset-0 p-14" :slide="x.location" :xOrder="0" />

    <SlideHighlightedCode class="absolute inset-0 p-14" :slide="x.location" :xOrder="1" />
    
    <SlideMe class="absolute inset-0 p-14" :slide="x.location" :xOrder="2" />

    <SlideOrganizationWhat class="absolute inset-0 p-14" :slide="x.location" :xOrder="3" />
    
    <SlideOrganizationWhy class="absolute inset-0 p-14" :slide="x.location" :xOrder="4" />
    
    <SlideOrganizationHow class="absolute inset-0 p-14" :slide="x.location" :xOrder="5" />
    
    <SlideListboxes class="absolute inset-0 p-14" :slide="x.location" :xOrder="6" />
    
    <SlideTactics class="absolute inset-0 p-14" :slide="x.location" :xOrder="7" />
    
    <SlideListboxBonus class="absolute inset-0 p-14" :slide="x.location" :xOrder="8" />
    
    <SlideEnd class="absolute inset-0 p-14" :slide="x.location" :xOrder="9" />
    
    <h1 class="slide-title text-right duration-200 delay-300" :class="{ inaccessible: x.location < 1 }">Organizing Code by Logical Concern in Vue 3</h1>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useDelayable, useListenable, useNavigateable } from '@baleada/vue-composition'
import SlideTitle from './SlideTitle.vue'
import SlideHighlightedCode from './SlideHighlightedCode.vue'
import SlideMe from './SlideMe.vue'
import SlideOrganizationWhat from './SlideOrganizationWhat.vue'
import SlideOrganizationWhy from './SlideOrganizationWhy.vue'
import SlideOrganizationHow from './SlideOrganizationHow.vue'
import SlideListboxes from './SlideListboxes.vue'
import SlideTactics from './SlideTactics.vue'
import SlideListboxBonus from './SlideListboxBonus.vue'
import SlideEnd from './SlideEnd.vue'

console.log(SlideTitle)


// STATUS
// TODO: fix show timing somehow
const status = ref<'showing' | 'shown'>('showing')
const delayable = useDelayable(() => status.value = 'shown', { delay: 100 })
onMounted(() => delayable.value.delay())


// NAVIGATION
const x = useNavigateable(
  new Array(10).fill(0).map((_, index) => index)
)

const left = useListenable('left' as '+left'),
      right = useListenable('right' as '+right')

onMounted(() => {
  left.value.listen(() => x.value.previous({ loops: false }))
  right.value.listen(() => x.value.next({ loops: false }))
})
</script>
