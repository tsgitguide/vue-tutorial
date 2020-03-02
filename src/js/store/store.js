import Vue from 'vue'
import Vuex from 'vuex'
import promise from 'es6-promise'
promise.polyfill();

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:'',
        is_authenticated:false,        
        is_staff: false,
        show_login_page: true
    },
    mutations:{
        SET_USERNAME (state, username) {
            state.user = username
        },
        SET_AUTH_STATE (state, auth_state) {
            state.is_authenticated = auth_state
        },
        SET_STAFF_STATE (state, staff_state) {
            state.is_staff = staff_state
        },
        SET_LOGIN_PAGE_STATE (state, login_page_state) {
            state.show_login_page = login_page_state
        },        
    },
    actions: {
        set_username: function(context, payload) {
            context.commit('SET_USERNAME', payload);
        },
        set_auth_state: function(context, payload) {
            context.commit('SET_AUTH_STATE', payload);
        },
        set_staff_state: function(context, payload) {
            context.commit('SET_STAFF_STATE', payload);
        },
        set_login_page_state: function(context, payload) {
            context.commit('SET_LOGIN_PAGE_STATE', payload);
        },        
    },
    getters: {
        user: function(state) {
            return state.user
        },        
        is_authenticated: function(state) {
            return state.is_authenticated
        }, 
        is_staff: state => {
            return state.is_staff
        },
        show_login_page: state => {
            return state.show_login_page
        },
               
    }
})