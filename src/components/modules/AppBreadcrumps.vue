<template>
    <div 
        id="App" 
        class="width width-100 display-flex align-center row">
        <button 
            v-if="goBack"
            class="btn btn-transparent" 
            style="margin-right: 5px;"
            @click="goBack">
            <i class="fa fa-lg fa-arrow-left"></i>
        </button>
        <div 
            v-for="(dt, i) in data" 
            :key="i"
            :class="`fonts fonts-12 semibold ${dt.active ? 'primary' : 'black'}`">
            <span 
                v-if="i !== 0 && i <= data.length " 
                class="margin margin-left-5px margin-right-5px fonts black">></span>{{ dt.title }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    props: {
        data: null,
        goBack: {
            type: Function 
        } 
    }
}
</script>