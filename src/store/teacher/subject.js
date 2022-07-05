import classRoomImage from '../../assets/img/classroom.jpg'
export default {
    namespaced: true,
    state: {
        isGridView: true,
        formFilter : {
            select: 'ALL',
            search: ''
        },
        data: [
            {id: 1, image: classRoomImage, title: 'Matematika', subject: '15'},
            {id: 2, image: classRoomImage, title: 'Bahasa Inggris', subject: '23'},
            {id: 3, image: classRoomImage, title: 'Bahasa Indonesia', subject: '77'},
            {id: 4, image: classRoomImage, title: 'PKN', subject: '15'},
            {id: 5, image: classRoomImage, title: 'Ilmu Pengetahuan Alam', subject: '23'},
            {id: 6, image: classRoomImage, title: 'Teknologi Ilmu & Komputer', subject: '77'}
        ],
        detail: {
            subject: {
                isGridView: false,
                formFilter : {
                    search: ''
                },
                data: [
                    {id: 1, image: classRoomImage, title: 'MTK Pertemuan 1', description: 'Matematika', views: '15'},
                    {id: 2, image: classRoomImage, title: 'MTK Pertemuan 2', description: 'Matematika', views: '23'},
                    {id: 3, image: classRoomImage, title: 'MTK Pertemuan 3', description: 'Matematika', views: '77'},
                    {id: 4, image: classRoomImage, title: 'MTK Pertemuan 4', description: 'Matematika', views: '23'},
                    {id: 5, image: classRoomImage, title: 'MTK Pertemuan 5', description: 'Matematika', views: '77'},
                    {id: 6, image: classRoomImage, title: 'MTK Pertemuan 6', description: 'Matematika', views: '15'},
                    {id: 7, image: classRoomImage, title: 'MTK Pertemuan 7', description: 'Matematika', views: '23'},
                    {id: 8, image: classRoomImage, title: 'MTK Pertemuan 8', description: 'Matematika', views: '77'},
                    {id: 9, image: classRoomImage, title: 'MTK Pertemuan 9', description: 'Matematika', views: '23'},
                    {id: 10, image: classRoomImage, title: 'MTK Pertemuan 10', description: 'Matematika', views: '77'}
                ]
            }
        }
    },
    getters: {},
    mutations: {
        // MAIN
        setGridView (state, data) {
            state.isGridView = data 
        },

        // SUBJECT
        setSubjectGridView (state, data) {
            state.detail.subject.isGridView = data 
        },
    },
    actions: {
        // MAIN
        onChangeGridView ({ state, commit }, data) {
            commit('setGridView', data)
        },

        // SUBJECT
        onChangeSubjectGridView ({ state, commit }, data) {
            commit('setSubjectGridView', data)
        },
    }
}