<template>
    <div id="App" class="display-flex left wrap">
        <div 
            v-for="(dt, i) in data" 
            :key="i" 
            :class="`${isGridView ? 'width width-row-3' : 'width width-100'}`">
            <div v-if="!isGridView" class="padding padding-top-15px padding-bottom-15px">
                <div class="card bg-white box-shadow display-flex flex-left">
                    <div 
                        class="image image-60px image-circle bg-white margin margin-right-15px"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div style="width: calc(100% - 225px);">
                        <div class="fonts fonts-11 black semibold">{{ dt.name }}</div>
                        <div class="fonts fonts-10 black normal">{{ dt.about }}</div>
                        <div class="display-flex flex-left">
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold main">{{ dt.absence }}</span> Materi</div>
                        </div>
                    </div>
                    <div class="width width-150px display-flex flex-end align-center">
                        <div class="card-capsule active margin margin-right-15px">
                            <i class="icn fonts fonts-6 green fa fa-lw fa-circle"></i> Active
                        </div>
                        <button class="btn btn-circle btn-white">
                            <i class="icn fa fa-lg fa-arrow-right"></i>
                        </button>
                        <!-- <el-popover
                            placement="bottom-end"
                            width="150"
                            trigger="click">
                            <div class="width width-100">
                                <button class="btn btn-full btn-left btn-white">
                                    <i class="icn icn-left fa fa-lg fa-align-left"></i> Detail 
                                </button>
                            </div>
                            <button 
                                slot="reference"
                                class="btn btn-circle btn-transparent">
                                <i class="icn fa fa-lg fa-ellipsis-v"></i>
                            </button>
                        </el-popover> -->
                    </div>
                </div>
            </div>
            <div v-if="isGridView" class="padding padding-15px">
                <div class="card bg-white box-shadow">
                    <div 
                        class="image image-120px image-center image-circle bg-white"
                        :style="`background-image: url(${dt.image});`"
                        ></div>
                    <div class="display-flex column align-center padding padding-top-15px">
                        <div class="fonts fonts-11 black semibold align-center margin margin-bottom-5px">{{ dt.name }}</div>
                        <div class="margin margin-bottom-10px">
                            <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold main">{{ dt.absence }}</span> Materi</div>
                        </div>
                        <button class="btn btn-full btn-sekunder">
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
    }
}
</script>