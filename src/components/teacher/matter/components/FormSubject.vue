<template>
    <div id="App">
        <div class="card box-shadow bg-white">
            <div class="padding padding-15px">
                <div class="fonts fonts-14 semibold black margin margin-bottom-10px">Mata Pelajaran</div>
                <el-input placeholder="Cari mata pelajaran" v-model="searchSubject" style="width: 100%;">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <div class="width width-100 padding padding-top-15px">
                    <div 
                        v-if="errorMessage.subjects" 
                        class="fonts fonts-12px red">{{ errorMessage.subjects }}</div>
                    
                    <div class="width width-100 card-content-max">
                        <div 
                            v-for="(dt, i) in dataSubject" 
                            :key="i"
                            class="padding padding-5px">
                            <div class="card bg-white border-full display-flex align-center">
                                <div 
                                    class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                                    :style="`background-image: url(${dt.image});`"
                                    ></div>
                                <div style="width: calc(100% - 235px);">
                                    <div class="fonts fonts-11 black semibold">{{ dt.title }}</div>
                                    <div class="fonts fonts-10 grey normal">{{ dt.description }}</div>
                                    <div class="display-flex flex-left">
                                        <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.subject }}</span> Materi Ajar</div>
                                    </div>
                                </div>
                                <div class="width width-160px display-flex flex-end align-center">
                                    <button class="btn btn-primary">
                                        Pilih Mapel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'App',
    data () {
        return {
            searchSubject: '',
        }
    },
    computed: {
        ...mapState({
            formMatter: state => state.teacherMatter.form,
            errorMessage: state => state.teacherMatter.errorMessage
        }),
        dataSubject () {
            return this.formMatter.dataSubject
        }
    }
}
</script>