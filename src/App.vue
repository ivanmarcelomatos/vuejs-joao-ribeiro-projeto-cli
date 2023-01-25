<!-- lido 01x
digitado -->

<template>
  <div id="app" class="app">
    <!-- Ivan desabilitando o padrão -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <p>Este é o componente App.vue</p>
    <Component01Item />
    
  </div>
</template>

<script>
//Ivan desabilitando o padrão
// import HelloWorld from './components/HelloWorld.vue'


import Component01Item from './components/Component01Item.vue';

export default {
  name: 'App',
  components: {
    //Ivan desabilitando o padrão
    // HelloWorld,
    Component01Item,
  },
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: solid blue 2px;
}
</style>
