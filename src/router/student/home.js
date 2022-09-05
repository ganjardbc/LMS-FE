import HomeLayout from '@/components/layouts/student/Home.vue'
import Home from '@/components/student/home/Index.vue'
import MatterDetail from '@/components/student/home/Detail.vue'

const routes = {
    path: '/student/',
    component: HomeLayout,
    children: [
        {
            name: 'student-home',
            path: 'home',
            component: Home
        },
        {
            name: 'student-home-matter-detail',
            path: 'matter/detail/:id',
            component: MatterDetail
        },
    ]
}

export default routes