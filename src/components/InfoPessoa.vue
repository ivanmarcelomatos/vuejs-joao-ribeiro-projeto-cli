<template>
    <div class="infoPessoa">
        <p>Componente InfoPessoa.vue</p>
        <p>{{ infonome }}  {{ infoapelido }}</p>
    </div>
</template>

<script>
    export default {
        props: [
            'infonome', 
            'infoapelido',
        ],
    }
</script>

<style scoped>
    .infoPessoa{
        border: 1px solid yellow;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>