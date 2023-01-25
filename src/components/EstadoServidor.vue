<!-- lido 03x
digitado -->


<template>
    <div>
       <p>Estado do Servidor: {{estado}} {informação no script do component EstadoServidor.vue}</p> 
       <button @click="ligarServidor">Ligar</button>
       <button @click="desligarServidor">Desligar</button>
    </div>
    
</template>

<script>
export default {
    data: function() {
        return {
            estado: "Ligado",
        }
    },
    methods: {
        ligarServidor: function() {
            this.estado = "Ligado"
        },
        desligarServidor: function() {
            this.estado = "Desligado"
        },
    },
}
</script>

<style>

</style>