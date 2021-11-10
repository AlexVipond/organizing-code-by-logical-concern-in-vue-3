<template>
  <main class="
    h-screen w-screen
    flex items-center justify-center
    bg-gray-900
  ">
    <section class="w-[98vw]">
      <section class="aspect-w-16 aspect-h-9">
        <Slides />
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import Slides from './Slides.vue'
</script>
