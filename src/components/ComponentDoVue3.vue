<template>
    <div class="alert alert-info componentdovue3">
        <p>{{ analisar() }}</p>

    </div>
</template>

<script>
    export default {
        props: [
            'meuvalor'
        ],
        methods: {
            analisar() {
                if(this.meuvalor < 100) {
                    return 'menor que 100.'
                } else if(this.meuvalor == 100) {
                    return 'igual a 100!'
                } else {
                    return 'maior que 100.'
                }
            },
        },
    };

</script>

<style scoped>
    .componentdovue3 {
        margin-top: 30px;
    }

</style>