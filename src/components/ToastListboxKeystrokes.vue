<template>
  <div
    ref="root"
    class="p-4 rounded text-xl bg-primary-1000 text-primary-100 duration-300"
    :class="{ inaccessible: status === 'toasted' }"
  >
    {{ key }}
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useListenable, useDelayable } from '@baleada/vue-composition'

const props = defineProps<{ slide: number, xOrder: number }>()

const key = ref('')
const cmdDown = useListenable('cmd+down')
const cmdUp = useListenable('cmd+up')
const down = useListenable('!cmd+down' as '+down')
const up = useListenable('!cmd+up' as '+up')
const enter = useListenable('enter' as '+enter')
const space = useListenable('space' as '+space')
const shiftTab = useListenable('shift+tab')
const tab = useListenable('!shift+tab' as '+tab')

watchEffect(() => {
  if (props.slide === props.xOrder) {
    for (const listenable of [cmdDown, cmdUp, down, up, enter, space, shiftTab, tab]) {
      listenable.value.listen(event => {
        const prefix = [
          event.shiftKey && 'shift+',
          event.metaKey && 'cmd+',
        ].filter(key => key).join('')
        const ensuredKey = (() => {
          switch (event.key) {
            case 'ArrowDown': return 'down'
            case 'ArrowUp': return 'up'
            case ' ': return 'space'
            default: return event.key.toLowerCase()
          }
        })()


        key.value = `${prefix}${ensuredKey}`
        status.value = 'toasting'
        toast.value.delay()
      })
    }
    
    return
  }

  if ([cmdDown, cmdUp, down, up, enter, space, shiftTab, tab].some(listenable => listenable.value.status === 'listening')) {
    for (const listenable of [cmdDown, cmdUp, down, up, enter, space, shiftTab, tab]) {
      listenable.value.stop()
    }
  }
})


const status = ref<'toasted' | 'toasting'>('toasted')
const toast = useDelayable(() => {
  status.value = 'toasted'
}, { delay: 500 })
</script>
