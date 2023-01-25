// lido 03x
// digitado

import Vue from 'vue';

import App from './App.vue'
import App1 from './App1.vue'
import EstadoServidor from './components/EstadoServidor.vue';
import App2 from './App2.vue'
import App3 from './App3.vue';
import App4 from './App4.vue';
import App5 from './App5.vue';



Vue.config.productionTip = false

Vue.component('estado-servidor', EstadoServidor);

new Vue({
  render: h => h(App),
}).$mount('#app')
// }).$mount('#abc')


//exemplo renderizando uma segunda instâncias Vue
new Vue({
  render: h => h(App1),
}).$mount('#app1') 


new Vue({
  render: h => h(App2),
}).$mount('#app2') 


new Vue({
  render: h => h(App3),
}).$mount('#app3')


new Vue({ 
  render: h => h(App4),
}).$mount('#app4')


new Vue({
  render: h => h(App5),
}).$mount('#app5')



