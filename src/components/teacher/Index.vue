<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Dashboard</div>
            <div class="display-flex left wrap">
                <div 
                    v-for="(dt, i) in dashboard" 
                    :key="i"
                    class="width width-row-3">
                    <div class="padding padding-15px">
                        <div class="card bg-white box-shadow display-flex column align-center center" style="height: 180px;">
                            <div class="width width-100">
                                <div class="fonts fonts-32 primary semibold align-center margin margin-bottom-5px">{{ dt.value }}</div>
                                <div class="fonts fonts-11 black normal align-center">{{ dt.title }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dashboard: [
                {id: 1, title: 'Ruang Kelas', value: '15'},
                {id: 2, title: 'Mata Pelajaran', value: '23'},
                {id: 3, title: 'Siswa Terdaftar', value: '77'}
            ],
        }
    }
}
</script>