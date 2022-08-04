<template>
    <div id="App" class="card bg-white box-shadow padding padding-20px">
        <pdf :src="filePdf"></pdf>
    </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
    name: 'App',
    data () {
        return {
            // filePdf: 'https://undangabi.com/docs/sample-file.pdf',
            filePdf: './src/assets/docs/sample-file.pdf',
        }
    },
    props: {},
    components: {
        pdf,
    },
    mounted () {},
    computed: {},
    methods: {},
}
</script>