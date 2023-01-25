<!-- lido 0x
digitado -->


<template>
  <div id="app" class="divDoApp3 mt-5">
    <p>Teste {em App3.vue}</p>
    <button @click="executar(0)" class="btn btn-primary m-1">click 0</button>
    <button @click="executar(100)" class="btn btn-primary m-1">click 100</button>
    <button @click="executar(200)" class="btn btn-primary m-1">click 200</button>
    
    <!-- component child -->
    <component-do-vue3 v-bind:meuvalor="valor"></component-do-vue3>

  </div>
</template>

<script>
  import ComponentDoVue3 from './components/ComponentDoVue3.vue';


  export default {
    name: 'App',
    data: function() {
      return {
        valor: 0,
      }
    },
    components: {
      'component-do-vue3' : ComponentDoVue3,
    },
    methods: {
      executar(value) {
        this.valor = value;
      }
    },
  }
</script>



<style scoped>
  .divDoApp3 {
    border: 1px solid blue;
    background-color: rgb(300, 300, 100);
  }
</style>
