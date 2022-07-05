<template>
    <div id="App">
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
                <button class="btn btn-main" style="margin-left: 5px;">
                    <i class="icn icn-left fa fa-lg fa-plus-circle"></i> Tambah
                </button>
            </div>
        </div>
        <CardMatter :isGridView.sync="isGridView" :data.sync="data" />
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import CardMatter from '../../modules/CardMatter'
export default {
    name: 'App',
    data () {
        return {}
    },
    computed: {
        ...mapState({
            detailSubject: state => state.classRoom.detail.subject
        }),
        formFilter () {
            return this.detailSubject.formFilter
        },
        isGridView () {
            return this.detailSubject.isGridView
        },
        data () {
            return this.detailSubject.data 
        }
    },
    methods: {
        ...mapActions({
            onChangeSubjectGridView: 'classRoom/onChangeSubjectGridView'
        }),
        changeGridView () {
            this.onChangeSubjectGridView(!this.isGridView)
        }
    },
    components: {
        CardMatter
    }
}
</script>