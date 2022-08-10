<template>
    <div id="app">
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
                    </div>
                </div>
                <div class="width width-67">
                    <div class="card bg-white">
                        <div class="padding padding-15px">
                            <h1 class="fonts fonts-26 semibold black margin margin-bottom-15px">{{ content.title }}</h1>
                            <div class="fonts fonts-10 normal grey margin margin-bottom-15px">{{ content.date }}</div>
                            <div class="fonts fonts-11 normal black" v-html="content.description"></div>
                            <div class="padding padding-top-30px">
                                <div class="display-flex space-between align-center">
                                    <div class="fonts fonts-12 semibold black"><span class="fonts primary semibold">{{ content.contents.length }}</span> Dokumen</div>
                                </div>
                                <div v-for="(dt, i) in content.contents" :key="i" class="margin margin-bottom-20px margin-top-20px">
                                    <div class="card box-shadow bg-white display-flex row align-center">
                                        <div class="width width-100px">
                                            <div class="image image-80px bg-white-grey">
                                                <i class="post-middle-absolute fonts fonts-18 grey fa fa-lg fa-images"></i>
                                            </div>
                                        </div>
                                        <div style="width: calc(100% - 280px);">
                                            <div class="fonts fonts-11 normal black" v-html="dt.description"></div>
                                            <div class="fonts fonts-10 normal grey">{{ dt.fileType }}, {{ dt.date }}</div>
                                            <div class="fonts fonts-10 normal grey"></div>
                                        </div>
                                        <div class="width width-180px display-flex flex-end">
                                            <button class="btn btn-sekunder" @click="onCloseDocument(dt)">
                                                Buka Dokumen
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppViewDocument 
            v-if="visibleDocument"
            :data.sync="selectedDocument"
            @onClose="onCloseDocument"
        />
    </div>
</template>
<script>
import classRoomImage from '../../../assets/img/classroom.jpg'
import AppBreadcrumps from '../../modules/AppBreadcrumps'
import AppViewDocument from '../../modules/AppViewDocument'
export default {
    data () {
        return {
            cover: classRoomImage,
            visibleDocument: false,
            selectedDocument: null,
            dashboard: [
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Dokumen', value: '23'}
            ],
            info: [
                {icon: 'fa fa-lg fa-user', key: 'Guru', value: 'Ganjar Hadiatna'},
                {icon: 'fa fa-lg fa-user', key: 'Mapel', value: 'Matematika'},
                {icon: 'fa fa-lg fa-user', key: 'Jadwal', value: 'Pertemuan 1'},
                {icon: 'fa fa-lg fa-user', key: 'Kelas', value: 'Kelas 3.A'},
                {icon: 'fa fa-lg fa-user', key: 'Jenjang', value: 'SMA'},
            ],
            content: {
                title: 'MTK Pertemuan 1',
                date: 'Dibuat oleh Ganjar pada 9 Juli 2022, 10.00 WIB',
                user: 'Ganjar Hadiatna',
                type: 'Matematika',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                contents: [
                    {file: '', description: 'Lorem ipsum dolor sit amet.', fileType: 'Audio', date: '9 Juli 2022, 10.00 WIB'},
                    {file: '', description: 'Sed labore et dolore magna aliqua.', fileType: 'Video', date: '9 Juli 2022, 10.00 WIB'},
                    {file: '', description: 'Consectetur adipiscing elit, sed do eiusmod.', fileType: 'PDF', date: '9 Juli 2022, 10.00 WIB'},
                ]
            }
        }
    },
    components: {
        AppBreadcrumps,
        AppViewDocument
    },
    computed: {
        subjectId () {
            return this.$route.params.subjectId
        },
        classId () {
            return this.$route.params.classId
        },
        matterId () {
            return this.$route.params.matterId
        },
        breadcrumps () {
            return [
                {title: 'Kelas Saya', active: false},
                {title: this.classId, active: false},
                {title: 'Mata Pelajaran', active: false},
                {title: this.subjectId, active: false},
                {title: 'Materi Ajar', active: false},
                {title: this.matterId, active: true},
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
        onCloseDocument (data) {
            this.visibleDocument = !this.visibleDocument
            this.selectedDocument = data 
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