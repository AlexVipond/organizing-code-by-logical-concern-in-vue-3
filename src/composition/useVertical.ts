import { watch } from 'vue'
import type { Ref } from 'vue'
import { useNavigateable, useListenable } from '@baleada/vue-composition'

export function useVertical ({ length, slide, order }: { length: number, slide: Ref<number>, order: number }) {
  const vertical = useNavigateable(
    new Array(length)
      .fill(undefined)
      .map((_, index) => index)
  )

  const up = useListenable('up' as '+up'),
        down = useListenable('down' as '+down')

  watch(
    () => slide.value,
    () => {
      if (slide.value === order) {
        up.value.listen(event => {
          event.preventDefault()
          vertical.value.previous({ loops: false })
        })
        down.value.listen(event => {
          event.preventDefault()
          vertical.value.next({ loops: false })
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

  return vertical
}
