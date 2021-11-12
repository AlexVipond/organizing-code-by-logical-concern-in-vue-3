<template>
  <section ref="root" class="mx-auto flex items-center justify-center">
    <h1 class="slide-title">The fourth listbox</h1>
    <section class="w-full max-w-sm flex flex-col gap-4">
      <label class="label w-full">Choose an option:</label>
      <ListboxBonus
        :autofocus="false"
        :ref="el => bonus = el.$el"
        :options="options"
        v-model="selected"
        class="ring-4 ring-offset-4 ring-indigo-300 transition duration-150"
        :class="[status === 'focused' ? 'ring-opacity-100' : 'ring-opacity-0']"
      />
      <h2 class="italic text-sm text-gray-700">Bonus!</h2>
    </section>
    <ToastListboxKeystrokes class="absolute bottom-4 left-1/2 -translate-x-1/2" :slide="slide" :xOrder="xOrder" />
  </section>
</template>

<script setup lang="ts">
import { shallowRef, ref, computed, reactive, onMounted, onBeforeUnmount } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut } from '../composition'
import { options as o } from '../state/options'
import ListboxBonus from './ListboxBonus.vue'
import ToastListboxKeystrokes from './ToastListboxKeystrokes.vue'

const props = defineProps<{ slide: number, xOrder: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.xOrder ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)

const options = shallowRef(o)
const selected = ref(options.value[0])
const status = ref('blurred')
const focusEffect = () => status.value = 'focused'
const blurEffect = () => status.value = 'blurred'
const bonus = ref()

onMounted(() => {
  for (const li of Array.from((bonus.value as HTMLElement).querySelectorAll('li'))) {
    li.addEventListener('focus', focusEffect)
    li.addEventListener('blur', blurEffect)
  }
})

onBeforeUnmount(() => {
  for (const li of Array.from((bonus.value as HTMLElement).querySelectorAll('li'))) {
    li.removeEventListener('focus', focusEffect)
    li.removeEventListener('blur', blurEffect)
  }
})
</script>
