<template>
    <div id="app">
        <div class="width width-100">
            <div class="width width-100">
                <AppBreadcrumps :data.sync="breadcrumps" :goBack="goBack" />
            </div>
            <div class="width width-100 display-flex space-between padding padding-top-30px padding-bottom-15px">
                <div class="width width-30">
                    <div class="card bg-white box-shadow">
                        <div class="width width-100 padding padding-top-10px">
                            <div class="display-flex column align-center padding padding-bottom-10px">
                                <div 
                                    class="image image-circle image-150px margin margin-bottom-10px"
                                    :style="`text-align: center; background-image: url(${image});`">
                                    <i 
                                        v-if="!image"
                                        class="post-top fa fa-4x fa-user-circle" 
                                        style="color: #999;" />
                                </div>
                                <div class="fonts fonts-12 semibold black">Ganjar Hadiatna</div>
                                <div class="fonts fonts-10 normal black">SMA</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="width width-67">
                    <div class="card bg-white box-shadow margin margin-bottom-30px">
                        <div class="fonts fonts-16 semibold black">Informasi</div>
                        <div 
                            v-for="(dt, i) in informations" 
                            :key="i"
                            class="width width-100 display-flex flex-start wrap margin margin-top-5px margin-bottom-5px">
                            <div class="width width-25">
                                <div class="fonts fonts-11 black semibold">
                                    {{ dt.key }}
                                </div>
                            </div>
                            <div class="width width-75">
                                <div class="fonts fonts-11 black normal">
                                    : {{ dt.value }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-white box-shadow margin margin-bottom-30px">
                        <div class="fonts fonts-16 semibold black">Kontak</div>
                        <div 
                            v-for="(dt, i) in contacts" 
                            :key="i"
                            class="width width-100 display-flex flex-start wrap margin margin-top-5px margin-bottom-5px">
                            <div class="width width-25">
                                <div class="fonts fonts-11 black semibold">
                                    {{ dt.key }}
                                </div>
                            </div>
                            <div class="width width-75">
                                <div class="fonts fonts-11 black normal">
                                    : {{ dt.value }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import classRoomImage from '../../../assets/img/classroom.jpg'
import AppBreadcrumps from '../../modules/AppBreadcrumps'
export default {
    data () {
        return {
            image: classRoomImage,
            informations: [
                {key: 'NISN', value: '1011511511009'},
                {key: 'Nama', value: 'Ganjar Hadiatna'},
                {key: 'Alamat', value: 'Lorem ipsum doler ismet'},
                {key: 'Jenjang', value: 'SMA'},
                {key: 'Kelas', value: 'Kelas 3.A'},
            ],
            contacts: [
                {key: 'No. Telpon', value: '089699181669'},
                {key: 'E-mail', value: 'ganjarhadiatna.gh@gmail.com'},
            ],
        }
    },
    components: {
        AppBreadcrumps 
    },
    computed: {
        idStudent () {
            return this.$route.params.idStudent
        },
        breadcrumps () {
            return [
                {title: 'Daftar Murid', active: false},
                {title: 'Detail', active: false},
                {title: this.idStudent, active: true},
            ]
        }
    },
    methods: {
        goBack () {
            this.$router.back()
        },
        onChangeTabs (data) {
            this.activeTabs = data
        },
        toEdit () {
            this.$router.push({name: 'teacher-matter-create'})
        }
    }
}
</script>
<style>
    .el-select .el-input {
        width: 110px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>