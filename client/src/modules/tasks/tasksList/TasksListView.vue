<template>
  <div class="tasks-list">
    <TasksListHead />
    <TasksListBody />
  </div>
</template>

<script>
import TasksListHead from './components/TasksListHead.vue';
import TasksListBody from './components/TasksListBody.vue';

export default {
  name: 'TasksListView',
  components: {
    TasksListHead,
    TasksListBody
  }
}
</script>