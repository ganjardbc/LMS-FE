import ClassRoomLayout from '@/components/layouts/student/ClassRoom.vue'
import Dashboard from '@/components/student/dashboard/Index.vue'
import Profile from '@/components/student/profile/Index.vue'
import Matter from '@/components/student/matter/Index.vue'
import MatterDetail from '@/components/student/matter/Detail.vue'
import Student from '@/components/student/student/Index.vue'
import StudentDetail from '@/components/student/student/Detail.vue'

const routes = {
    path: '/student/class-room/',
    component: ClassRoomLayout,
    children: [
        {
            name: 'student-dashboard',
            path: 'dashboard',
            component: Dashboard
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