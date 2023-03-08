import MainAppartament from '@/pages/MainAppartament.vue'
import MainPage from '@/pages/MainPage.vue'
import MainContacts from '@/pages/MainContacts.vue'
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/contacts',
        component: MainContacts
    },
    {
        path: '/appartament/:id',
        component: MainAppartament,
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHashHistory(process.env.Base_URL)
    }
)

export default router;