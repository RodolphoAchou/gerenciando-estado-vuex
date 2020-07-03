import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0
    }, 
    mutations: {
        decrement: state => state.counter --,
        increment: state => state.counter ++,
        //increment: (state, num) => state.counter = num * 2
    },
    getters: {
        counter: state => state.counter
    },
    actions: {
        //Forma de chamar a action
        //decrement: context => context.commit('decrement'),
        //increment: context => context.commit('increment')
        decrement: ({ commit }) => commit('decrement'),
        increment: ({ commit }) => commit('increment')

        //Simulando uma chamada a API
        // increment: ({ commit }) => {
        //     setTimeout(() => {
        //         commit('increment')
        //     },2000)
        // }

        //Simulando uma chamada a API - Passando retorno para vuex - State
        // increment: ({ commit }) => {
        //     setTimeout(() => {
        //         commit('increment', 5)
        //     },2000)
        // }
    }
})

export { store }