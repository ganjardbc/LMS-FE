<template>
    <div id="App">
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
                        <div class="fonts fonts-16 semibold black">Matematika</div>
                        <div class="fonts fonts-11 normal grey">SMA | Kelas 3.A</div>
                        <div class="card-capsule active margin margin-10px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <div class="width width-100 display-flex space-between padding padding-top-5px padding-bottom-15px">
                            <div v-for="(dt, i) in dashboard" :key="i" class="width width-95 display-flex column align-center">
                                <div class="fonts fonts-22 semibold primary align-center">{{ dt.value }}</div>
                                <div class="fonts fonts-10 normal black align-center">{{ dt.title }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="width width-67">
                    <div class="fonts fonts-32 semibold black">Materi Ajar</div>
                    <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
                        <div class="width width-40 display-flex">
                            <el-input placeholder="Cari materi ajar" v-model="formFilter.search" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                        <div class="width width-60 display-flex flex-end">
                            <button 
                                slot="reference"
                                class="btn btn-sekunder" 
                                style="margin-left: 5px;"
                                @click="changeGridView">
                                <i :class="`icn fa fa-lg ${isGridView ? 'fa-th-large' : 'fa-th-list'}`"></i>
                            </button>
                            <el-popover
                                placement="bottom-end"
                                width="200"
                                trigger="click">
                                <div>
                                    FILTER 
                                </div>
                                <button 
                                    slot="reference"
                                    class="btn btn-sekunder" 
                                    style="margin-left: 5px;">
                                    <i class="icn icn-left fa fa-lg fa-filter"></i> Filter
                                </button>
                            </el-popover>
                        </div>
                    </div>
                    <CardMatter :isGridView.sync="isGridView" :data.sync="data" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import classRoomImage from '../../../assets/img/classroom.jpg'
import CardMatter from './components/CardMatter'
import AppBreadcrumps from '../../modules/AppBreadcrumps'
export default {
    name: 'App',
    data () {
        return {
            cover: classRoomImage,
            dashboard: [
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Materi Ajar', value: '23'},
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Guru Pengajar', value: '3'},
            ]
        }
    },
    computed: {
        ...mapState({
            detailSubject: state => state.studentClassRoom.detail.matter
        }),
        formFilter () {
            return this.detailSubject.formFilter
        },
        isGridView () {
            return this.detailSubject.isGridView
        },
        data () {
            return this.detailSubject.data 
        },
        subjectId () {
            return this.$route.params.subjectId
        },
        classId () {
            return this.$route.params.classId
        },
        breadcrumps () {
            return [
                {title: 'Kelas Saya', active: false},
                {title: this.classId, active: false},
                {title: 'Mata Pelajaran', active: false},
                {title: this.subjectId, active: true},
            ]
        }
    },
    methods: {
        ...mapActions({
            onChangeMattertGridView: 'studentClassRoom/onChangeMattertGridView'
        }),
        changeGridView () {
            this.onChangeMattertGridView(!this.isGridView)
        },
        goBack () {
            this.$router.back()
        },
    },
    components: {
        CardMatter,
        AppBreadcrumps
    }
}
</script>