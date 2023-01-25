<!-- lido 0x
digitado -->


<template>
  <div id="app" class="container mt-3 box">
    <div class="row">
      <div class="col-12 p-4">
        <p>teste {em App2.vue} => Mecanismo para Alterar o Valor do Nome</p>
        <button @click="alterarNome">Alterar Nome</button>
        <!-- <app-detalhe v-bind:meunome="onomeoriginal"></app-detalhe> -->
        <!-- na linha de baixo tem outra forma de fazer o v-bind -->
        <app-detalhe :meunome="onomeoriginal"></app-detalhe>
      </div>
    </div>
    <br>
    <div>
      <button @click="clickNome">Nome</button>
      <button @click="clickApelido">Apelido</button>
      <app-infopessoa 
        v-bind:infonome="nome" 
        v-bind:infoapelido="apelido">
      </app-infopessoa>
      
    </div>
  </div>
</template>

<script>

  import DetalheComponent from './components/DetalheComponent.vue';
  import InfoPessoa from './components/InfoPessoa.vue';

  export default {
    name: 'App',
    components: {
      'app-detalhe': DetalheComponent,
      'app-infopessoa': InfoPessoa,
    },
    data: function() {
            return {
                onomeoriginal: "Ivan",
                nome: '',
                apelido: '',
            }
        },
    methods: {
      alterarNome() {
        this.onomeoriginal = "Carlos";
      },
      clickNome() {
        this.nome = 'Ivan em nome';
      },
      clickApelido() {
        this.apelido = 'Celinho em apelido';
      }, 
    }
  }

</script>



<style scoped>
  .box {
    border: 1px solid black;
    background-color: rgb(200, 200, 200);
  }
</style>
