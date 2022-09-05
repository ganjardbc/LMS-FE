<template>
    <div id="App">
        <div class="card box-shadow bg-white">
            <div class="padding padding-15px">
                <div class="fonts fonts-14 semibold black margin margin-bottom-10px">Ruang Kelas</div>
                <el-input placeholder="Cari ruang kelas" v-model="searchClassRoom" style="width: 100%;">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <div class="width width-100 padding padding-top-15px">
                    <div 
                        v-if="errorMessage.classRoom" 
                        class="fonts fonts-12px red">{{ errorMessage.classRoom }}</div>                                
                    <div class="width width-100 card-content-max">
                        <div 
                            v-for="(dt, i) in dataClassRoom" 
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
                                        <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.student }}</span> Murid</div>
                                    </div>
                                </div>
                                <div class="width width-160px display-flex flex-end align-center">
                                    <button 
                                        v-if="selectedClassRoom === dt.id" 
                                        class="btn btn-primary btn-circle">
                                        <i class="fa fa-lg fa-check-circle"></i>
                                    </button>
                                    <button 
                                        v-else 
                                        class="btn btn-sekunder"
                                        @click="onSelect(dt.id)">
                                        Pilih Kelas
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
            searchClassRoom: '',
        }
    },
    computed: {
        ...mapState({
            formMatter: state => state.teacherMatter.form,
            errorMessage: state => state.teacherMatter.errorMessage,
            dataClassRoom: state => state.teacherMatter.dataClassRoom,
        }),
        selectedClassRoom () {
            return this.formMatter.classRoom 
        }
    },
    methods: {
        onSelect(value) {
            this.formMatter.classRoom = value 
        }
    }
}
</script>