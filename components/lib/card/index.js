import Card from './src/main.vue'

Card.install = Vue => {
  Vue.component(Card.name, Card)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Card

// export default {
//   install: (Vue) => {
//     Vue.component(Card.name, Card)
//   }
// }
