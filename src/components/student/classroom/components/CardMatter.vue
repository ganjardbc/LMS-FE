<template>
    <div id="App" class="display-flex left wrap">
        <div 
            v-for="(dt, i) in data" :key="i" 
            :class="`${isGridView ? 'width width-row-3' : 'width width-100'}`">
            <div v-if="!isGridView" class="padding padding-top-15px padding-bottom-15px">
                <div class="card bg-white box-shadow display-flex left">
                    <div 
                        class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div style="width: calc(100% - 225px);">
                        <div class="fonts fonts-11 black semibold">{{ dt.title }}</div>
                        <div class="fonts fonts-10 grey normal">{{ dt.description }}</div>
                        <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold main">{{ dt.views }}</span> Pengunjung</div>
                    </div>
                    <div class="width width-150px display-flex flex-end align-center">
                        <div class="card-capsule active margin margin-right-15px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <button 
                            @click="toViewDetail"
                            class="btn btn-circle btn-transparent">
                            <i class="icn fa fa-lg fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="isGridView" class="padding padding-15px">
                <div class="card bg-white box-shadow">
                    <div 
                        class="image image-padding bg-size-contain bg-white"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div class="display-flex column align-center padding padding-top-15px">
                        <div class="fonts fonts-11 black semibold align-center">{{ dt.title }}</div>
                        <div class="fonts fonts-10 grey normal margin margin-bottom-5px">{{ dt.description }}</div>
                        <div class="margin margin-bottom-10px">
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold main">{{ dt.views }}</span> Pengunjung</div>
                        </div>
                        <button class="btn btn-full btn-sekunder" @click="toViewDetail">
                            Lihat Detail 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    props: {
        data: null,
        isGridView: false
    },
    methods: {
        toViewDetail () {
            this.$router.push({name: 'student-class-matter-detail', params: {classId: 'CR-00000000001', subjectId: 'SB-00000000001', matterId: 'MT-00000000001'}})
        }
    }
}
</script>