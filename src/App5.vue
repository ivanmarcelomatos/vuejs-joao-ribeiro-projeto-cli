<template>
    <div class="divDoApp5 mt-5">
        <p>Instância App5 {em App5.vue} nome = {{ nome }}</p>
        <button @click="alterar()">Alterar</button>
        <hr>
        <component-child-do-app5 v-bind:meunome="nome" @nomeAlterado="nome = $event"></component-child-do-app5>
    </div>
</template>

<script>
    import ComponentChildDoApp5 from './components/ComponentChildDoApp5.vue';
    export default {
        name: 'App',
        data: function() {
            return {
                nome: 'Fernanda',
            }
        },
        components: {
            'component-child-do-app5' : ComponentChildDoApp5,
        },
        methods: {
            alterar() {
                this.nome = 'Frederico'
            },
        },

    }
</script>


<style>
    .divDoApp5 {
        border: solid 5px red;
    }
</style>