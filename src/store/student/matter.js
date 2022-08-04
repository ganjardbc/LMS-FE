import classRoomImage from '../../assets/img/classroom.jpg'

const defaultFormContent = {
    id: '', 
    description: '', 
    fileType: '', 
    files: ''
}

export default {
    namespaced: true,
    state: {
        isGridView: true,
        formFilter : {
            select: 'ALL',
            search: ''
        },
        data: [
            {id: 1, image: classRoomImage, title: 'MTK Pertemuan 1', description: 'Matematika', type: 'Matematika', views: '15'},
            {id: 2, image: classRoomImage, title: 'MTK Pertemuan 2', description: 'Matematika', type: 'Matematika', views: '23'},
            {id: 3, image: classRoomImage, title: 'MTK Pertemuan 3', description: 'Matematika', type: 'Matematika', views: '77'},
            {id: 4, image: classRoomImage, title: 'MTK Pertemuan 4', description: 'Matematika', type: 'Matematika', views: '23'},
            {id: 5, image: classRoomImage, title: 'MTK Pertemuan 5', description: 'Matematika', type: 'Matematika', views: '77'},
            {id: 6, image: classRoomImage, title: 'MTK Pertemuan 6', description: 'Matematika', type: 'Matematika', views: '15'},
            {id: 7, image: classRoomImage, title: 'MTK Pertemuan 7', description: 'Matematika', type: 'Matematika', views: '23'},
            {id: 8, image: classRoomImage, title: 'MTK Pertemuan 8', description: 'Matematika', type: 'Matematika', views: '77'},
            {id: 9, image: classRoomImage, title: 'MTK Pertemuan 9', description: 'Matematika', type: 'Matematika', views: '23'},
            {id: 10, image: classRoomImage, title: 'MTK Pertemuan 10', description: 'Matematika', type: 'Matematika', views: '77'}
        ],
        dataClassRoom: [
            {id: 1, image: classRoomImage, title: 'Kelas 3.A', description: 'SMA | Angkatan 2020', type: 'SMA', subject: '15', student: '20'},
            {id: 2, image: classRoomImage, title: 'Kelas 3.B', description: 'SMA | Angkatan 2020', type: 'SMA', subject: '23', student: '20'},
            {id: 3, image: classRoomImage, title: 'Kelas 3.C', description: 'SMA | Angkatan 2020', type: 'SMA', subject: '77', student: '20'},
            {id: 4, image: classRoomImage, title: 'Kelas 3.D', description: 'SMA | Angkatan 2020', type: 'SMA', subject: '77', student: '20'},
            {id: 5, image: classRoomImage, title: 'Kelas 3.F', description: 'SMA | Angkatan 2020', type: 'SMA', subject: '77', student: '20'},
            {id: 6, image: classRoomImage, title: 'Kelas 3.G', description: 'SMA | Angkatan 2020', type: 'SMA', subject: '77', student: '20'},
            {id: 7, image: classRoomImage, title: 'Kelas 2.A', description: 'SMP | Angkatan 2021', type: 'SMP', subject: '23', student: '20'},
            {id: 8, image: classRoomImage, title: 'Kelas 2.B', description: 'SMP | Angkatan 2021', type: 'SMP', subject: '77', student: '20'},
            {id: 9, image: classRoomImage, title: 'Kelas 2.C', description: 'SMP | Angkatan 2021', type: 'SMP', subject: '77', student: '20'}
        ],
        dataSubject: [
            {id: 1, image: classRoomImage, title: 'Matematika', subject: '15'},
            {id: 2, image: classRoomImage, title: 'Bahasa Inggris', subject: '23'},
            {id: 3, image: classRoomImage, title: 'Bahasa Indonesia', subject: '77'},
            {id: 4, image: classRoomImage, title: 'PKN', subject: '15'},
            {id: 5, image: classRoomImage, title: 'Ilmu Pengetahuan Alam', subject: '23'},
            {id: 6, image: classRoomImage, title: 'Teknologi Ilmu & Komputer', subject: '77'}
        ],
        form: {
            activeIndex: 0,
            cover: '',
            title: '',
            description: '',
            schedule: '',
            classRoom: '',
            subject: '',
            contents: [ defaultFormContent ],
        },
        errorMessage: {
            cover: '',
            title: '',
            description: '',
            schedule: '',
            fileType: '',
            files: '',
            classRoom: '',
            subjects: ''
        },
        detail: {
            matter: {
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

        // MATTER
        setMatterGridView (state, data) {
            state.detail.matter.isGridView = data 
        },

        setFormActiveIndex (state, data) {
            state.form.activeIndex = data 
        }
    },
    actions: {
        // MAIN
        onChangeGridView ({ state, commit }, data) {
            commit('setGridView', data)
        },

        // MATTER
        onChangeMatterGridView ({ state, commit }, data) {
            commit('setMatterGridView', data)
        },

        onFormActiveIndex ({ state, commit }, data) {
            commit('setFormActiveIndex', data)
        },

        onAddFormContent ({ state, commit }) {
            state.form.contents.push(defaultFormContent)
        }
    }
}