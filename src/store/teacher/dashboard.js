import classRoomImage from '../../assets/img/classroom.jpg'
export default {
    namespaced: true,
    state: {
        metrics: [
            {id: 1, icon: 'fa fa-lg fa-chalkboard-teacher', title: 'Ruang Kelas', value: '15'},
            {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Mata Pelajaran', value: '23'},
            {id: 3, icon: 'fa fa-lg fa-graduation-cap', title: 'Jumlah Murid', value: '77'}
        ],
        subjects: [
            {id: 1, image: classRoomImage, title: 'Matematika', subject: '15'},
            {id: 2, image: classRoomImage, title: 'Bahasa Inggris', subject: '23'},
            {id: 3, image: classRoomImage, title: 'Bahasa Indonesia', subject: '77'},
            {id: 4, image: classRoomImage, title: 'PKN', subject: '15'},
            {id: 5, image: classRoomImage, title: 'Ilmu Pengetahuan Alam', subject: '23'},
            {id: 6, image: classRoomImage, title: 'Teknologi Ilmu & Komputer', subject: '77'}
        ],
        classRooms: [
            {id: 1, image: classRoomImage, title: 'Kelas 3.A', description: 'SMA', subject: '15', student: '20'},
            {id: 2, image: classRoomImage, title: 'Kelas 3.B', description: 'SMA', subject: '23', student: '20'},
            {id: 3, image: classRoomImage, title: 'Kelas 3.C', description: 'SMA', subject: '77', student: '20'},
            {id: 4, image: classRoomImage, title: 'Kelas 2.A', description: 'SMP', subject: '23', student: '20'},
            {id: 5, image: classRoomImage, title: 'Kelas 2.B', description: 'SMP', subject: '77', student: '20'},
            {id: 5, image: classRoomImage, title: 'Kelas 2.C', description: 'SMP', subject: '77', student: '20'}
        ]
    },
    getters: {},
    mutations: {},
    actions: {}
}