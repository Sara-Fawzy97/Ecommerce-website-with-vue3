import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './style.css'


createApp(App).use(router).mount('#app')
App.use(store);