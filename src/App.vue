<template>
  <main ref="main" class="relative w-[1280px] h-[720px] bg-primary-900">
    <svg
      ref="svg"
      class="absolute inset-0 h-full w-full fill-current text-primary-1000" viewbox="0 0 1280 720"
      :class="{
        'z-10': ds.length > 0 || status === 'drawing',
        'pointer-events-none': status === 'idle',
      }"
    >
      <path
        v-for="d in ds"
        :key="d"
        :d="d"
      />
      <path
        v-if="drawable.d"
        :d="drawable.d"
      />
    </svg>
    <span
      class="z-10 absolute top-4 right-4 p-1 text-xs tracking-widest font-extrabold uppercase rounded-sm bg-primary-100 text-primary-800 duration-200"
      :class="[status === 'drawing' ? 'opacity-100' : 'inaccessible']"
    >
      Drawing
    </span>
    <Slides class="relative h-full w-full" />
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useListenable, useDrawable, useFullscreenable } from '@baleada/vue-composition'
import { mousedrag as getMousedrag } from '@baleada/recognizeable-effects'
import type { MousedragTypes, MousedragMetadata } from '@baleada/recognizeable-effects'
import { createDelete } from '@baleada/logic'
import Slides from './Slides.vue'

const main = ref<HTMLElement>()
const fullscreenable = useFullscreenable(() => main.value)
const shiftF = useListenable('shift+f')

onMounted(() => {
  shiftF.value.listen(() => {
    switch (fullscreenable.value.status) {
      case 'fullscreened':
        fullscreenable.value.exit()
        break
      case 'ready':
      case 'exited':
        fullscreenable.value.enter()
        break
    }
  })
})


// MOUSEDRAG
const mousedrag = useListenable<MousedragTypes, MousedragMetadata>(
  'recognizeable' as MousedragTypes,
  {
    recognizeable: {
      effects: getMousedrag(),
    }
  }
)


// DRAWING STATE
const ds = ref([])
const drawable = useDrawable([])
const points = ref([])
const shiftZ = useListenable('shift+z')

watch(
  () => mousedrag.value.recognizeable.status,
  () => {
    if (mousedrag.value.recognizeable.status === 'denied') {
      const d = drawable.value.d
      
      points.value = []
      drawable.value.stroke = []

      ds.value = [...ds.value, d]
    }
  }
)

onMounted(() => {
  shiftZ.value.listen(() => {
    if (ds.value.length > 0) {
      ds.value = createDelete({ index: ds.value.length - 1 })(ds.value)
    }
  })
})


// MULTIPLE CONCERNS
const svg = ref<HTMLElement>()
onMounted(() => {
  mousedrag.value.listen(event => {
    points.value.push([event.x, event.y])
    drawable.value.draw(points.value, { size: 8 })
  }, { target: svg.value })
})


// STATUS
const status = ref<'idle' | 'drawing'>('idle')
const shiftD = useListenable('shift+d')
const shiftC = useListenable('shift+c')

onMounted(() => {
  shiftD.value.listen(() => {
    switch (status.value) {
      case 'idle':
        status.value = 'drawing'
        break
      case 'drawing':
        status.value = 'idle'
        break
    }
  })

  shiftC.value.listen(() => {
    ds.value = []
    points.value = []
  })
})
</script>
