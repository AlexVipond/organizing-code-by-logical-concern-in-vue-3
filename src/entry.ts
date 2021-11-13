import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

import '@fontsource/inter/variable.css'
import '@fontsource/inconsolata/variable.css'

createApp(App)
  .use(createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: () => import('./components/PageNotes.vue') },
      { path: '/slides', component: () => import('./components/PageSlides.vue') },
    ]
  }))
  .mount('#app')
