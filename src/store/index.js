import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 150,
  },
  mutations: {
    aumentar(state, payload) {
      state.contador = state.contador + payload;
    },

    diminuir(state, payload) {
      state.contador = state.contador - payload;
    },
  },
  actions: {
    acaoAumentar({ commit }) {
      commit("aumentar", 10);
    },

    acaoDiminuir({ commit }, numero) {
      commit("diminuir", numero);
    },

    acaoBotao({ commit }, objeto) {
      if (objeto.estado) {
        commit("aumentar", objeto.numero);
      } else {
        commit("diminuir", objeto.numero);
      }
    },
  },
  modules: {},
});
