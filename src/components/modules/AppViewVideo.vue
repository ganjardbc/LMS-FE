<template>
    <div id="App" class="card bg-white box-shadow padding padding-20px">
        <video-player 
            class="video-player-box"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            customEventName="customstatechangedeventname"
 
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
 
            @statechanged="playerStateChanged($event)"
            @ready="playerReadied">
  </video-player>
    </div>
</template>
<script>
import classRoomImage from '../../assets/img/classroom.jpg'
export default {
    name: 'App',
    data () {
        return {
            playerOptions: {
                // videojs options
                muted: true,
                language: 'id',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                }],
                poster: classRoomImage,
            }
        }
    },
    mounted() {
        console.log('this is current player instance object', this.player)
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {
        // listen event
        onPlayerPlay(player) {
            // console.log('player play!', player)
        },
        onPlayerPause(player) {
            // console.log('player pause!', player)
        },
        // ...player event
 
        // or listen state event
        playerStateChanged(playerCurrentState) {
            // console.log('player current update state', playerCurrentState)
        },
 
        // player is ready
        playerReadied(player) {
            console.log('the player is readied', player)
            // you can use it to do something...
            // player.[methods]
        }
    }
}
</script>
<style>
    .video-player-box .video-js {
        width: 100%;
        height: 484px;
    }
</style>