<template>
    <div id="App" class="display-flex left wrap">
        <div 
            v-for="(dt, i) in data" 
            :key="i"
            :class="`${isGridView ? 'width width-row-3' : 'width width-100'}`">
            <div v-if="!isGridView" class="padding padding-top-15px padding-bottom-15px">
                <div class="card bg-white box-shadow display-flex align-center">
                    <div 
                        class="image image-60px bg-size-contain bg-white margin margin-right-15px"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div style="width: calc(100% - 235px);">
                        <div class="fonts fonts-11 black semibold">{{ dt.title }}</div>
                        <div class="display-flex flex-left">
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold primary">{{ dt.subject }}</span> Materi Ajar</div>
                        </div>
                    </div>
                    <div class="width width-160px display-flex flex-end align-center">
                        <div class="card-capsule active margin margin-right-15px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <button 
                            class="btn btn-sekunder"
                            @click="toViewDetail">
                            Kelola
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="isGridView" class="padding padding-15px">
                <div class="card bg-white box-shadow">
                    <div 
                        class="image image-half-padding bg-size-contain bg-white"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div class="display-flex column align-center padding padding-top-15px">
                        <div class="fonts fonts-11 black semibold align-center margin margin-bottom-5px">{{ dt.title }}</div>
                        <div class="display-flex row center margin margin-bottom-10px">
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold main">{{ dt.subject }}</span> Materi Ajar</div>
                        </div>
                        <div class="card-capsule active margin margin-bottom-15px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <button 
                            class="btn btn-sekunder btn-full"
                            @click="toViewDetail">
                            Kelola Mata Pelajaran
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
            this.$router.push({name: 'teacher-matter-detail', params: {id: 'SB-00000000001'}})
        }
    }
}
</script>