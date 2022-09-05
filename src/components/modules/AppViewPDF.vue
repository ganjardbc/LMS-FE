<template>
    <div 
        id="App" 
        class="card bg-white box-shadow padding padding-20px change-scrollbar"
        style="height: calc(100vh - 210px); overflow-y: auto;">
        <pdf
			v-for="i in numPages"
			:key="i"
			:src="src"
			:page="i"
			style="display: inline-block; width: 100%"
		></pdf>
        <!-- <pdf 
            :src="filePdf"
            @num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"></pdf> -->
    </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
    name: 'App',
    data () {
        return {
            src: undefined,
			numPages: undefined,
            filePdf: '/static/pdf/sample.pdf',
            currentPage: 0,
			pageCount: 0,
        }
    },
    props: {},
    components: {
        pdf,
    },
    mounted () {
        this.src = pdf.createLoadingTask(this.filePdf)
        this.src.promise.then(pdf => {
			this.numPages = pdf.numPages
		})
    },
    computed: {},
    methods: {},
}
</script>