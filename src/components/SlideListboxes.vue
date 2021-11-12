<template>
  <section ref="root" class="mx-auto flex items-center gap-10">
    <h1 class="slide-title">The three listboxes</h1>
    <section class="w-full max-w-sm flex flex-col gap-4">
      <label class="label w-full">Choose an option:</label>
      <ListboxOptionsApi
        :autofocus="false"
        :ref="el => meta['listboxOptionsApi'].root = el.$el"
        :options="options"
        v-model="selectedOptionsApi"
        class="ring-4 ring-offset-4 ring-red-300 transition duration-150"
        :class="[meta['listboxOptionsApi'].status === 'focused' ? 'ring-opacity-100' : 'ring-opacity-0']"
      />
      <h2 class="italic text-sm text-gray-700">Options API</h2>
    </section>
    <section class="w-full max-w-sm flex flex-col gap-4">
      <label class="label w-full">Choose an option:</label>
      <ListboxCompositionApiOrganizedByOptions
        :autofocus="false"
        :ref="el => meta['listboxCompositionApiOrganizedByOptions'].root = el.$el"
        :options="options"
        v-model="selectedCompositionApiOrganizedByOptions"
        class="ring-4 ring-offset-4 ring-amber-300 transition duration-150"
        :class="[meta['listboxCompositionApiOrganizedByOptions'].status === 'focused' ? 'ring-opacity-100' : 'ring-opacity-0']"
      />
      <h2 class="italic text-sm text-gray-700">Composition API, organized by options</h2>
    </section>
    <section class="w-full max-w-sm flex flex-col gap-4">
      <label class="label w-full">Choose an option:</label>
      <ListboxCompositionApiOrganizedByLogicalConcern
        :autofocus="false"
        :ref="el => meta['listboxCompositionApiOrganizedByLogicalConcern'].root = el.$el"
        :options="options"
        v-model="selectedCompositionApiOrganizedByLogicalConcern"
        class="ring-4 ring-offset-4 ring-emerald-300 transition duration-150"
        :class="[meta['listboxCompositionApiOrganizedByLogicalConcern'].status === 'focused' ? 'ring-opacity-100' : 'ring-opacity-0']"
      />
      <h2 class="italic text-sm text-gray-700">Composition API, organized by logical concern</h2>
    </section>
    <ToastListboxKeystrokes class="absolute bottom-4 left-1/2 -translate-x-1/2" :slide="slide" :xOrder="xOrder" />
  </section>
</template>

<script setup lang="ts">
import { shallowRef, ref, computed, reactive, onMounted, onBeforeUnmount } from 'vue'
import { show } from '@baleada/vue-features'
import { useFadeIn, useFadeOut } from '../composition'
import { options as o } from '../state/options'
import ListboxOptionsApi from './ListboxOptionsApi.vue'
import ListboxCompositionApiOrganizedByOptions from './ListboxCompositionApiOrganizedByOptions.vue'
import ListboxCompositionApiOrganizedByLogicalConcern from './ListboxCompositionApiOrganizedByLogicalConcern.vue'
import ToastListboxKeystrokes from './ToastListboxKeystrokes.vue'

const props = defineProps<{ slide: number, xOrder: number }>()

const root = ref<HTMLElement>()

show(
  { element: root, condition: computed(() => props.slide === props.xOrder ) },
  { transition: { appear: true, enter: useFadeIn(), leave: useFadeOut() } }
)

const options = shallowRef(o)
const selectedOptionsApi = computed({
  get: () => meta['listboxOptionsApi'].selected,
  set: option => meta['listboxOptionsApi'].selected = option
})
const selectedCompositionApiOrganizedByOptions = computed({
  get: () => meta['listboxCompositionApiOrganizedByOptions'].selected,
  set: option => meta['listboxCompositionApiOrganizedByOptions'].selected = option
})
const selectedCompositionApiOrganizedByLogicalConcern = computed({
  get: () => meta['listboxCompositionApiOrganizedByLogicalConcern'].selected,
  set: option => meta['listboxCompositionApiOrganizedByLogicalConcern'].selected = option
})

const listboxes = ['listboxOptionsApi', 'listboxCompositionApiOrganizedByOptions', 'listboxCompositionApiOrganizedByLogicalConcern']
const meta = reactive({})

for (const listbox of listboxes) {
  meta[listbox] = {
    selected: options.value[0],
    status: 'blurred',
    focusEffect: () => meta[listbox].status = 'focused',
    blurEffect: () => meta[listbox].status = 'blurred',
    root: null,
  }
}

onMounted(() => {
  for (const listbox of listboxes) {
    for (const li of Array.from((meta[listbox].root as HTMLElement).querySelectorAll('li'))) {
      li.addEventListener('focus', meta[listbox].focusEffect)
      li.addEventListener('blur', meta[listbox].blurEffect)
    }
  }
})

onBeforeUnmount(() => {
  for (const listbox of listboxes) {
    for (const li of Array.from((meta[listbox].root as HTMLElement).querySelectorAll('li'))) {
      li.removeEventListener('focus', meta[listbox].focusEffect)
      li.removeEventListener('blur', meta[listbox].blurEffect)
    }
  }
})
</script>
