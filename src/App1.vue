<!-- lido 02x
digitado -->


<template>
  <div id="app" class="app1">
    <!-- Ivan desabilitando o padrão -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <p>Este é o componente App1.vue</p>
    <NovoComponent />
    <br>
    <h3>ESTADO DOS SERVIDORES: {texto em App1.vue}</h3>
    <hr>
    <estado-servidor></estado-servidor>
    <estado-servidor></estado-servidor>
    <estado-servidor></estado-servidor>
    <estado-servidor></estado-servidor>
    <estado-servidor></estado-servidor>
    <hr>
    <div class="alert alert-success text-center p-3">Mensagem</div>
    <hr>
    <app-servidor></app-servidor>
    <app-servidorr></app-servidorr>
    <hr>
    <!-- <servidor-dados></servidor-dados> -->
    <!-- outra forma da linha imediatamente acima -->
    <ServidorDados></ServidorDados>
    <hr>
    <my-comp1></my-comp1>
    <my-comp2></my-comp2>
  </div>
</template>

<script>
//Ivan desabilitando o padrão
// import HelloWorld from './components/HelloWorld.vue'

import NovoComponent from './components/NovoComponent.vue';
import ComponentLocal from './components/ComponentLocal.vue';
import MeuServidor from './components/MeuServidor.vue';
import ServidorDados from './components/servidor/ServidorDados.vue';
import MyComp1 from './components/MyComp1.vue';
import MyComp2 from './components/MyComp2.vue';


export default {
  name: 'App',
  components: {
    //Ivan desabilitando o padrão
    // HelloWorld,
    NovoComponent,
    'app-servidor': ComponentLocal,
    'app-servidorr' : MeuServidor,
    // 'servidor-dados': ServidorDados,
    //outra forma da linha imediatamente acima
    ServidorDados,
    'my-comp1' : MyComp1,
    'my-comp2' : MyComp2,
}
}
</script>



<style>
.app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: solid green 2px;
}
</style>
