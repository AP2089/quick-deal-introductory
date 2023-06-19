<template>
  <BaseLayout>
    <TasksEdit />
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { TasksEdit } from '@/modules/tasks';

export default {
  name: 'TaskView',
  components: {
    BaseLayout,
    TasksEdit
  }
}
</script>
