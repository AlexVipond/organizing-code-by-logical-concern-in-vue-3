<template>
  <section class="mx-auto flex gap-10">
    <section class="w-full max-w-sm flex flex-col gap-4">
      <label class="w-full text-sm italic tracking-wide text-gray-500">Choose an option:</label>
      <ListboxOptionsApi
        :ref="el => meta['listboxOptionsApi'].root = el.$el"
        :options="options"
        v-model="selectedOptionsApi"
        class="ring-4 ring-offset-4 ring-red-300 transition duration-150"
        :class="[meta['listboxOptionsApi'].status === 'focused' ? 'ring-opacity-100' : 'ring-opacity-0']"
      />
    </section>
    <section class="w-full max-w-sm flex flex-col gap-4">
      <label class="w-full text-sm italic tracking-wide text-gray-500">Choose an option:</label>
      <ListboxCompositionApiOrganizedByOptions
        :ref="el => meta['listboxCompositionApiOrganizedByOptions'].root = el.$el"
        :options="options"
        v-model="selectedCompositionApiOrganizedByOptions"
        class="ring-4 ring-offset-4 ring-amber-300 transition duration-150"
        :class="[meta['listboxCompositionApiOrganizedByOptions'].status === 'focused' ? 'ring-opacity-100' : 'ring-opacity-0']"
      />
    </section>
    <section class="w-full max-w-sm flex flex-col gap-4">
      <label class="w-full text-sm italic tracking-wide text-gray-500">Choose an option:</label>
      <ListboxCompositionApiOrganizedByLogicalConcern
        :ref="el => meta['listboxCompositionApiOrganizedByLogicalConcern'].root = el.$el"
        :options="options"
        v-model="selectedCompositionApiOrganizedByLogicalConcern"
        class="ring-4 ring-offset-4 ring-emerald-300 transition duration-150"
        :class="[meta['listboxCompositionApiOrganizedByLogicalConcern'].status === 'focused' ? 'ring-opacity-100' : 'ring-opacity-0']"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import { shallowRef, ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { show } from '@baleada/vue-features'
import { options as o } from '../state/options'
import ListboxOptionsApi from './ListboxOptionsApi.vue'
import ListboxCompositionApiOrganizedByOptions from './ListboxCompositionApiOrganizedByOptions.vue'
import ListboxCompositionApiOrganizedByLogicalConcern from './ListboxCompositionApiOrganizedByLogicalConcern.vue'

const props = defineProps<{ slide: number }>()
const options = shallowRef(o)
const selectedOptionsApi = ref(options.value[0])
const selectedCompositionApiOrganizedByOptions = ref(options.value[0])
const selectedCompositionApiOrganizedByLogicalConcern = ref(options.value[0])

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
