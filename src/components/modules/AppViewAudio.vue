<template>
    <div id="App" class="card bg-white box-shadow padding padding-20px">
        <div class="fonts fonts-12 semibold align-center black margin margin-bottom-20px">
            {{ fileAudioName }}
        </div>
        <audio-player
            ref="audioPlayer"
            :audio-list="fileAudio.map(elm => elm.url)"
            :before-play="handleBeforePlay"
            theme-color="#409EFF"
        />
    </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
            fileAudioName: '',
            fileAudio: [
                {
                    name: "audio 1",
                    url: "http://www.ytmp3.cn/down/76865.mp3",
                },
                {
                    name: "audio 2",
                    url: "http://www.ytmp3.cn/down/76857.mp3",
                },
            ],
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.fileAudioName = this.fileAudio[0].name
            this.$refs.audioPlayer.play()
        });
    },
    methods: {
        handleBeforePlay (next) {
            this.fileAudioName = this.fileAudio[this.$refs.audioPlayer.currentPlayIndex].name
            next()
        }
    },
}
</script>