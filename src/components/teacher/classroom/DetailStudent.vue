<template>
    <div id="App">
        <div class="fonts fonts-32 semibold black">Daftar Murid</div>
        <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
            <div class="width width-40 display-flex">
                <el-input placeholder="Cari murid" v-model="formFilter.search" class="input-with-select">
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
                <button class="btn btn-main" style="margin-left: 5px;">
                    <i class="icn icn-left fa fa-lg fa-plus-circle"></i> Tambah
                </button>
            </div>
        </div>
        <CardStudent :isGridView.sync="isGridView" :data.sync="students" />
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import CardStudent from './components/CardStudent'
export default {
    name: 'App',
    data () {
        return {}
    },
    computed: {
        ...mapState({
            detailStudent: state => state.classRoom.detail.student 
        }),
        formFilter () {
            return this.detailStudent.formFilter
        },
        isGridView () {
            return this.detailStudent.isGridView
        },
        students () {
            return this.detailStudent.data 
        }
    },
    methods: {
        ...mapActions({
            onChangeStudentGridView: 'classRoom/onChangeStudentGridView'
        }),
        changeGridView () {
            this.onChangeStudentGridView(!this.isGridView)
        }
    },
    components: {
        CardStudent
    }
}
</script>