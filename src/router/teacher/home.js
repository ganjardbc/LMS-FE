import HomeLayout from '@/components/layouts/teacher/Home.vue'
import ClassRoom from '@/components/teacher/home/Index.vue'

const routes = {
    path: '/teacher',
    component: HomeLayout,
    children: [
        {
            name: 'class-room-home',
            path: '/',
            component: ClassRoom
        },
    ]
}

export default routes