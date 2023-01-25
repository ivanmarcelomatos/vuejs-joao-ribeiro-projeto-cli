<template>
    <div>
        <p>Component Child {em componenChildDoApp5.vue} nome: {{ meunome }}</p>
        <!-- para o botão abaixo funcionar, tem que descomentar as linhas abaixo no método alterar() -->
        <button @click="alterar()">Alterar</button>
    </div>
</template>

<script>
    export default {
        props: ['meunome'],
        methods: {
            alterar() {
                // eu comentei a linha abaixo para evitar o alerta da "gambiarra de manipular diretamente uma prop"
                // this.meunome = 'Joaquim';
                this.$emit('nomeAlterado', this.meunome)
            },
        },
    }

</script>

<style>

</style>