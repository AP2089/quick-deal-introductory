import Vue from 'vue';
import setState from '@/store/mutations/setState';
import axios from '@/axios';

export default {
  namespaced: true,
  state: () => ({
    url: '/meta',
    mainMenu: [],
    isLoading: false
  }),
  mutations: {
    setState
  },
  actions: {
    async getMeta({state, commit}) {
      try {
        commit('setState', ['isLoading', true]);

        const { data } = await axios.get(state.url);

        commit('setState', ['mainMenu', data.mainMenu]);
      } catch ({message}) {
        Vue.$toast.error(message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  },
  getters: {
    isLoading: (state, getters, rootState, rootGetters) => {
      const data = [];

      for (const key in rootState) {
        const isLoading = rootState[key].isLoading;

        if (rootState.hasOwnProperty(key) && isLoading !== undefined) {
          data.push(isLoading);
        }
      }

      return data.includes(true);
    }
  }
}