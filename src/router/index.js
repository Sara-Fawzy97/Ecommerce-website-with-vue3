import { createRouter,createMemoryHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import ShopPage from '@/views/ShopPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SingleProduct from '../views/SingleProduct.vue';
import CartPage from '../views/CartPage.vue';
import CategoriesProducts from '@/views/CategoriesProducts.vue';




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
    },{
        path:'/shop/:id',
        name:'singleProduct',
        component:SingleProduct
    },{
        path:'/cart',
        name:'cartPage',
        component:CartPage
    },
    {
        path:'/categories/:category',
        name:'categoryPage',
        component:CategoriesProducts
    },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;