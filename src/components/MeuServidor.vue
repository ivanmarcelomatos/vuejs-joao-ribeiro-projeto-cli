


<template>
    <div>
        <h5>Dados do Servidor {em MeuServidor.vue}</h5>
        <estado-servidor></estado-servidor>
        <temperatura-servidor></temperatura-servidor>

    </div>
</template>

<script>
    import EstadoServidor from './EstadoServidor.vue';
    import TemperaturaServidor from './TemperaturaServidor';


    export default {
        components: {
            'estado-servidor': EstadoServidor,
            'temperatura-servidor': TemperaturaServidor,
        }

    }
</script>