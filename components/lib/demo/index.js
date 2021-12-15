import Demo from './src/main.vue'

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default Demo

// export default {
//   install: (Vue) => {
//     Vue.component(Demo.name, Demo)
//   }
// }
