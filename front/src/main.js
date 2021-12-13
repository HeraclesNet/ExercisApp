import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/styles/Global.css'
import router from './router'
import VueResizeText from 'vue-resize-text'
import { store } from './store/store'

Vue.use(VueMaterial)
Vue.use(VueResizeText)

Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
