import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './routes'
import { createResource } from './resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

//vue resource
createResource()

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
