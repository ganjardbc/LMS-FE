<template>
    <div id="App">
        <div class="card box-shadow bg-white">
            <div class="padding padding-15px">
                <div class="fonts fonts-14 semibold black">Dokumen</div>

                <div v-for="(dt, i) in formContent" :key="i" class="width width-100">
                    <div class="padding padding-top-10px padding-bottom-5px">
                        <div class="fonts fonts-11 semibold black">File</div>
                        <div class="image image-150px">
                            <i class="post-middle-absolute fonts fonts-22 grey fa fa-lg fa-plus"></i>
                        </div>
                        <div 
                            v-if="errorMessage.files" 
                            class="fonts fonts-12px red">{{ errorMessage.files }}</div>
                    </div>
                    <div class="padding padding-top-10px padding-bottom-10px">
                        <div class="fonts fonts-11 semibold black">Tipe File</div>
                        <el-select 
                            v-model="dt.fileType" 
                            slot="prepend" 
                            class="el-select-matter-form"
                            placeholder="">
                            <el-option label="Video" value="video"></el-option>
                            <el-option label="Audio" value="audio"></el-option>
                            <el-option label="PDF" value="PDF"></el-option>
                        </el-select>
                        <div 
                            v-if="errorMessage.fileType" 
                            class="fonts fonts-12px red">{{ errorMessage.fileType }}</div>
                    </div>
                    <div class="padding padding-top-10px padding-bottom-5px">
                        <div class="fonts fonts-11 semibold black">Deskripsi</div>
                        <el-input 
                            v-model="dt.description" 
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 8}"
                            placeholder=""></el-input>
                        <div 
                            v-if="errorMessage.description" 
                            class="fonts fonts-12px red">{{ errorMessage.description }}</div>
                    </div>
                    <div class="width width-100 border-bottom-dashed margin margin-top-15px margin-bottom-15px"></div>
                </div>

                <div class="padding padding-top-5px">
                    <button class="btn btn-sekunder btn-full" @click="onAddFormContent">
                        <i class="icn icn-left fa fa-lg fa-plus-circle"></i> Tambah Dokumen  
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'App',
    data () {
        return {}
    },
    computed: {
        ...mapState({
            formMatter: state => state.teacherMatter.form,
            errorMessage: state => state.teacherMatter.errorMessage
        }),
        formContent () {
            return this.formMatter.contents 
        }
    },
    methods: {
        ...mapActions({
            onAddFormContent: 'teacherMatter/onAddFormContent'
        })
    }
}
</script>