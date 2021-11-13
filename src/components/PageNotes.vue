<template>
  <header ref="root" class="flex flex-col py-20 items-center justify-center bg-gray-100">
    <h1 class="flex flex-col items-center justify-center">
      <span class="text-3xl font-extrabold tracking-widest uppercase text-primary-900">Organizing Code</span>
      <span class="mt-2 text-6xl font-bold text-primary-1000">by Logical Concern</span>
      <span class="mt-4 text-3xl font-extrabold tracking-widest uppercase text-primary-900">in Vue 3</span>
    </h1>
    <section class="mt-10 flex flex-col items-center gap-2">
      <img
        src="/headshot.jpg"
        alt="headshot"
        class="h-12 w-12 rounded-full shadow-md"
      />
      <h2 class="text-xl">Alex Vipond</h2>
    </section>
  </header>
  <section class="flex justify-center bg-gray-100">
    <svg class="fill-current text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="450 249 616 163" width="536" height="83"><path id="path_99fcf703-d0bb-43df-0bda-66f983e457b3" d="M -2.87,15.56 Q -2.87,15.56 1.97,12.89 6.81,10.21 14.55,7.64 22.29,5.06 29.94,3.16 37.60,1.26 45.06,0.12 52.52,-1.01 59.92,-2.01 67.33,-3.02 75.29,-3.41 83.26,-3.80 91.43,-4.16 99.61,-4.51 107.77,-4.65 115.93,-4.78 123.72,-4.86 131.50,-4.93 138.86,-4.16 146.21,-3.39 153.48,-1.89 160.74,-0.39 168.29,2.06 175.83,4.52 183.23,7.98 190.63,11.44 197.54,15.23 204.46,19.03 210.67,22.95 216.89,26.87 222.79,31.16 228.69,35.46 234.17,38.80 239.65,42.13 246.78,46.62 253.91,51.11 259.84,54.28 265.76,57.46 271.49,60.49 277.23,63.53 282.54,65.46 287.84,67.39 293.49,69.03 299.13,70.67 305.36,71.92 311.59,73.16 318.42,74.02 325.24,74.88 332.47,75.58 339.69,76.28 347.81,76.72 355.93,77.16 364.98,76.87 374.04,76.58 383.22,75.37 392.40,74.16 403.35,71.43 414.29,68.69 425.82,64.98 437.35,61.28 448.55,57.14 459.76,53.01 469.67,48.98 479.58,44.95 488.71,41.22 497.85,37.49 516.12,30.23 534.39,22.96 535.07,22.81 535.76,22.66 536.46,22.74 537.16,22.81 537.79,23.11 538.43,23.40 538.94,23.89 539.45,24.37 539.78,24.99 540.11,25.61 540.22,26.30 540.33,26.99 540.22,27.69 540.11,28.38 539.78,29.00 539.45,29.62 538.94,30.10 538.43,30.59 537.79,30.88 537.16,31.18 536.46,31.25 535.76,31.33 535.07,31.18 534.39,31.03 533.79,30.66 533.19,30.30 532.73,29.77 532.28,29.23 532.02,28.58 531.76,27.93 531.72,27.23 531.68,26.53 531.87,25.85 532.06,25.17 532.45,24.59 532.84,24.01 533.40,23.59 533.96,23.16 534.63,22.94 535.29,22.71 536.00,22.71 536.70,22.71 537.36,22.94 538.03,23.16 538.59,23.59 539.15,24.01 539.54,24.59 539.93,25.17 540.12,25.85 540.31,26.53 540.27,27.23 540.23,27.93 539.97,28.58 539.71,29.23 539.26,29.77 538.80,30.30 538.20,30.66 537.60,31.03 537.60,31.03 537.60,31.03 519.39,38.30 501.17,45.58 492.05,49.36 482.94,53.13 472.91,57.27 462.89,61.41 451.54,65.69 440.19,69.97 428.41,73.88 416.63,77.79 405.21,80.79 393.79,83.80 384.16,85.28 374.54,86.77 365.05,87.39 355.57,88.01 347.12,87.90 338.66,87.79 331.25,87.18 323.83,86.58 316.51,85.73 309.18,84.87 302.41,83.45 295.64,82.02 289.64,80.07 283.64,78.12 277.78,75.67 271.92,73.22 266.26,70.00 260.60,66.79 254.60,63.37 248.59,59.95 241.19,55.69 233.79,51.43 228.08,47.73 222.37,44.02 216.81,39.84 211.25,35.67 205.39,31.84 199.53,28.01 192.91,24.40 186.29,20.78 179.44,17.64 172.59,14.49 165.56,12.22 158.52,9.95 151.76,8.45 145.00,6.94 138.30,6.07 131.60,5.19 123.89,5.28 116.19,5.38 108.20,5.65 100.22,5.92 92.05,6.52 83.89,7.12 76.40,7.62 68.91,8.11 61.59,9.21 54.28,10.30 47.40,11.38 40.53,12.47 33.40,14.45 26.26,16.43 19.49,18.93 12.73,21.43 7.80,23.93 2.87,26.43 2.18,26.69 1.49,26.96 0.75,27.05 0.02,27.14 -0.71,27.05 -1.44,26.97 -2.14,26.71 -2.83,26.45 -3.44,26.03 -4.05,25.61 -4.55,25.06 -5.04,24.50 -5.39,23.85 -5.73,23.19 -5.91,22.48 -6.09,21.76 -6.10,21.02 -6.10,20.28 -5.92,19.56 -5.75,18.84 -5.41,18.18 -5.06,17.52 -4.58,16.97 -4.09,16.41 -3.48,15.99 -2.87,15.56 -2.87,15.56 Z" stroke="transparent" stroke-width="0" stroke-linejoin="round" stroke-linecap="round" pointer-events="all" transform="translate(490, 289)"/></svg>
  </section>
  <main class="py-20 bg-gray-100">
    <section class="mx-auto flex flex-col gap-12 max-w-lg text-xl">
      <h2 class="mx-auto text-sm font-bold text-gray-600 uppercase tracking-widest">Talk notes</h2>
      <p>If you enjoyed the talk, and you're interested in taking its ideas even further, check out <span class="font-bold">Rethinking Reusability in Vue</span> (link coming soon!), a new ebook that rethinks and revises design patterns that emerged from Vue 2.</p>
      <p>You can find a live copy of the slides at <RouterLink class="text-primary-500 hover:underline" to="/slides">/slides</RouterLink>.</p>
      <p>All the code for this talk can be found <a href="https://github.com/AlexVipond/organizing-code-by-logical-concern-in-vue-3" class="text-primary-500 hover:underline">on GitHub</a>.</p>
      <p>For videos on related concepts, like <span class="font-bold">Vue 3 function refs</span>, check out <a href="https://www.youtube.com/watch?v=EiqwYep8QEA&list=PLHP34VGeo17cM-KEwvc-Ualz54rzoFkPQ" class="text-primary-500 hover:underline">this YouTube playlist</a>.</p>
    </section>
  </main>
</template>

<script setup lang="ts">

</script>
