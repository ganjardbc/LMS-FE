<template>
    <div id="admin">
        <div class="sidebar show">
            <div class="header header-left">
                <div class="width width-80 display-flex center align-center">
                    <router-link :to="{name: 'class-room-dashboard'}" class="logo">
                        <img :src="logo" alt="" style="width: 100%;">
                    </router-link>
                </div>
            </div>
            <div class="content display-flex column center display-mobile">
                <AppListMenu 
                    :data.sync="sidebar" 
                    :showBar.sync="showBar"
                />
            </div>
            <div class="header header-right">
                <router-link
                    :to="{name: 'class-room-profile'}" 
                    :class="`card-small-profile bg-main`" 
                    style="height: 40px;">
                    <div 
                        class="image" 
                        style="text-align: center; width: 40px; height: 40px;">
                        <img 
                            v-if="image" 
                            :src="image" 
                            alt="">
                        <i 
                            v-else 
                            class="post-top fa fa-lg fa-user-circle" 
                            style="color: #999;" />
                    </div>
                </router-link>
            </div>
        </div>
        <div class="main">
            <div class="main-header">
                <div class="main-header-container display-flex space-between align-center" >
                    <div class="width width-30">
                        <el-popover
                            placement="bottom-start"
                            width="250"
                            trigger="click">
                            <div class="width width-100 padding padding-top-10px">
                                <div class="display-flex column align-center padding padding-bottom-10px">
                                    <div 
                                        class="image image-80px margin margin-bottom-10px"
                                        style="text-align: center;">
                                        <i 
                                            v-if="!image"
                                            class="post-top fa fa-2x fa-user-circle" 
                                            style="color: #999;" />
                                    </div>
                                    <div class="fonts fonts-11 semibold black">Kelas 3.A</div>
                                    <div class="fonts fonts-9 normal black">SMA, Angkatan 2020</div>
                                    <div class="display-flex row center margin margin-top-20px" style="width: 100%;">
                                        <div class="width width-33">
                                            <div class="fonts fonts-11 primary semibold align-center">15</div>
                                            <div class="fonts fonts-9 black normal align-center">Materi</div>
                                        </div>
                                        <div class="width width-33">
                                            <div class="fonts fonts-11 primary semibold align-center">20</div>
                                            <div class="fonts fonts-9 black normal align-center">Murid</div>
                                        </div>
                                        <div class="width width-33">
                                            <div class="fonts fonts-11 primary semibold align-center">23</div>
                                            <div class="fonts fonts-9 black normal align-center">Guru</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button 
                                slot="reference"
                                class="btn btn-radius btn-sekunder margin margin-left-10px">
                                <i class="icn icn-left fa fa-lg fa-chevron-down"></i> {{ classId }}
                            </button>
                        </el-popover>
                    </div>
                    <div class="width width-70 display-flex right align-center">
                        <router-link 
                            :to="{name: 'class-room-home'}"
                            class="btn btn-circle btn-white">
                            <i class="fa fa-lg fa-home"></i>
                        </router-link>
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
            <div class="main-content">
                <div class="main-content-smalls">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from '../../../assets/img/sample-logo.png'
import AppListMenu from '../../modules/AppListMenu'
export default {
    data () {
        return {
            logo: Logo,
            image: '',
            search: '',
            visiblePopup: false,
            showBar: true,
            metrics: [
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Jumlah Materi', value: '23'},
                {id: 3, icon: 'fa fa-lg fa-graduation-cap', title: 'Jumlah Kelas', value: '77'}
            ],
            sidebar: [
                {icon: 'fa fa-lg fa-shapes', label: 'Dashboard', value: 0, link: 'class-room-dashboard', permission: 'dashboard'},
                {icon: 'fa fa-lg fa-book-open', label: 'Materi Ajar', value: 0, link: 'class-room-matter', permission: 'dashboard'},
                {icon: 'fa fa-lg fa-graduation-cap', label: 'Daftar Murid', value: 0, link: 'class-room-student', permission: 'dashboard'},
            ]
        }
    },
    components: {
        AppListMenu
    },
    computed: {
        classId () {
            return this.$route.params.id
        }
    },
    methods: {
        logOut () {
            this.$router.push('/')
        }
    }
}
</script>