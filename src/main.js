import Vue from 'vue'
import store from './store'
import App from './App.vue'
import '@/plugins/vuelidate'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

window._Vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
