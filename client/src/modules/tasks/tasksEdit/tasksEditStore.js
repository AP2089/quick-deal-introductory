import Vue from 'vue';
import setState from '@/store/mutations/setState';
import axios from '@/axios';
import router from '@/router';

export default {
  namespaced: true,
  state: () => ({
    id: null,
    title: '',
    url: '/tasks',
    isLoading: false
  }),
  mutations: {
    setState
  },
  actions: {
    async fetch({state, commit}) {
      try {
        commit('setState', ['isLoading', true]);
                
        const { data } = await axios.get(`${state.url}/${router.currentRoute.params.id}`);

        commit('setState', ['id', data.id]);
        commit('setState', ['title', data.title]);
      } catch ({message}) {
        Vue.$toast.error(message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    },
    async onSubmit({state, commit}) {
      try {
        commit('setState', ['isLoading', true]);
                
        await axios.patch(`${state.url}/${state.id}`, {
          title: state.title
        });

        router.push('/tasks');
        Vue.$toast.success('Task save');
      } catch ({message}) {
        Vue.$toast.error(message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  }
}