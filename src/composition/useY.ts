import { watch } from 'vue'
import type { Ref } from 'vue'
import { useNavigateable, useListenable } from '@baleada/vue-composition'

export function useY ({ length, slide, xOrder }: { length: number, slide: Ref<number>, xOrder: number }) {
  const y = useNavigateable(
    new Array(length).fill(0).map((_, i) => i)
  )


  const up = useListenable('up' as '+up'),
        down = useListenable('down' as '+down')

  watch(
    slide,
    () => {
      if (slide.value === xOrder) {
        up.value.listen(event => {
          event.preventDefault()
          y.value.previous({ loops: false })
        })
        down.value.listen(event => {
          event.preventDefault()
          y.value.next({ loops: false })
        })
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

  return { y }
}
