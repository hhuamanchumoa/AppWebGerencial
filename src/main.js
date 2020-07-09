// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// App
import App from './App'
// Vue Router
import {router} from './router'

// Element Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/es'
import HighchartsVue from 'highcharts-vue'

// Vuex: for services, shared components, etc
import store from './store/index'

// // Our Style
// import '../static/style.css'

// Vue Validation
Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
Vue.use(HighchartsVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
