<template>
    <div id="App" class="padding padding-15px">
        <div class="card bg-white box-shadow">
            <div 
                class="image image-padding bg-size-contain bg-white"
                :style="`background-image: url(${data.image});`"
                ></div>
            <div class="display-flex column align-center padding padding-top-15px">
                <div class="fonts fonts-11 black semibold align-center margin margin-bottom-5px">{{ data.title }}</div>
                <div class="display-flex row center margin margin-bottom-15px">
                    <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold main">{{ data.subject }}</span> Materi Ajar</div>
                </div>
                <button class="btn btn-sekunder btn-full">
                    Kelola Mata Pelajaran
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    props: {
        data: null 
    }
}
</script>