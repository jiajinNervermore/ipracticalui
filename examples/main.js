import Vue from 'vue'
import App from './App.vue'
import IUI from '../packages'
Vue.config.productionTip = false
Vue.use(IUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
