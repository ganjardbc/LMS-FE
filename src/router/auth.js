import AuthLayout from '@/components/layouts/Auth.vue'
import Login from '@/components/auth/Login.vue'

const routes = {
    path: '/',
    component: AuthLayout,
    children: [
        {
            name: 'home',
            path: '/',
            component: Login
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
}

export default routes