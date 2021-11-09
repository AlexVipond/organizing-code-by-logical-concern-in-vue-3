<template>
  <section ref="root" class="flex items-start justify-center gap-16 pb-20">
    <section class="w-48 flex flex-col gap-1">
      <img
        src="/highlighted-listbox-options-api.png"
        alt="Highlighted code"
        class="w-full"
      >
      <h2 class="italic text-sm text-gray-700">Options API</h2>
    </section>
    
    <section class="w-48 flex flex-col gap-1 transition duration-[250ms]" :class="[vertical.location === 1 ? 'opacity-100' : 'opacity-0']">
      <img
        src="/highlighted-listbox-composition-api-organized-by-options.png"
        alt="Highlighted code"
        class="w-full"
      >
      <h2 class="italic text-sm text-gray-700">Composition API, organized by options</h2>
    </section>
    
    <section class="w-48 flex flex-col gap-1">
      <img
        src="/highlighted-listbox-composition-api-organized-by-logical-concern.png"
        alt="Highlighted code"
        class="w-full"
      >
      <h2 class="italic text-sm text-gray-700">Composition API, organized by logical concern</h2>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { show } from '@baleada/vue-features'
import { useNavigateable, useListenable } from '@baleada/vue-composition'
import { useFadeIn, useFadeOut } from '../composition'

const props = defineProps<{ slide: number, order: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.order ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)

const vertical = useNavigateable([0, 1])

const up = useListenable('up' as '+up'),
      down = useListenable('down' as '+down')

watch(
  () => props.slide,
  () => {
    if (props.slide === props.order) {
      up.value.listen(() => vertical.value.previous({ loops: false }))
      down.value.listen(() => vertical.value.next({ loops: false }))
      return
    }

    if (up.value.status === 'listening') {
      up.value.stop()
    }

    if (down.value.status === 'listening') {
      down.value.stop()
    }
  }
)
</script>
