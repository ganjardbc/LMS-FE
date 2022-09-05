import ClassRoomLayout from '@/components/layouts/teacher/ClassRoom.vue'
import Dashboard from '@/components/teacher/dashboard/Index.vue'
import Profile from '@/components/teacher/profile/Index.vue'
import Matter from '@/components/teacher/matter/Index.vue'
import MatterCreate from '@/components/teacher/matter/Form.vue'
import MatterDetail from '@/components/teacher/matter/Detail.vue'
import Student from '@/components/teacher/student/Index.vue'
import StudentDetail from '@/components/teacher/student/Detail.vue'

const routes = {
    path: '/class-room/:id/',
    component: ClassRoomLayout,
    children: [
        {
            name: 'class-room-dashboard',
            path: 'dashboard',
            component: Dashboard
        },
        {
            name: 'class-room-profile',
            path: 'profile',
            component: Profile
        },

        // MATTER
        {
            name: 'class-room-matter',
            path: 'matter',
            component: Matter
        },
        {
            name: 'class-room-matter-create',
            path: 'matter/create',
            component: MatterCreate
        },
        {
            name: 'class-room-matter-detail',
            path: 'matter/detail/:idMatter',
            component: MatterDetail
        },

        // STUDENT
        {
            name: 'class-room-student',
            path: 'student',
            component: Student
        },
        {
            name: 'class-room-student-detail',
            path: 'student/detail/:idStudent',
            component: StudentDetail
        },
    ]
}

export default routes