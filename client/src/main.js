import Vue from 'vue'
import Toast from 'vue-toastification'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from './ui'
import 'vue-toastification/dist/index.css'

Vue.config.productionTip = false

ui.forEach(component => {
  Vue.component(component.name, component)
})

Vue.use(Toast, {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')