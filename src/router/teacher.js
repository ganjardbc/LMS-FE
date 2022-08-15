import TeacherLayout from '@/components/layouts/Teacher.vue'
import Home from '@/components/teacher/Index.vue'

const routes = {
    path: '/teacher',
    component: TeacherLayout,
    children: [
        {
            name: 'teacher-home',
            path: '/',
            component: Home
        },
    ]
}

export default routes