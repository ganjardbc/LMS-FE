<template>
    <div id="app">
        <div id="header">
            <div id="header-container">
                <div id="header-main" class="display-flex space-between align-center">
                    <div class="width width-120px display-flex center align-center">
                        <router-link :to="{name: 'class-room-home'}" class="logo">
                            <img :src="logo" alt="" style="width: 100%;">
                        </router-link>
                    </div>
                    <div class="width width-100 display-flex right align-center">
                        <el-popover
                            placement="bottom-end"
                            width="250"
                            trigger="click">
                            <div class="width width-100 padding padding-top-10px">
                                <div class="display-flex column align-center padding padding-bottom-10px">
                                    <div 
                                        class="image image-circle image-80px margin margin-bottom-10px"
                                        style="text-align: center;">
                                        <i 
                                            v-if="!image"
                                            class="post-top fa fa-2x fa-user-circle" 
                                            style="color: #999;" />
                                    </div>
                                    <div class="fonts fonts-11 semibold black">Ganjar Hadiatna</div>
                                    <div class="fonts fonts-9 normal black">Guru / Pengajar</div>
                                    <div class="display-flex row center margin margin-top-20px width width-100">
                                        <div class="width width-50">
                                            <div class="fonts fonts-11 primary semibold align-center">15</div>
                                            <div class="fonts fonts-9 black normal align-center">Kelas</div>
                                        </div>
                                        <div class="width width-50">
                                            <div class="fonts fonts-11 primary semibold align-center">23</div>
                                            <div class="fonts fonts-9 black normal align-center">Mapel</div>
                                        </div>
                                        <div class="width width-50">
                                            <div class="fonts fonts-11 primary semibold align-center">77</div>
                                            <div class="fonts fonts-9 black normal align-center">Murid</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="margin margin-bottom-15px padding padding-top-15px border-bottom"></div>
                                <button class="btn btn-white btn-full btn-center" @click="logOut">
                                    <i class="fonts red icn icn-left fa fa-lg fa-power-off"></i> Logout
                                </button>
                            </div>
                            <button 
                                slot="reference"
                                class="btn btn-radius btn-sekunder margin margin-left-10px">
                                <i class="icn icn-left far fa-lg fa-user"></i> Ganjar Hadiatna  
                            </button>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
        <div id="body">
            <div class="main-screen">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import Logo from '../../../assets/img/sample-logo.png'
import AppListMenu from '../../modules/AppListMenu'
export default {
    name: 'app',
    data () {
        return {
            logo: Logo,
            image: '',
            search: '',
            visiblePopup: false,
            showBar: true,
        }
    },
    components: {
        AppListMenu
    },
    methods: {
        logOut () {
            this.$router.push('/')
        }
    }
}
</script>