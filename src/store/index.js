// src/store/index.js
import { createStore } from 'vuex';
import * as actions from './actions'
import * as mutations from './mutation'
import * as getters from './getters'
import state from './state'

const store=createStore({
    state,
    actions,
    mutations,
    getters
    // mutations: {
    //     increment(state) {
    //         state.count++;
    //     }
    // },
    // actions: {
    //     increment({ commit }) {
    //         commit('increment');
    //     },

        
    // },
    // getters: {
    //     getCount(state) {
    //         return state.count;
    //     }
    // }
});

export default store;