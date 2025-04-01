import './assets/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  // Configura las opciones que se adapten a tus necesidades
  duration: 600,
  once: true,
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
