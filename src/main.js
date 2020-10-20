import Vue from 'vue'
import App from './App.vue'
import './assets/common.css'
import './assets/flexable.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
