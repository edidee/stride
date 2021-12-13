import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import Profile from '../components/pages/Profile.vue'
import Stats from '../components/pages/Stats.vue'
import Login from '../components/widgets/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/stat',
        name: 'Stats',
        component: Stats,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/me',
        name: 'Profile',
        component: Profile,
    }
]

const router = createRouter({
    linkActiveClass: 'text-white',
    history: createWebHistory(),
    routes,
})

export default router