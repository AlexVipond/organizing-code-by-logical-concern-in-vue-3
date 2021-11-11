<template>
  <ul tabindex="-1">
    <li
      v-for="(option, index) in options"
      :key="option"
      :ref="el => setElements(el, index)"
      :class="{
        'active': isActive(index),
        'selected': isSelected(index),
      }"
    >
      <span>{{ option }}</span>
      <IconCheck v-show="isSelected(index)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watchPostEffect, computed, onMounted, onBeforeUpdate } from 'vue'
import { bind, on } from '@baleada/vue-features'
import IconCheck from './IconCheck.vue'


// PROPS AND EMIT
const props = defineProps<{
  options: string[],
  modelValue: string,
  autofocus: boolean,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', option: string): void,
}>()


// ELEMENTS
const elements = ref([])

const setElements = (el, index: number) => {
  elements.value[index] = el
}

watchPostEffect(() => elements.value[active.value].focus())

onMounted(() => {
  if (props.autofocus) {
    elements.value[active.value].focus()
  }
})

onBeforeUpdate(() => {
  elements.value = []
})


// ACTIVE
const active = ref(0)

const activate = (index: number) => {
  active.value = index
}

const activatePrevious = (index: number) => {
  if (index === 0) {
    return
  }

  active.value = index - 1
}

const activateNext = (index: number) => {
  if (index === props.options.length - 1) {
    return
  }

  active.value = index + 1
}

const isActive = (index: number) => {
  return index === active.value
}

on<any>({
  element: elements,
  effects: {
    mouseover: {
      createEffect: ({ index }) => () => activate(index),
    },
    'cmd+down': event => {
      event.preventDefault()
      activate(props.options.length - 1)
    },
    'cmd+up': event => {
      event.preventDefault()
      activate(0)
    },
    down: {
      createEffect: ({ index }) => event => {
        event.preventDefault()
        activateNext(index)
      }
    },
    up: {
      createEffect: ({ index }) => event => {
        event.preventDefault()
        activatePrevious(index)
      }
    },
  }
})


// SELECTED
const selected = computed(() => {
  const index = props.options.indexOf(props.modelValue)
  return index === -1 ? 0 : index
})

const select = (index: number) => {
  emit('update:modelValue', props.options[index])
}

const isSelected = (index: number) => {
  return index === selected.value
}

bind({
  element: elements,
  values: {
    tabindex: {
      get: ({ index }) => index === selected.value ? 0 : -1,
      watchSources: selected,
    },
  }
})

on<any>({
  element: elements,
  effects: {
    click: {
      createEffect: ({ index }) => () => select(index),
    },
    space: {
      createEffect: ({ index }) => () => select(index),
    },
    enter: {
      createEffect: ({ index }) => () => select(index),
    },
  }
})
</script>

<style scoped lang="postcss">
ul {
  @apply w-full h-96 flex flex-col gap-3 overflow-scroll bg-white rounded shadow-lg;
}

li {
  @apply text-lg flex items-center gap-3 p-2 transition duration-150 focus:border-none focus:outline-none;
}

svg {
  @apply text-indigo-500;
}

.active {
  @apply bg-indigo-200 text-indigo-900;
}

.active svg {
  @apply text-indigo-900;
}
</style>
