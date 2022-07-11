<template>
    <div id="App">
        <div class="card box-shadow bg-white">
            <div class="padding padding-15px">
                <div class="fonts fonts-14 semibold black">Materi</div>
                <div class="padding padding-top-10px padding-bottom-5px">
                    <div class="fonts fonts-11 semibold black">Cover</div>
                    <div class="image image-150px">
                        <i class="post-middle-absolute fonts fonts-22 grey fa fa-lg fa-plus"></i>
                    </div>
                    <div 
                        v-if="errorMessage.cover" 
                        class="fonts fonts-12px red">{{ errorMessage.cover }}</div>
                </div>
                <div class="padding padding-top-10px padding-bottom-5px">
                    <div class="fonts fonts-11 semibold black">Judul</div>
                    <el-input 
                        v-model="formMatter.title" 
                        placeholder=""></el-input>
                    <div 
                        v-if="errorMessage.title" 
                        class="fonts fonts-12px red">{{ errorMessage.title }}</div>
                </div>
                <div class="padding padding-top-10px padding-bottom-5px">
                    <div class="fonts fonts-11 semibold black">Deskripsi</div>
                    <el-input 
                        v-model="formMatter.description" 
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 8}"
                        placeholder=""></el-input>
                    <div 
                        v-if="errorMessage.description" 
                        class="fonts fonts-12px red">{{ errorMessage.description }}</div>
                </div>
                <div class="padding padding-top-10px padding-bottom-10px">
                    <div class="fonts fonts-11 semibold black">Jadwal Pertemuan</div>
                    <el-select 
                        v-model="formMatter.schedule" 
                        slot="prepend" 
                        class="el-select-matter-form"
                        placeholder="Jadwal pertemuan">
                        <el-option label="Pertemuan 1" value="schedule-1"></el-option>
                        <el-option label="Pertemuan 2" value="schedule-2"></el-option>
                        <el-option label="Pertemuan 3" value="schedule-3"></el-option>
                        <el-option label="Pertemuan 4" value="schedule-4"></el-option>
                    </el-select>
                    <div 
                        v-if="errorMessage.schedule" 
                        class="fonts fonts-12px red">{{ errorMessage.schedule }}</div>
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
        return {}
    },
    computed: {
        ...mapState({
            formMatter: state => state.teacherMatter.form,
            errorMessage: state => state.teacherMatter.errorMessage
        })
    }
}
</script>