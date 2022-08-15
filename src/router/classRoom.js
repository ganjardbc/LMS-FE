import ClassRoomLayout from '@/components/layouts/ClassRoom.vue'
import Dashboard from '@/components/teacher/dashboard/Index.vue'
import Profile from '@/components/teacher/profile/Index.vue'
import ClassDetail from '@/components/teacher/classroom/Detail.vue'
import Subject from '@/components/teacher/subject/Index.vue'
import SubjectDetailMatter from '@/components/teacher/subject/DetailSubjectMatter.vue'
import Matter from '@/components/teacher/matter/Index.vue'
import MatterCreate from '@/components/teacher/matter/Form.vue'
import MatterDetail from '@/components/teacher/matter/Detail.vue'

const routes = {
    path: '/teacher/class/:id/',
    component: ClassRoomLayout,
    children: [
        {
            name: 'teacher-dashboard',
            path: 'dashboard',
            component: Dashboard
        },
        {
            name: 'teacher-profile',
            path: 'teacher-profile',
            component: Profile
        },
        {
            name: 'teacher-class-detail',
            path: 'detail/:id',
            component: ClassDetail
        },
        {
            name: 'teacher-subject',
            path: 'detail/:classId/subject/:subjectId',
            component: Subject
        },
        {
            name: 'teacher-subject-matter',
            path: 'detail/:classId/subject/:subjectId/matter/:matterId',
            component: SubjectDetailMatter
        },
        {
            name: 'teacher-matter',
            path: 'matter',
            component: Matter
        },
        {
            name: 'teacher-matter-detail',
            path: 'teacher-matter/detail/:id',
            component: MatterDetail
        },
        {
            name: 'teacher-matter-create',
            path: 'matter-create',
            component: MatterCreate
        },
    ]
}

export default routes