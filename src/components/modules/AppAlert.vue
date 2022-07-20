<template>
    <div id="App" class="display-popup">
        <div class="post-middle-absolute card box-shadow bg-white width width-350px">
            <div class="padding padding-30px">
                <div class="display-flex column align-center">
                    <i class="fonts fonts-64 primary far fa-4x fa-check-circle"></i>
                    <div class="fonts fonts-12 semibold black margin margin-top-30px margin-bottom-30px">
                        {{ title }}
                    </div>
                    <button class="btn btn-main btn-full" @click="onClickOk">
                        Ok, Saya Mengerti
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    props: {
        title: null,
    },
    methods: {
        onClickOk() {
            this.$emit('onClickOk')
        }
    }
}
</script>