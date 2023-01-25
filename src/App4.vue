<template>
    <div class="divDoApp4 mt-5">
        Teste {em App4.vue}
        <p>Componente Principal</p>
        <component-child-do-app4 v-bind:valor1="nome"/>
    </div>
</template>

<script>
    import ComponentChildDoApp4 from './components/ComponentChildDoApp4.vue';

    export default {
        name: 'App',
        data: function() {
            return {
                // nome: 'João',
                nome: 100,
                // nome: 'Carlos',
            }
        },
        components: {
            'component-child-do-app4' : ComponentChildDoApp4,
        },
    }

</script>

<style>
    .divDoApp4 {
        border: solid 5px blue;
    }

</style>