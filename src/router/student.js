import StudentLayout from '@/components/layouts/Student.vue'
import Home from '@/components/student/Index.vue'
import Profile from '@/components/student/profile/Index.vue'
import Matter from '@/components/student/matter/Index.vue'
import MatterDetail from '@/components/student/matter/Detail.vue'
import Student from '@/components/student/student/Index.vue'
import StudentDetail from '@/components/student/student/Detail.vue'

const routes = {
    path: '/student',
    component: StudentLayout,
    children: [
        {
            name: 'student-home',
            path: 'dashboard',
            component: Home
        },
        {
            name: 'student-profile',
            path: 'profile',
            component: Profile
        },

        // MATTER
        {
            name: 'student-matter',
            path: 'matter',
            component: Matter
        },
        {
            name: 'student-matter-detail',
            path: 'matter/detail/:id',
            component: MatterDetail
        },

        // STUDENT
        {
            name: 'student-list',
            path: 'list',
            component: Student
        },
        {
            name: 'student-list-detail',
            path: 'list/detail/:idStudent',
            component: StudentDetail
        },
    ]
}

export default routes