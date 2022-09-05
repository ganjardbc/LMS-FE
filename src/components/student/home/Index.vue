<template>
    <div id="app">
        <div class="width width-100">
            <div class="padding padding-bottom-15px">
                <div class="width width-100 padding padding-bottom-30px padding-top-30px">
                    <div class="width width-100 display-flex row-reverse align-center">
                        <div class="width width-40">
                            <div 
                                class="image image-half-padding bg-size-cover bg-white"
                                :style="`background-image: url(${cover});`"></div>
                        </div>
                        <div class="width width-60">
                            <div class="fonts fonts-32 semibold black">Kelas 3.A</div>
                            <div class="display-flex padding padding-top-10px">
                                <div class="fonts fonts-11 grey">Santi Asromo, SMA</div>
                                <!-- <div class="card-capsule active margin margin-left-15px">
                                    <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                                </div> -->
                            </div>
                            <div class="display-flex padding padding-top-15px">
                                <router-link 
                                    :to="{name: 'student-dashboard'}" 
                                    class="btn btn-main">
                                    <i class="icn icn-left fa fa-lg fa-chalkboard-teacher"></i> Masuk ke Kelas
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fonts fonts-18 semibold black">Daftar Materi Ajar SMA</div>
            <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
                <div class="width width-30 display-flex">
                    <el-input placeholder="Cari materi ajar" v-model="formFilter.search" class="subject-input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="width width-70 display-flex right">
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
                            URUTKAN 
                        </div>
                        <button 
                            slot="reference"
                            class="btn btn-sekunder" 
                            style="margin-left: 5px;">
                            <i class="icn icn-left fa fa-lg fa-sort"></i> Urutkan
                        </button>
                    </el-popover>
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
            <Card :isGridView.sync="isGridView" :data.sync="data" />
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import classRoomImage from '../../../assets/img/classroom-3.jpeg'
import Card from './components/Card'

export default {
    data () {
        return {
            cover: classRoomImage,
            info: [
                {icon: 'fa fa-lg fa-user', key: 'Wali', value: 'Ganjar Hadiatna'},
            ],
        }
    },
    mounted () {},
    computed: {
        ...mapState({
            metrics: state => state.studentDashboard.metrics,
            subjects: state => state.studentDashboard.subjects,
            classRooms: state => state.studentDashboard.classRooms,
            matter: state => state.studentMatter
        }),
        formFilter () {
            return this.matter.formFilter
        },
        isGridView () {
            return this.matter.isGridView
        },
        data () {
            return this.matter.data 
        }
    },
    methods: {
        ...mapActions({
            onChangeGridView: 'studentMatter/onChangeGridView'
        }),
        changeGridView () {
            this.onChangeGridView(!this.isGridView)
        },
    },
    components: {
        Card
    }
}
</script>