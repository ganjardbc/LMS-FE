<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Daftar Murid</div>
            <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
                <div class="width width-30 display-flex">
                    <el-input placeholder="Cari murid" v-model="formFilter.search" class="subject-input-with-select">
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
import Card from './components/Card'
export default {
    data () {
        return {}
    },
    computed: {
        ...mapState({
            subject: state => state.teacherStudent
        }),
        formFilter () {
            return this.subject.formFilter
        },
        isGridView () {
            return this.subject.isGridView
        },
        data () {
            return this.subject.data 
        }
    },
    methods: {
        ...mapActions({
            onChangeGridView: 'teacherStudent/onChangeGridView'
        }),
        changeGridView () {
            this.onChangeGridView(!this.isGridView)
        },
        toCreateForm () {
            this.$router.push({name: 'class-room-matter-create'})
        }
    },
    components: {
        Card
    }
}
</script>
<style>
    .subject-input-with-select .el-select .el-input {
        width: 150px;
    }
    .subject-input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>