<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Dashboard</div>
            <div class="display-flex left wrap">
                <div v-for="(dt, i) in dashboard" :key="i" class="width width-row-3">
                    <div class="padding padding-15px">
                        <div class="card bg-white box-shadow display-flex column center">
                            <div class="padding padding-15px display-flex row space-between align-center">
                                <div class="width width-70">
                                    <div class="fonts fonts-11 black normal">{{ dt.title }}</div>
                                    <div class="fonts fonts-26 primary semibold">{{ dt.value }}</div>
                                </div>
                                <div class="width width-30 display-flex right">
                                    <i :class="`fonts fonts-32 teal ${dt.icon}`"></i>
                                </div>
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
                {id: 1, icon: 'fa fa-lg fa-chalkboard-teacher', title: 'Ruang Kelas', value: '15'},
                {id: 2, icon: 'fa fa-lg fa-book-open', title: 'Mata Pelajaran', value: '23'},
                {id: 3, icon: 'fa fa-lg fa-graduation-cap', title: 'Jumlah Murid', value: '77'}
            ],
        }
    }
}
</script>