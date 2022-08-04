import StudentLayout from '@/components/layouts/Student.vue'
import Home from '@/components/student/Index.vue'
import ClassRoom from '@/components/student/classroom/Index.vue'
import DetailClassSubject from '@/components/student/classroom/DetailClassSubject'
import DetailClassStudent from '@/components/student/classroom/DetailClassStudent'
import Matter from '@/components/student/matter/Index.vue'
import MatterDetail from '@/components/student/matter/Detail.vue'
import Profile from '@/components/student/profile/Index.vue'

const routes = {
    path: '/student',
    component: StudentLayout,
    children: [
        {
            name: 'student-home',
            path: '/',
            component: Home
        },
        {
            name: 'student-class',
            path: '/student-class',
            component: ClassRoom
        },
        {
            name: 'student-class-subject-detail',
            path: '/student-class/subject/:classId/:subjectId',
            component: DetailClassSubject
        },
        {
            name: 'student-class-student-detail',
            path: '/student-class/student/:classId/:studentId',
            component: DetailClassStudent
        },
        {
            name: 'student-matter',
            path: '/student-matter',
            component: Matter
        },
        {
            name: 'student-matter-detail',
            path: '/student-matter/detail/:id',
            component: MatterDetail
        },
        {
            name: 'student-profile',
            path: '/student-profile',
            component: Profile
        }
    ]
}

export default routes