<template>
    <div id="app">
        <!-- <div class="left-form">
            <div class="padding padding-bottom-25px">
                <AppBreadcrumps :data.sync="breadcrumps" :goBack="goBack" />
            </div>
            <div class="card box-shadow bg-white">
                <div class="padding padding-15px">
                    <h1 class="fonts fonts-26 semibold black margin margin-bottom-15px">{{ content.title }}</h1>
                    <div class="fonts fonts-11 normal grey margin margin-bottom-15px">{{ content.user }} | {{ content.type }} | {{ content.date }}</div>
                    <div class="margin margin-top-30px margin-bottom-30px">
                        <div class="image image-half-padding bg-white-grey">
                            <i class="post-middle-absolute fonts fonts-42 grey fa fa-lg fa-images"></i>
                        </div>
                    </div>
                    <div class="fonts fonts-12 normal black" v-html="content.description"></div>
                </div>
            </div>
        </div>
        <div class="right-form display-flex column center">
            <div class="card bg-white display-flex column align-center">
                <div class="fonts fonts-16 semibold black">Materi Ajar</div>
                <div class="width width-100 margin margin-top-15px margin-bottom-15px">
                    <div 
                        class="image image-half-padding bg-size-contain bg-white"
                        :style="`background-image: url(${cover});`"></div>
                </div>
                <div class="fonts fonts-16 semibold black">MTK Pertemuan 1</div>
                <div class="width width-100 display-flex space-between">
                    <div v-for="(dt, i) in dashboard" :key="i" class="width width-95 display-flex row center align-center">
                        <span class="fonts fonts-11 semibold primary margin margin-right-5px">{{ dt.value }}</span>
                        <span class="fonts fonts-11 normal black">{{ dt.title }}</span>
                    </div>
                </div>
                <div class="padding padding-10px">
                    <div class="card-capsule active">
                        <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                    </div>
                </div>
                <div class="width width-100 padding padding-top-5px padding-bottom-5px">
                    <div 
                        v-for="(dt, i) in info" :key="i" 
                        class="display-flex row align-center center padding padding-bottom-10px">
                        <div class="width width-30 align-center">
                            <div class="fonts fonts-11 semibold black">{{ dt.key }}</div>
                        </div>
                        <div class="width width-70">
                            <div class="fonts fonts-11 normal black">: {{ dt.value }}</div>
                        </div>
                    </div>
                </div>
                <div class="width width-100 display-flex row space-between">
                    <button class="btn btn-center btn-sekunder width width-49">
                        <i class="icn icn-left fa fa-lg fa-edit"></i> Edit Materi 
                    </button>
                    <button class="btn btn-center btn-danger width width-49">
                        <i class="icn icn-left fa fa-lg fa-trash-alt"></i> Hapur Materi  
                    </button>
                </div>
            </div>
        </div> -->

        <div class="width width-100">
            <div class="width width-100">
                <AppBreadcrumps :data.sync="breadcrumps" :goBack="goBack" />
            </div>
            <div class="width width-100 display-flex space-between padding padding-top-30px padding-bottom-15px">
                <div class="width width-30">
                    <div class="card bg-white display-flex column align-center">
                        <div class="width width-100 margin margin-top-15px margin-bottom-15px">
                            <div 
                                class="image image-half-padding bg-size-contain bg-white"
                                :style="`background-image: url(${cover});`"></div>
                        </div>
                        <div class="fonts fonts-16 semibold black">MTK Pertemuan 1</div>
                        <div class="width width-100 display-flex space-between">
                            <div v-for="(dt, i) in dashboard" :key="i" class="width width-95 display-flex row center align-center">
                                <span class="fonts fonts-11 semibold primary margin margin-right-5px">{{ dt.value }}</span>
                                <span class="fonts fonts-11 normal black">{{ dt.title }}</span>
                            </div>
                        </div>
                        <div class="padding padding-10px">
                            <div class="card-capsule active">
                                <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                            </div>
                        </div>
                        <div class="width width-100 padding padding-top-5px padding-bottom-5px">
                            <div 
                                v-for="(dt, i) in info" :key="i" 
                                class="display-flex row align-center center padding padding-bottom-10px">
                                <div class="width width-30 align-center">
                                    <div class="fonts fonts-11 semibold black">{{ dt.key }}</div>
                                </div>
                                <div class="width width-70">
                                    <div class="fonts fonts-11 normal black">: {{ dt.value }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="width width-100 display-flex row space-between">
                            <button class="btn btn-center btn-sekunder width width-49">
                                <i class="icn icn-left fa fa-lg fa-edit"></i> Edit Materi 
                            </button>
                            <button class="btn btn-center btn-danger width width-49">
                                <i class="icn icn-left fa fa-lg fa-trash-alt"></i> Hapur Materi  
                            </button>
                        </div>
                    </div>
                </div>
                <div class="width width-67">
                    <div class="card box-shadow bg-white">
                        <div class="padding padding-15px">
                            <h1 class="fonts fonts-26 semibold black margin margin-bottom-15px">{{ content.title }}</h1>
                            <div class="fonts fonts-11 normal grey margin margin-bottom-15px">{{ content.user }} | {{ content.type }} | {{ content.date }}</div>
                            <div class="margin margin-top-30px margin-bottom-30px">
                                <div class="image image-half-padding bg-white-grey">
                                    <i class="post-middle-absolute fonts fonts-42 grey fa fa-lg fa-images"></i>
                                </div>
                            </div>
                            <div class="fonts fonts-12 normal black" v-html="content.description"></div>
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
import DetailSubject from './DetailSubject'
export default {
    data () {
        return {
            cover: classRoomImage,
            dashboard: [
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Pengunjung', value: '23'}
            ],
            info: [
                {icon: 'fa fa-lg fa-user', key: 'Guru', value: 'Ganjar Hadiatna'},
                {icon: 'fa fa-lg fa-user', key: 'Mapel', value: 'Matematika'},
                {icon: 'fa fa-lg fa-user', key: 'Kelas', value: 'Kelas 3.A'},
                {icon: 'fa fa-lg fa-user', key: 'Jenjang', value: 'SMA'},
                {icon: 'fa fa-lg fa-user', key: 'Tahun Ajar', value: 'Angkatan 2020'},
            ],
            content: {
                title: 'MTK Pertemuan 1',
                date: '9 Juli 2022, 10.00 WIB',
                user: 'Ganjar Hadiatna',
                type: 'Matematika',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        }
    },
    components: {
        AppBreadcrumps,
        DetailSubject
    },
    computed: {
        subjectId () {
            return this.$route.params.id
        },
        breadcrumps () {
            return [
                {title: 'Materi Ajar', active: false},
                {title: this.subjectId, active: true},
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