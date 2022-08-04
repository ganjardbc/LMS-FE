<template>
    <div id="App" class="display-popup">
        <div class="padding padding-top-30px padding-bottom-30px">
            <div class="card box-shadow bg-white width width-900px width-center">
                <div class="display-flex space-between align-center padding padding-bottom-15px border-bottom">
                    <div class="fonts fonts-11 semibold black">
                        {{ title ? title : 'Dokumen' }}
                    </div>
                    <button class="btn btn-white" @click="onClose">
                        <i class="fa fa-lg fa-times"></i>
                    </button>
                </div>
                <div class="width width-100 padding padding-top-15px">
                    <AppViewPDF v-if="fileType === 'pdf'" />
                    <AppViewAudio v-if="fileType === 'audio'" />
                    <AppViewVideo v-if="fileType === 'video'" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppViewPDF from './AppViewPDF'
import AppViewAudio from './AppViewAudio'
import AppViewVideo from './AppViewVideo'

export default {
    name: 'App',
    data () {
        return {}
    },
    props: {
        data: null,
        title: null,
    },
    components: {
        AppViewPDF,
        AppViewAudio,
        AppViewVideo,
    },
    mounted () {
        console.log('data', this.data)
    },
    computed: {
        fileType () {
            return this.data.fileType.toLowerCase()
        }
    },
    methods: {
        onClose () {
            this.$emit('onClose')
        },
    },
}
</script>