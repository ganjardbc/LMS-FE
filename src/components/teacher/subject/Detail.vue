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
                        <div class="fonts fonts-16 semibold black">Matematika</div>
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
                                Edit Mata Pelajaran 
                            </button>
                            <button class="btn btn-grey btn-full" style="margin-top: 15px;">
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
                <div class="width width-67">
                    <DetailSubject />
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
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Materi Ajar', value: '23'}
            ]
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
                {title: 'Mata Pelajaran', active: false},
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