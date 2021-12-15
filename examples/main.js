import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import '../components/css/zm-card.scss'

// import Demo from '../components/lib/demo/examples/main'
// Vue.component('Demo', Demo)
// import Demo from '../components/lib/demo/index'
// Vue.use(Demo)

// import Card from '../components/lib/card/index'
// Vue.use(Card)

// import * as tt from '../dist/index.umd.js';
// import Demo  from '../dist/demo.umd.js';
// console.log(tt)
// Vue.use(tt)

import {Demo, Card} from '../dist/index.umd'
Vue.use(Demo)
Vue.use(Card)

// console.log(12, zmui)
// console.log(23, ELEMENT)
// import '../dist/index.umd'
// Vue.use(mui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
