import { shallowRef, watch } from 'vue'
import type { Transition } from '@baleada/vue-features'
import { useAnimateable } from '@baleada/vue-composition'
import { verouEaseInOut } from '@baleada/logic'

export function useFadeOut (): Transition {
  const fadeOut = useAnimateable(
    [
      { progress: 0, properties: { opacity: 1 } },
      { progress: 1, properties: { opacity: 0 } },
    ],
    {
      timing: verouEaseInOut,
      duration: 200,
    }
  )

  const shallowStore = shallowRef<{ done?: Parameters<Transition['active']>[0]['done'] }>({})

  watch(
    () => fadeOut.value.status,
    () => {
      if (fadeOut.value.status === 'played') {
        shallowStore.value.done()
      }
    }
  )
  
  return {
    active: ({ element, done }) => {
      shallowStore.value.done = done
      fadeOut.value.play(frame => element.style.opacity = `${frame.properties.opacity.interpolated}`)
    },
    cancel: ({ element }) => {
      fadeOut.value.stop()
      element.style.opacity = '100'
    }
  }
}
