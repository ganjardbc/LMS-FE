<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Daftar Kelas</div>
            <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
                <div class="width width-30 display-flex">
                    <el-input placeholder="Cari kelas" v-model="formFilter.search" class="classroom-input-with-select">
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
            <AppTabs 
                :isScrollable="false"
                :selectedIndex.sync="activeTabs" 
                :data="tabs" 
                :onChange="(data) => onChangeTabs(data)" 
                class="width width-300px margin margin-bottom-15-px" />
            <div v-if="activeTabs === 0">
                <Card :isGridView.sync="isGridView" :data.sync="dataSMA" />
            </div>
            <div v-if="activeTabs === 1">
                <Card :isGridView.sync="isGridView" :data.sync="dataSMP" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Card from './components/Card'
import AppTabs from '../modules/AppTabs'
export default {
    data () {
        return {
            activeTabs: 0,
            tabs: [
                {label: 'SMA', status: 'active'},
                {label: 'SMP', status: ''}
            ],
        }
    },
    computed: {
        ...mapState({
            classRoom: state => state.teacherClassRoom
        }),
        formFilter () {
            return this.classRoom.formFilter
        },
        isGridView () {
            return this.classRoom.isGridView
        },
        data () {
            return this.classRoom.data 
        },
        dataSMA () {
            return this.classRoom.data.filter((e) => e.type === 'SMA')
        },
        dataSMP () {
            return this.classRoom.data.filter((e) => e.type === 'SMP')
        }
    },
    methods: {
        ...mapActions({
            onChangeGridView: 'teacherClassRoom/onChangeGridView'
        }),
        changeGridView () {
            this.onChangeGridView(!this.isGridView)
        },
        onChangeTabs (data) {
            this.activeTabs = data
        },
    },
    components: {
        AppTabs,
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