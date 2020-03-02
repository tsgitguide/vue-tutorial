import "vuetify/dist/vuetify.min.css";

import Vue from "vue"
import App from "./app.vue"
import store from './store/store.js'
import router from './router'

import promise from 'es6-promise'
promise.polyfill();

import '@babel/polyfill'
import Vuetify from "vuetify"
Vue.use(Vuetify)

Vue.config.productionTip = false

export default new Vuetify({ })

new Vue({
    el: '#app',
    store,
    vuetify: new Vuetify(),
    components: { App },
    router,
    template: '<App/>'
})