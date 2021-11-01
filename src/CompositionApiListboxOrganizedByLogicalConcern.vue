<template>
  <ul>
    <li
      v-for="(option, index) in options"
      :key="option"
      :ref="el => setElements(el, index)"
      :tabindex="isSelected(index) ? 0 : -1"
      @mouseover="() => activate(index)"
      @keydown.down.prevent="() => activateNext(index)"
      @keydown.up.prevent="() => activatePrevious(index)"
      @keydown.meta.up.prevent="() => activate(0)"
      @keydown.meta.down.prevent="() => activate(options.length - 1)"
      @keydown.enter.prevent="() => select(index)"
      @keydown.space.prevent="() => select(index)"
      @click="() => select(index)"
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
import { ref, watch, computed, onMounted, onBeforeUpdate } from 'vue'
import IconCheck from './IconCheck.vue'


// PROPS AND EMIT
const props = defineProps<{
  options: string[],
  modelValue: string,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', option: string): void,
}>()


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


// ELEMENTS
const elements = ref([])

const setElements = (el, index: number) => {
  elements.value[index] = el
}

watch(
  active,
  () => {
    elements.value[active.value].focus()
  },
  { flush: 'post' }
)

onMounted(() => {
  elements.value[active.value].focus()
})

onBeforeUpdate(() => {
  elements.value = []
})
</script>

<style lang="postcss">
ul {
  @apply w-full h-96 flex flex-col gap-3 overflow-scroll bg-white rounded shadow-md;
}

ul:has(:focus) {
  @apply ring-2 ring-offset-2 ring-emerald-100;
}

li {
  @apply text-lg flex items-center gap-3 p-2 transition duration-150 focus:border-none focus:outline-none;
}

svg {
  @apply text-emerald-500;
}

.active {
  @apply bg-emerald-200 text-emerald-900;
}

.active svg {
  @apply text-emerald-900;
}
</style>
