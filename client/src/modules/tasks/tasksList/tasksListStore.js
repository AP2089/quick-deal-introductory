import Vue from 'vue';
import setState from '@/store/mutations/setState';
import axios from '@/axios';

export default {
  namespaced: true,
  state: () => ({
    url: '/tasks',
    items: [],
    isLoading: false,
    isRemoveAlert: false,
    id: null
  }),
  mutations: {
    setState,
    setRemoveAlert(state, payload) {
      if (typeof payload === 'number') {
        state.isRemoveAlert = true;
        state.id = payload;
      } else {
        state.isRemoveAlert = false;
        state.id = null;
      }
    }
  },
  actions: {
    async fetch({state, commit}, cb = () => {}) {
      try {
        commit('setState', ['isLoading', true]);

        const { data } = await axios.get(state.url);

        commit('setState', ['items', data]);
        cb();
      } catch ({message}) {
        Vue.$toast.error(message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    },
    onRemoveAlert({commit}, payload) {
      commit('setRemoveAlert', payload);
    },
    async onRemove({state, commit, dispatch}) {
      try {
        commit('setState', ['isLoading', true]);

        await axios.delete(`${state.url}/${state.id}`);
        
        dispatch('fetch', () => {
          commit('setRemoveAlert');
          Vue.$toast.success('Task deleted');
        });
      } catch ({message}) {
        Vue.$toast.error(message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  }
}