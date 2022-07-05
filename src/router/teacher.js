import TeacherLayout from '@/components/layouts/Teacher.vue'
import Home from '@/components/teacher/Index.vue'
import ClassRoom from '@/components/teacher/classroom/Index.vue'
import ClassDetail from '@/components/teacher/classroom/Detail.vue'
import Subject from '@/components/teacher/subject/Index.vue'
import SubjectDetail from '@/components/teacher/subject/Detail.vue'

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
        {
            name: 'teacher-subject',
            path: '/teacher-subject',
            component: Subject
        },
        {
            name: 'teacher-subject-detail',
            path: '/teacher-subject/detail/:id',
            component: SubjectDetail
        }
    ]
}

export default routes