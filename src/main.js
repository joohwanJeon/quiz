import Vue from 'vue'
import App from './App.vue'

import router from './router/router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue();

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
