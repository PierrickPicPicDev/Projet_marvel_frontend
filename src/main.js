import Vue from 'vue'
import App from './App'
import i18n from "./plugins/i18n";
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import index from './store'

axios.defaults.baseURL = 'http://localhost:9090';

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    i18n,
    store: index,
    render: h => h(App)
}).$mount('#app')
