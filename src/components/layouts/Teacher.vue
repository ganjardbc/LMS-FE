<template>
    <div id="admin">
        <div class="sidebar show">
            <div class="header header-left">
                <div class="width width-50 display-flex center align-center">
                    <router-link :to="{name: 'teacher-home'}" class="logo">
                        <img :src="logo" alt="SAJI-IN" style="width: 100%;">
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
                    :to="{name: 'login'}" 
                    :class="`card-small-profile`" 
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
                        <el-input
                            class="main-header-search"
                            placeholder="Cari kelas atau mata pelajaran"
                            v-model="search">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    <div class="width width-70 display-flex right align-center">
                        <button class="btn btn-circle btn-white">
                            <i class="far fa-lg fa-life-ring"></i>
                        </button>
                        <el-popover
                            placement="bottom-end"
                            width="250"
                            trigger="click">
                            <div class="width width-100">
                                <div class="display-flex column align-center padding padding-top-10px padding-bottom-10px">
                                    <div 
                                        class="image image-circle image-80px margin margin-bottom-10px"
                                        style="text-align: center;">
                                        <i 
                                            v-if="!image"
                                            class="post-top fa fa-2x fa-user-circle" 
                                            style="color: #999;" />
                                    </div>
                                    <div class="fonts fonts-11 semibold black">USERNAME</div>
                                    <div class="fonts fonts-9 normal black margin margin-bottom-10px">Guru</div>
                                    <div class="display-flex row center" style="width: 100%;">
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
                                <div class="margin margin-bottom-10px padding padding-top-10px border-bottom"></div>
                                <button class="btn btn-white btn-full btn-left">
                                    <i class="fonts teal icn icn-left fa fa-lg fa-user"></i> Profil Pengguna
                                </button>
                                <button class="btn btn-white btn-full btn-left">
                                    <i class="fonts teal icn icn-left fa fa-lg fa-edit"></i> Edit Profil
                                </button>
                                <button class="btn btn-white btn-full btn-left">
                                    <i class="fonts teal icn icn-left fa fa-lg fa-cog"></i> Pengaturan
                                </button>
                                <div class="margin margin-bottom-10px padding padding-top-10px border-bottom"></div>
                                <button class="btn btn-white btn-full btn-left">
                                    <i class="fonts red icn icn-left fa fa-lg fa-power-off"></i> Logout
                                </button>
                            </div>
                            <button 
                                slot="reference"
                                class="btn btn-circle btn-white">
                                <i class="far fa-lg fa-user"></i>
                            </button>
                        </el-popover>
                        <el-popover
                            placement="bottom-end"
                            width="250"
                            trigger="click">
                            <div class="width width-100">
                                <button class="btn btn-white btn-full btn-left">
                                    <i class="fonts teal icn icn-left fa fa-lg fa-book-open"></i> Tambah Mata Pelajaran 
                                </button>
                                <button class="btn btn-white btn-full btn-left">
                                    <i class="fonts teal icn icn-left fa fa-lg fa-chalkboard-teacher"></i> Tambah Kelas Baru
                                </button>
                            </div>
                            <button 
                                slot="reference"
                                class="btn btn-main" 
                                style="margin-left: 15px;">
                                <i class="icn icn-left fa fa-lg fa-plus-circle"></i> Tambah
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
import Logo from '../../assets/img/sample-logo.png'
import AppListMenu from '../modules/AppListMenu'
export default {
    data () {
        return {
            logo: Logo,
            image: '',
            search: '',
            visiblePopup: false,
            showBar: true,
            sidebar: [
                {icon: 'fa fa-lg fa-shapes', label: 'Dashboard', value: 0, link: 'teacher-home', permission: 'dashboard'},
                {icon: 'fa fa-lg fa-book-open', label: 'Mata Pelajaran', value: 0, link: 'teacher-subject', permission: 'dashboard'},
                {icon: 'fa fa-lg fa-chalkboard-teacher', label: 'Ruang Kelas', value: 0, link: 'teacher-class', permission: 'dashboard'},
                {icon: 'fa fa-lg fa-comments', label: 'Notifikasi', value: 0, link: 'login', permission: 'dashboard'}
                // {icon: 'fa fa-lg fa-graduation-cap', label: 'Siswa Terdaftar', value: 0, link: 'login', permission: 'dashboard'},
            ]
        }
    },
    components: {
        AppListMenu
    }
}
</script>