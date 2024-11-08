import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import ShopPage from '@/views/ShopPage.vue';
import ContactPage from '@/views/ContactPage.vue';



const routes = [
    {
        path: '/',
        name: 'homePage',
        component: HomePage
    },
    {
        path: '/shop',
        name: 'shopPage',
        component: ShopPage
    } ,
    {
        path: '/contact',
        name: 'contactPage',
        component: ContactPage
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;