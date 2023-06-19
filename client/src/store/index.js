import Vue from 'vue';
import Vuex from 'vuex';
import globalStore from '@/store/globalStore';
import { welcomListStore } from '@/modules/welcom';
import { tasksListStore, tasksAddStore, tasksEditStore } from '@/modules/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globalStore,
    welcomListStore,
    tasksListStore,
    tasksAddStore,
    tasksEditStore
  }
});
