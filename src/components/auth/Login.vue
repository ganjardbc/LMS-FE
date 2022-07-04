<template>
    <div id="App" class="display-popup-normal bg-white-grey">
        <div class="post-top display-flex center">
            <div 
                class="width width-800px border-radius box-shadow bg-white display-flex row" 
                style="height: 500px; overflow: hidden;">
                <div class="width width-50">
                    <div 
                        class="image image-all bg-size-contain bg-white"
                        :style="`background-image: url(${cover});`"></div>
                </div>
                <div class="width width-50 display-flex column center">
                    <div class="padding padding-30px">
                        <div class="padding padding-top-30px padding-bottom-30px display-flex center">
                            <img :src="logo" alt="SAJI-IN" style="width: 150px;">
                        </div>
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <el-input 
                                v-model="form.username" 
                                placeholder="Username"
                                @keyup.enter.native="onLogin()"></el-input>
                            <div 
                                v-if="errorMessage.username" 
                                class="fonts fonts-12px red">{{ errorMessage.username }}</div>
                        </div>
                        <div class="padding padding-top-10px padding-bottom-5px">
                            <el-input 
                                v-model="form.password" 
                                placeholder="Password" 
                                show-password
                                @keyup.enter.native="onLogin()"></el-input>
                            <div 
                                v-if="errorMessage.password"  
                                class="fonts fonts-12px red">{{ errorMessage.password }}</div>
                        </div>
                        <div 
                            v-if="authMessage" 
                            class="display-flex center padding padding-top-5px padding-bottom-5px">
                            <div class="fonts fonts-12px red">{{ authMessage }}</div>
                        </div>
                        <div class="padding padding-top-10px padding-bottom-10px">
                            <button 
                                class="btn btn-main btn-full"
                                style="margin-bottom: 15px;"
                                @click="onLogin">
                                Login <i class="icn icn-right fa fa-lg fa-sign-in-alt"></i>
                            </button>
                            <button class="btn btn-sekunder btn-full">
                                Daftar Pengguna
                            </button>
                            <!-- <el-button 
                                type="primary" 
                                style="width: 100%;"
                                @click="onLogin">LOGIN</el-button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import logo from '../../assets/img/sample-logo.png'
import cover from '../../assets/img/discussion.jpg'
import { mapState } from 'vuex'
export default {
    name: 'App',
    data () {
        return {
            logo: logo,
            cover: cover,
            authMessage: ''
        }
    },
    computed: {
        ...mapState({
            auth: state => state.auth
        }),
        form () {
            return this.auth.form
        },
        // authMessage () {
        //     return this.auth.authMessage
        // },
        errorMessage () {
            return this.auth.errorMessage
        }
    },
    methods: {
        resetErrorMessage () {
            this.authMessage = ''
            this.errorMessage.username = ''
            this.errorMessage.password = ''
        },
        onLogin () {
            this.resetErrorMessage()
            if (!this.form.username) {
                this.errorMessage.username = 'Username is required'
            }
            if (!this.form.password) {
                this.errorMessage.password = 'Password is required'
            }
            if (this.form.username && this.form.password) {
                switch (this.form.username) {
                    case 'admin':
                        this.$router.push({name: 'admin-home'})
                        break
                    case 'teacher':
                        this.$router.push({name: 'teacher-home'})
                        break
                    case 'student':
                        this.$router.push({name: 'student-home'})
                        break
                    default: 
                        this.authMessage = 'Login failed please try again.'
                        break
                }
            }
        }
    },
    mounted () {
        this.resetErrorMessage()
    }
}
</script>