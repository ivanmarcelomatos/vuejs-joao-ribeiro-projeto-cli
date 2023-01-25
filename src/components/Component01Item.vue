<!-- lido 01x
digitado -->

<template>
    <div>
        <p>Olá! Texto no Component 01 Item</p>
        <input type="text" v-model="nome" />
        <p>O valor inserido é: {{nome}}</p>
        <button @click="limpar">Chama limpar</button>
    </div>

</template>

<script>
export default {
    data: function() {
        return {
            nome: "",
        }
    },

    methods: {
        limpar: function() {
            this.nome = "";
        }
    },

}
</script>

<style>
*{
    color: red
}
</style>