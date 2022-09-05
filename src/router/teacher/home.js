import HomeLayout from '@/components/layouts/teacher/Home.vue'
import ClassRoom from '@/components/teacher/home/Index.vue'

const routes = {
    path: '/class-room',
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