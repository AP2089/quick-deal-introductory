<template>
  <BaseLayout>
    <TasksList />
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { TasksList } from '@/modules/tasks';

export default {
  name: 'TasksListView',
  components: {
    BaseLayout,
    TasksList
  }
}
</script>
