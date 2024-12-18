import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' 
import store from './store'
import VueAwesomePaginate from "vue-awesome-paginate"
import "vue-awesome-paginate/dist/style.css";

const app=createApp(App).use(router)
app.use(store)
app.use(VueAwesomePaginate)
app.mount('#app')