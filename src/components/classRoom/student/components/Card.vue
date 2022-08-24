<template>
    <div id="App" class="display-flex left wrap">
        <div 
            v-for="(dt, i) in data" 
            :key="i"
            :class="`${isGridView ? 'width width-row-4' : 'width width-100'}`">
            <div v-if="!isGridView" class="padding padding-top-15px padding-bottom-15px">
                <div class="card bg-white box-shadow display-flex align-center">
                    <div 
                        class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div style="width: calc(100% - 235px);">
                        <div class="fonts fonts-11 black semibold">{{ dt.name }}</div>
                        <div class="fonts fonts-10 grey normal">{{ dt.about }}</div>
                    </div>
                    <div class="width width-160px display-flex flex-end align-center">
                        <div class="card-capsule active margin margin-right-15px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <button 
                            class="btn btn-circle btn-transparent"
                            @click="toViewDetail">
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
                        <div class="fonts fonts-11 black semibold align-center">{{ dt.name }}</div>
                        <div class="fonts fonts-10 grey normal margin margin-bottom-10px">{{ dt.about }}</div>
                        <div class="card-capsule active margin margin-left-5px margin-top-10px float-top-left">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <router-link
                            :to="{name: 'class-room-student-detail', params: {idStudent: 'ST-00000000001'}}" 
                            class="btn btn-sekunder btn-full-padding">
                            Lihat Detail
                        </router-link>
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
            this.$router.push({name: 'class-room-student-detail', params: {idStudent: 'ST-00000000001'}})
        }
    }
}
</script>