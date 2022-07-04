import AdminLayout from '@/components/layouts/Admin.vue'
import Home from '@/components/admin/Index.vue'

const routes = {
    path: '/admin',
    component: AdminLayout,
    children: [
        {
            name: 'admin-home',
            path: '/',
            component: Home
        }
    ]
}

export default routes