<template>
    <div id="app">
        <div id="header">
            <div 
                id="header-container" 
                class="display-flex space-between align-center">
                <div class="width width-100px">
                    <router-link :to="{name: 'teacher-home'}" class="logo">
                        <img :src="logo" alt="" style="width: 100%;">
                    </router-link>
                </div>
                <div class="display-flex right align-center">
                    <button class="btn btn-circle btn-white">
                        <i class="far fa-lg fa-life-ring"></i>
                    </button>
                    <el-popover
                        placement="bottom-end"
                        width="250"
                        trigger="click">
                        <div>NOTIFICATIONS</div>
                        <button slot="reference" class="btn btn-circle btn-white">
                            <i class="far fa-lg fa-bell"></i>
                        </button>
                    </el-popover>
                    <el-popover
                        placement="bottom-end"
                        width="250"
                        trigger="click">
                        <div class="width width-100 padding padding-top-10px">
                            <div class="display-flex column align-center">
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
                            </div>
                            <div class="margin margin-bottom-15px padding padding-top-15px border-bottom"></div>
                            <button class="btn btn-white btn-full btn-center">
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
        <div id="body">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
    </div>
</template>
<script>
import Logo from '../../assets/img/sample-logo.png'
export default {
    name: 'app',
    data () {
        return {
            logo: Logo,
        }
    }
}
</script>