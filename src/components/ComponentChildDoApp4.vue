<template>
    <div class="divDoComponentChildDoApp4">
        <p>Component Child</p>
        <p>{{ valor1 }}</p>

    </div>
</template>

<script>
    export default {
        // propriedade exposta props
        // props: ['valor1'],

        // props validation => a gente defini como objeto
        props: {
            'valor1' : {
                // type: String,
                // type: [String, Array],
                type: [String, Array, Number],
                // required: true,
                default: 'João Ribeiro',

            },
        },
    }
</script>

<style scoped>
    .divDoComponentChildDoApp4 {
        border: solid 2px green;
    }
</style>


