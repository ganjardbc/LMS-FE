import StudentLayout from '@/components/layouts/Student.vue'
import Home from '@/components/student/Index.vue'

const routes = {
    path: '/student',
    component: StudentLayout,
    children: [
        {
            name: 'student-home',
            path: '/',
            component: Home
        }
    ]
}

export default routes