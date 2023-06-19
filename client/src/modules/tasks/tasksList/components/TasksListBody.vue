<template>
  <div class="tasks-list__body">
    <div
      v-if="items.length > 0"
      class="tasks-list__items"
    >
      <TasksListItem
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>

    <p v-else>Items not found</p>

    <TasksListRemove />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TasksListItem from './TasksListItem.vue';
import TasksListRemove from './TasksListRemove.vue';

export default {
  name: 'TasksListBody',
  components: {
    TasksListItem,
    TasksListRemove
  },
  methods: {
    ...mapActions('tasksListStore', ['fetch'])
  },
  computed: {
    ...mapState('tasksListStore', ['items'])
  },
  mounted() {
    this.fetch();
  }
}
</script>