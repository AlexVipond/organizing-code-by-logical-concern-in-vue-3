import { shallowRef, watch } from 'vue'
import type { Transition } from '@baleada/vue-features'
import { useDelayable, useAnimateable } from '@baleada/vue-composition'
import { verouEaseInOut } from '@baleada/logic'

export function useFadeIn (): Transition {
  const delayable = useDelayable(
    () => {},
    { delay: 200 }
  )
  
  const fadeIn = useAnimateable(
    [
      { progress: 0, properties: { opacity: 0 } },
      { progress: 1, properties: { opacity: 1 } },
    ],
    {
      timing: verouEaseInOut,
      duration: 200,
    }
  )

  const shallowStore = shallowRef<{ done?: Parameters<Transition['active']>[0]['done'] }>({})

  watch(
    () => fadeIn.value.status,
    () => {
      if (fadeIn.value.status === 'played') {
        shallowStore.value.done()
      }
    }
  )
  
  return {
    active: ({ element, done }) => {
      shallowStore.value.done = done
      
      delayable.value.effect = () => {
        fadeIn.value.play(frame => element.style.opacity = `${frame.properties.opacity.interpolated}`)
      }

      delayable.value.delay()
    },
    cancel: ({ element }) => {
      delayable.value.stop()
      fadeIn.value.stop()
      element.style.opacity = '0'
    }
  }
}
