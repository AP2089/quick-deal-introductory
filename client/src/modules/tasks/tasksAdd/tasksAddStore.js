import Vue from 'vue';
import setState from '@/store/mutations/setState';
import axios from '@/axios';
import router from '@/router';

export default {
  namespaced: true,
  state: () => ({
    title: '',
    url: '/tasks',
    isLoading: false
  }),
  mutations: {
    setState
  },
  actions: {
    async onSubmit({state, commit}) {
      try {
        commit('setState', ['isLoading', true]);
                
        await axios.post(state.url, {
          title: state.title
        });

        router.push('/tasks');
        Vue.$toast.success('Task add');
      } catch ({message}) {
        Vue.$toast.error(message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  }
}