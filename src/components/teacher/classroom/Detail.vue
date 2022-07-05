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
                        <div class="fonts fonts-16 semibold black">SMA Kelas 3</div>
                        <div class="fonts fonts-11 normal grey">Jenjang SMA</div>
                        <div class="card-capsule active margin margin-10px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <div class="width width-100 display-flex space-between padding padding-top-5px padding-bottom-30px">
                            <div v-for="(dt, i) in dashboard" :key="i" class="width width-95 display-flex column align-center">
                                <div class="fonts fonts-22 semibold primary align-center">{{ dt.value }}</div>
                                <div class="fonts fonts-10 normal black align-center">{{ dt.title }}</div>
                            </div>
                        </div>
                        <div class="width width-100 padding padding-bottom-15px">
                            <button class="btn btn-sekunder btn-full">
                                Edit Ruang Kelas
                            </button>
                            <button class="btn btn-grey btn-full" style="margin-top: 15px;">
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
                <div class="width width-67">
                    <AppTabs 
                        :isScrollable="false"
                        :selectedIndex.sync="activeTabs" 
                        :data="tabs" 
                        :onChange="(data) => onChangeTabs(data)" 
                        class="width width-48 margin margin-bottom-15-px" />
                    <DetailSubject v-if="activeTabs === 0" />
                    <DetailStudent v-if="activeTabs === 1" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import classRoomImage from '../../../assets/img/classroom-3.jpeg'
import AppBreadcrumps from '../../modules/AppBreadcrumps'
import AppTabs from '../../modules/AppTabs'
import DetailSubject from './DetailSubject'
import DetailStudent from './DetailStudent'
export default {
    data () {
        return {
            activeTabs: 0,
            cover: classRoomImage,
            form : {
                search: ''
            },
            tabs: [
                {label: 'Materi Ajar', status: 'active'},
                {label: 'Daftar Murid', status: ''}
            ],
            dashboard: [
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Jumlah Materi', value: '23'},
                {id: 3, icon: 'fa fa-lg fa-graduation-cap', title: 'Jumlah Murid', value: '77'}
            ]
        }
    },
    components: {
        AppBreadcrumps,
        AppTabs,
        DetailSubject,
        DetailStudent
    },
    computed: {
        classRoomId () {
            return this.$route.params.id
        },
        breadcrumps () {
            return [
                {title: 'Ruang Kelas', active: false},
                {title: this.classRoomId, active: true},
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