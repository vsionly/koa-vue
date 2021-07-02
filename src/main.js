import Vue from 'vue'
import App from './App.vue'
import './public/css/index.styl'
import router from './router'
import axios from './axios'
import mui from '@vsionly/ui'
console.log(mui, 33333)
Vue.use(mui.select)
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
