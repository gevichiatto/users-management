import Vue from 'vue'
import App from './app.vue'
import VModal from 'vue-js-modal'
import { BootstrapVue } from 'bootstrap-vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue);
Vue.use(VModal);