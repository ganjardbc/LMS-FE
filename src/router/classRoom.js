import ClassRoomLayout from '@/components/layouts/ClassRoom.vue'
import Dashboard from '@/components/classRoom/dashboard/Index.vue'
import Profile from '@/components/classRoom/profile/Index.vue'
import Matter from '@/components/classRoom/matter/Index.vue'
import MatterCreate from '@/components/classRoom/matter/Form.vue'
import MatterDetail from '@/components/classRoom/matter/Detail.vue'
import Student from '@/components/classRoom/student/Index.vue'
import StudentDetail from '@/components/classRoom/student/Detail.vue'

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