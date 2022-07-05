<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Ruang Kelas</div>
            <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
                <div class="width width-40 display-flex">
                    <el-input placeholder="Cari kelas" v-model="formFilter.search" class="classroom-input-with-select">
                        <el-select v-model="formFilter.select" slot="prepend" placeholder="Jenjang">
                            <el-option label="Semua Jenjang" value="ALL"></el-option>
                            <el-option label="SMA" value="SMA"></el-option>
                            <el-option label="SMP" value="SMP"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="width width-60 display-flex right">
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
                    <button class="btn btn-main" style="margin-left: 5px;">
                        <i class="icn icn-left fa fa-lg fa-plus-circle"></i> Tambah Kelas Baru
                    </button>
                </div>
            </div>
            <Card :isGridView.sync="isGridView" :data.sync="data" />
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Card from './components/Card'
export default {
    data () {
        return {}
    },
    computed: {
        ...mapState({
            classRoom: state => state.classRoom
        }),
        formFilter () {
            return this.classRoom.formFilter
        },
        isGridView () {
            return this.classRoom.isGridView
        },
        data () {
            return this.classRoom.data 
        }
    },
    methods: {
        ...mapActions({
            onChangeGridView: 'classRoom/onChangeGridView'
        }),
        changeGridView () {
            this.onChangeGridView(!this.isGridView)
        }
    },
    components: {
        Card
    }
}
</script>
<style>
    .classroom-input-with-select .el-select .el-input {
        width: 150px;
    }
    .classroom-input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>