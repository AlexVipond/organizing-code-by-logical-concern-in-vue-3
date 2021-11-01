<template>
  <main class="
    h-screen w-screen
    flex flex-col gap-10 p-6
    bg-gray-100 text-gray-900
  ">

    <section class="mx-auto w-full max-w-sm flex flex-col gap-4 items-center justify-center h-full">
      <label class="w-full text-sm italic tracking-wide text-gray-500">Choose an option:</label>
      <CompositionApiListboxOrganizedByLogicalConcern :options="options" v-model="selected" />
    </section>
    <h1 class="text-xs tracking-widest text-center italic text-gray-500">Organizing Code by Logical Concern in Vue 3</h1>
  </main>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { options as o } from './options'
import CompositionApiListboxOrganizedByLogicalConcern from './CompositionApiListboxOrganizedByLogicalConcern.vue'

const options = shallowRef(o)

const selected = ref(options.value[0])
</script>
