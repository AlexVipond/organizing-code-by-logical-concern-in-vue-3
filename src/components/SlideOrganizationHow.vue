<template>
  <section ref="root" class="h-full flex flex-col items-center justify-center">
    <h1 class="slide-title">How do we organize by logical concern?</h1>
    <h2 class="text-6xl font-extrabold text-primary-900">How?</h2>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut} from '../composition'

const props = defineProps<{ slide: number, xOrder: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.xOrder ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)
</script>
