<template>
  <ul tabindex="-1">
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

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue'
import IconCheck from './IconCheck.vue'

export default defineComponent({
  components: {
    IconCheck,
  },
  props: {
    options: {
      type: Array as PropType<string[]>,
    },
    modelValue: {
      type: String,
    }
  },
  data: () => ({
    active: 0,
    elements: [],
  }),
  computed: {
    selected () {
      const index = this.options.indexOf(this.modelValue)
      return index === -1 ? 0 : index
    },
  },
  methods: {
    select (index) {
      this.$emit('update:modelValue', this.options[index])
    },
    activate (index) {
      this.active = index
    },
    activatePrevious (index) {
      if (index === 0) {
        return
      }
      
      this.active = index - 1
    },
    activateNext (index) {
      if (index === this.options.length - 1) {
        return
      }
      
      this.active = index + 1
    },
    isSelected (index) {
      return index === this.selected
    },
    isActive (index) {
      return index === this.active
    },
    setElements (el, index) {
      this.elements[index] = el
    }
  },
  watch: {
    active () {
      this.elements[this.active].focus()
    }
  },
  mounted () {
    this.elements[this.active].focus()
  },
  beforeUpdate () {
    this.elements = []
  }
})
</script>

<style scoped lang="postcss">
ul {
  @apply w-full h-96 flex flex-col gap-3 overflow-scroll bg-white rounded shadow-md;
}

ul:has(:focus) {
  @apply ring-2 ring-offset-2 ring-red-100;
}

li {
  @apply text-lg flex items-center gap-3 p-2 transition duration-150 focus:border-none focus:outline-none;
}

svg {
  @apply text-red-500;
}

.active {
  @apply bg-red-200 text-red-900;
}

.active svg {
  @apply text-red-900;
}
</style>
