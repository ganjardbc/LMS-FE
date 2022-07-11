import TeacherLayout from '@/components/layouts/Teacher.vue'
import Home from '@/components/teacher/Index.vue'
import ClassRoom from '@/components/teacher/classroom/Index.vue'
import ClassDetail from '@/components/teacher/classroom/Detail.vue'
import Subject from '@/components/teacher/subject/Index.vue'
// import SubjectDetail from '@/components/teacher/subject/Detail.vue'
import Matter from '@/components/teacher/matter/Index.vue'
import MatterCreate from '@/components/teacher/matter/Form.vue'
import MatterDetail from '@/components/teacher/matter/Detail.vue'

const routes = {
    path: '/teacher',
    component: TeacherLayout,
    children: [
        {
            name: 'teacher-home',
            path: '/',
            component: Home
        },
        {
            name: 'teacher-class',
            path: '/teacher-class',
            component: ClassRoom
        },
        {
            name: 'teacher-class-detail',
            path: '/teacher-class/detail/:id',
            component: ClassDetail
        },
        // {
        //     name: 'teacher-class-subject',
        //     path: '/teacher-class/detail/:classId/subject/:subjectId',
        //     component: ClassSubject
        // },
        {
            name: 'teacher-subject',
            path: '/teacher-class/detail/:classId/subject/:subjectId',
            component: Subject
        },
        // {
        //     name: 'teacher-subject-detail',
        //     path: '/teacher-subject/detail/:id',
        //     component: SubjectDetail
        // },
        {
            name: 'teacher-matter',
            path: '/teacher-matter',
            component: Matter
        },
        {
            name: 'teacher-matter-create',
            path: '/teacher-matter/create',
            component: MatterCreate
        },
        {
            name: 'teacher-matter-detail',
            path: '/teacher-matter/detail/:id',
            component: MatterDetail
        }
    ]
}

export default routes