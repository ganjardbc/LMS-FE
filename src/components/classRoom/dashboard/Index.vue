<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Dashboard</div>
            <div class="display-flexs space-between wrap padding padding-bottom-15px padding-top-15px">
                <div class="width width-100 padding padding-bottom-15px padding-top-15px">
                    <div class="card bg-white box-shadow">
                        <div class="display-flex align-center">
                            <div class="width width-250px width-center">
                                <div 
                                    class="image image-padding bg-size-contain bg-white-grey"
                                    :style="`background-image: url(${cover});`"></div>
                            </div>
                            <div class="width width-100">
                                <div class="padding padding-top-10px padding-left-30px">
                                    <div class="fonts fonts-16 semibold black">Kelas 3.A</div>
                                    <div class="width width-100 padding padding-top-10px display-flex align-left">
                                        <div class="width width-50">
                                            <div 
                                                v-for="(dt, i) in info" :key="i" 
                                                class="display-flex row align-center center padding padding-bottom-10px">
                                                <div class="width width-150px align-center">
                                                    <div class="fonts fonts-11 semibold black">{{ dt.key }}</div>
                                                </div>
                                                <div class="width width-100">
                                                    <div class="fonts fonts-11 normal black">: {{ dt.value }}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="display-flex row align-center center padding padding-bottom-10px">
                                            <div class="width width-150px align-center">
                                                <div class="fonts fonts-11 semibold black">Status</div>
                                            </div>
                                            <div class="width width-100">
                                                <div class="display-flex">
                                                    <span class="margin margin-right-5px">:</span>
                                                    <div class="card-capsule active">
                                                        <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="width width-100">
                    <div class="display-flex space-between wrap padding padding-bottom-15px padding-top-15px">
                        <div v-for="(dt, i) in metrics" :key="i" class="width width-32">
                            <div class="card bg-white box-shadow display-flex column center">
                                <div class="padding padding-5px display-flex row space-between align-center">
                                    <div class="width width-70">
                                        <div class="fonts fonts-10 black normal">{{ dt.title }}</div>
                                        <div class="fonts fonts-22 primary semibold">{{ dt.value }}</div>
                                    </div>
                                    <div class="width width-30 display-flex right">
                                        <i :class="`fonts fonts-32 teal ${dt.icon}`"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="padding padding-top-10px">
                        <div class="card bg-white box-shadow display-flex column center">
                            <div class="fonts fonts-14 semibold black">Mata Pelajaran</div>
                            <div class="card-content-max padding padding-left-5px padding-right-5px">
                                <div v-for="(dt, i) in subjects" :key="i" class="padding padding-top-15px padding-bottom-15px">
                                    <div class="card bg-white border-full display-flex align-center">
                                        <div 
                                            class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                                            :style="`background-image: url(${dt.image});`"
                                            ></div>
                                        <div style="width: calc(100% - 175px);">
                                            <div class="fonts fonts-11 black semibold">{{ dt.title }}</div>
                                            <div class="display-flex flex-left">
                                                <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.subject }}</span> Materi Ajar</div>
                                            </div>
                                        </div>
                                        <div class="width width-100px display-flex flex-end align-center">
                                            <div class="card-capsule active margin margin-right-15px">
                                                <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import classRoomImage from '../../../assets/img/classroom-3.jpeg'

export default {
    data () {
        return {
            cover: classRoomImage,
            info: [
                {icon: 'fa fa-lg fa-user', key: 'Wali', value: 'Ganjar Hadiatna'},
                {icon: 'fa fa-lg fa-user', key: 'Sekolah', value: 'Santi Asromo'},
                {icon: 'fa fa-lg fa-user', key: 'Jenjang', value: 'SMA'},
                {icon: 'fa fa-lg fa-user', key: 'Tahun Ajar', value: '2021/2022'},
            ],
        }
    },
    mounted () {
        console.log('classRoom', this.classRoom)
    },
    computed: {
        ...mapState({
            metrics: state => state.teacherDashboard.metrics,
            subjects: state => state.teacherDashboard.subjects,
            classRooms: state => state.teacherDashboard.classRooms 
        }),
    }
}
</script>