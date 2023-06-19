import Vue from 'vue';
import setState from '@/store/mutations/setState';
import axios from '@/axios';

export default {
  namespaced: true,
  state: () => ({
    url: '/home',
    title: '',
    content: '',
    isLoading: false
  }),
  mutations: {
    setState
  },
  actions: {
    async fetch({state, commit}) {
      try {
        commit('setState', ['isLoading', true]);

        const { data } = await axios.get(state.url);

        commit('setState', ['title', data.title]);
        commit('setState', ['content', data.content]);
      } catch ({message}) {
        Vue.$toast.error(message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  }
}