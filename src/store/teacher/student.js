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
            {id: 1, image: classRoomImage, name: 'Student 1', about: 'SMA', absence: '10', class: '2', subject: '22'},
            {id: 2, image: classRoomImage, name: 'Student 2', about: 'SMA', absence: '10', class: '2', subject: '22'},
            {id: 3, image: classRoomImage, name: 'Student 3', about: 'SMA', absence: '10', class: '2', subject: '22'},
            {id: 4, image: classRoomImage, name: 'Student 4', about: 'SMA', absence: '10', class: '2', subject: '22'},
            {id: 5, image: classRoomImage, name: 'Student 5', about: 'SMA', absence: '10', class: '2', subject: '22'},
            {id: 6, image: classRoomImage, name: 'Student 6', about: 'SMA', absence: '10', class: '2', subject: '22'},
            {id: 7, image: classRoomImage, name: 'Student 7', about: 'SMA', absence: '10', class: '2', subject: '22'}
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
                    {id: 1, image: classRoomImage, name: 'Student 1', about: 'SMA', absence: '10', class: '2', subject: '22'},
                    {id: 2, image: classRoomImage, name: 'Student 2', about: 'SMA', absence: '10', class: '2', subject: '22'},
                    {id: 3, image: classRoomImage, name: 'Student 3', about: 'SMA', absence: '10', class: '2', subject: '22'},
                    {id: 4, image: classRoomImage, name: 'Student 4', about: 'SMA', absence: '10', class: '2', subject: '22'},
                    {id: 5, image: classRoomImage, name: 'Student 5', about: 'SMA', absence: '10', class: '2', subject: '22'},
                    {id: 6, image: classRoomImage, name: 'Student 6', about: 'SMA', absence: '10', class: '2', subject: '22'},
                    {id: 7, image: classRoomImage, name: 'Student 7', about: 'SMA', absence: '10', class: '2', subject: '22'}
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