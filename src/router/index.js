import { createRouter,createWebHistory  } from 'vue-router'
const HomePage =()=>import ('../views/HomePage.vue');
const ShopPage= ()=> import( '@/views/ShopPage.vue');
const ContactPage = ()=> import( '../views/ContactPage.vue');
const SingleProduct = ()=> import('../views/SingleProduct.vue');
const CartPage = ()=> import( '../views/CartPage.vue');
const CategoriesProducts = ()=> import( '@/views/CategoriesProducts.vue');
const ResultsOfSearch = ()=> import( '@/views/ResultsOfSearch.vue');

// const UserDetails = () => import('./views/UserDetails.vue')
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
    },   {
        path:'/search/:key',
        name:'searchPage',
        component:ResultsOfSearch
    },  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;