<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Dashboard</div>
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
            <div class="display-flex space-between wrap padding padding-bottom-15px padding-top-15px">
                <div class="width width-49">
                    <div class="padding padding-0">
                        <div class="card bg-white box-shadow display-flex column center">
                            <div class="fonts fonts-14 semibold black">Ruang Kelas</div>
                            <div class="card-content-max padding padding-left-5px padding-right-5px">
                                <div v-for="(dt, i) in classRooms" :key="i" class="padding padding-top-15px padding-bottom-15px">
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
                    </div>
                </div>
                <div class="width width-49">
                    <div class="padding padding-0">
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
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="right-form display-flex column center">
            <div class="card bg-white display-flex column align-center">
                <div class="width width-100 padding padding-top-10px">
                    <div class="display-flex column align-center">
                        <div 
                            class="image image-circle image-150px margin margin-bottom-10px"
                            style="text-align: center;">
                            <i 
                                v-if="!image"
                                class="post-top fa fa-4x fa-user-circle" 
                                style="color: #999;" />
                        </div>
                        <div class="fonts fonts-14 semibold black">Ganjar Hadiatna</div>
                        <div class="fonts fonts-10 normal black">Murid / Siswa</div>
                    </div>
                    <div class="width width-100 padding padding-top-15px padding-bottom-20px">
                        <div class="card bg-white box-shadow display-flex space-between">
                            <div 
                                v-for="(dt, i) in dashboard" 
                                :key="i" 
                                class="width width-95 display-flex column align-center padding padding-bottom-15px">
                                <div class="width width-100 display-flex center align-center padding padding-top-15px padding-bottom-15px">
                                    <i :class="`fonts fonts-22 primary ${dt.icon}`" style="margin-right: 15px;"></i>
                                    <div class="fonts fonts-14 normal black">{{ dt.value }}</div>
                                </div>
                                <div class="fonts fonts-10 semibold black align-center">{{ dt.title }}</div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-sekunder btn-full btn-center">
                        <i class="fonts red icn icn-left fa fa-lg fa-power-off"></i> Logout
                    </button>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'app',
    data () {
        return {
            image: '',
            dashboard: [
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Jumlah Mapel', value: '23'},
                {id: 3, icon: 'fa fa-lg fa-graduation-cap', title: 'Jumlah Teman', value: '77'},
            ]
        }
    },
    computed: {
        ...mapState({
            metrics: state => state.studentDashboard.metrics,
            subjects: state => state.studentDashboard.subjects,
            classRooms: state => state.studentDashboard.classRooms 
        }),
    }
}
</script>