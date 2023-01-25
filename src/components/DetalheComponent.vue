<template>
    <div class="row box1 mt-3 p-3">
        Teste {em DetalheComponent.vue}
        <p>O meu nome é: {{ meunome }}</p>
    </div>
</template>

<script>
    export default {
        props : ['meunome'],

    }

</script>

<style scoped>
    .box1 {
        border: 1px solid black;
        background-color: rgb(180, 180, 180);
    }
</style>

