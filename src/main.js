import Vue from 'vue'
import App from './App.vue'
import router from './router' //{1}

Vue.config.productionTip = false

new Vue({
  name: 'main',
  router, //{2}
  render: h => h(App),
}).$mount('#app')
