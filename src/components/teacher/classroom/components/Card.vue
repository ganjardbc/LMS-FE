<template>
    <div id="App" class="display-flex left wrap">
        <div 
            v-for="(dt, i) in data" 
            :key="i" 
            :class="`${isGridView ? 'width width-row-4' : 'width width-100'}`">
            <div v-if="!isGridView" class="padding padding-top-15px padding-bottom-15px">
                <div class="card bg-white box-shadow display-flex flex-left">
                    <div 
                        class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div style="width: calc(100% - 235px);">
                        <div class="fonts fonts-11 black semibold">{{ dt.title }}</div>
                        <div class="fonts fonts-10 black normal">{{ dt.description }}</div>
                        <div class="display-flex flex-left">
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.subject }}</span> Materi</div>
                            <div class="fonts fonts-10 normal grey margin margin-left-10px margin-right-10px">|</div>
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.student }}</span> Murid</div>
                        </div>
                    </div>
                    <div class="width width-160px display-flex flex-end align-center">
                        <div class="card-capsule active margin margin-right-15px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <router-link
                            :to="{name: 'teacher-class-detail', params: {id: 'CR-00000000001'}}" 
                            class="btn btn-sekunder">
                            Detail 
                        </router-link>
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
                        <div class="fonts fonts-11 black semibold align-center margin margin-bottom-5px">{{ dt.title }}</div>
                        <div class="fonts fonts-10 black normal margin margin-bottom-10px">{{ dt.description }}</div>
                        <div class="display-flex row center margin margin-bottom-10px">
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.subject }}</span> Materi</div>
                            <div class="fonts fonts-10 normal grey margin margin-left-10px margin-right-10px">|</div>
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.student }}</span> Murid</div>
                        </div>
                        <div class="card-capsule active margin margin-left-5px margin-top-10px float-top-left">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <router-link
                            :to="{name: 'teacher-class-detail', params: {id: 'CR-00000000001'}}" 
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
        isGridView: false,
    },
    methods: {
        toViewDetail () {
            this.$router.push({name: 'teacher-class-detail', params: {id: 'CR-00000000001'}})
        }
    }
}
</script>