import ClassListLayout from '@/components/layouts/ClassList.vue'
import ClassRoom from '@/components/classRoom/Index.vue'

const routes = {
    path: '/class-room',
    component: ClassListLayout,
    children: [
        {
            name: 'class-room-home',
            path: '/',
            component: ClassRoom
        },
    ]
}

export default routes