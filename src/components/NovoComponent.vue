<!-- lido 02x
digitado -->


<template>
    <div>
        <h1>Olá Vue! {{nome}} {{apelido}} {texto do h1 em NovoComponent.vue}</h1>
    </div>
</template>

<script>
export default {
    
    //Exemplo que retornaria erro {error  `data` property in component must be a function}
    // data: {
    //     nome: "João"
    // },

    data: function() {
        return {
            nome: "Ivan",
            apelido: "Celinho",
        }
    },
}
</script>