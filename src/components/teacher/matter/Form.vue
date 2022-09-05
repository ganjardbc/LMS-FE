<template>
    <div id="App">
        <div class="width width-800px width-center">
            <div class="width width-100">
                <AppBreadcrumps :data.sync="breadcrumps" :goBack="goBack" />
            </div>
            <div class="width width-100 padding padding-top-30px">
                <el-steps :active="activeIndex" finish-status="success" align-center>
                    <el-step>
                        <div slot="title" style="font-size: 13px;">Ruang Kelas</div>
                    </el-step>
                    <el-step>
                        <div slot="title" style="font-size: 13px;">Mata Pelajaran</div>
                    </el-step>
                    <el-step>
                        <div slot="title" style="font-size: 13px;">Materi</div>
                    </el-step>
                    <el-step>
                        <div slot="title" style="font-size: 13px;">Dokumen</div>
                    </el-step>
                </el-steps>
            </div>
            <div class="display-flex space-between padding padding-top-30px padding-bottom-15px">
                <div class="width width-100">
                    <FormClassRoom v-if="activeIndex === 0" />
                    <FormSubject v-if="activeIndex === 1" />
                    <FormInformation v-if="activeIndex === 2" />
                    <FormDocument v-if="activeIndex === 3" />
                    <FormReview v-if="activeIndex === 4" />
                </div>
            </div>
        </div>

        <div class="main-footer">
            <div class="main-footer-container">
                <div class="width width-800px width-center bg-white box-shadow border-radius">
                    <div class="padding padding-left-15px padding-right-15px display-flex row align-center flex-end" style="height: 60px;">
                        <button 
                            v-if="activeIndex === 0" 
                            class="btn btn-grey" 
                            @click="goBack">
                            Batalkan
                        </button>
                        <button 
                            v-if="activeIndex > 0" 
                            class="btn btn-grey" 
                            @click="goPrev">
                            Kembali 
                        </button>
                        <button 
                            v-if="activeIndex < totalStep" 
                            class="btn btn-main margin margin-left-10px" 
                            @click="goNext">
                            Selanjutnya
                        </button>
                        <button 
                            v-if="activeIndex === totalStep" 
                            class="btn btn-main margin margin-left-10px"
                            @click="onSubmit">
                            Upload Materi Ajar 
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <AppConfirmed 
            v-if="visibleAnswer"
            title="Upload Materi Ajar ?"
            @onClickNo="onClickNo"
            @onClickYes="onClickYes"
        />

        <AppAlert 
            v-if="visiblePopup"
            title="Materi Ajar Berhasil Di-upload !"
            @onClickOk="onClickOk"
        />

        <AppPopupLoader 
            v-if="viisbleLoader"
            title="Mohon Tunggu ..."
        />

    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import AppBreadcrumps from '../../modules/AppBreadcrumps'
import AppConfirmed from '../../modules/AppConfirmed'
import AppAlert from '../../modules/AppAlert'
import AppPopupLoader from '../../modules/AppPopupLoader'
import FormClassRoom from './components/FormClassRoom'
import FormSubject from './components/FormSubject'
import FormInformation from './components/FormInformation'
import FormDocument from './components/FormDocument'
import FormReview from './components/FormReview'

export default {
    name: 'App',
    data () {
        return {
            visibleAnswer: false,
            visiblePopup: false,
            viisbleLoader: false,
            totalStep: 4,
        }
    },
    mounted () {
        console.log('formMatter',  this.formMatter)
    },
    components: {
        AppBreadcrumps,
        AppConfirmed,
        AppAlert,
        AppPopupLoader,
        FormClassRoom,
        FormSubject,
        FormInformation,
        FormDocument,
        FormReview,
    },
    methods: {
        ...mapActions({
            onFormActiveIndex: 'teacherMatter/onFormActiveIndex'
        }),
        goBack () {
            this.$router.back()
        },
        goPrev () {
            const index = this.activeIndex !== 0 ? this.activeIndex - 1 : 0
            this.onFormActiveIndex(index)
        },
        goNext () {
            const index = this.activeIndex + 1
            this.onFormActiveIndex(index)
        },
        onSubmit () {
            this.visibleAnswer = true
        },
        onClickOk () {
            this.visiblePopup = false
            this.onFormActiveIndex(0)
            this.goBack()
        },
        onClickNo () {
            this.visibleAnswer = false 
        },
        onClickYes () {
            this.visibleAnswer = false 
            this.viisbleLoader = true 
            setTimeout(() => {
                this.viisbleLoader = false 
                this.visiblePopup = true 
            }, 1500);
        },
    },
    computed: {
        ...mapState({
            formMatter: state => state.teacherMatter.form
        }),
        breadcrumps () {
            return [
                {title: 'Materi Ajar', active: false},
                {title: 'Buat Baru', active: true}
            ]
        },
        activeIndex () {
            return this.formMatter.activeIndex
        },
    }
}
</script>
<style>
.el-select-matter-form.el-select {
    width: 100%;
}
.el-select-matter-form.el-select .el-input {
    width: 100%;
}
</style>