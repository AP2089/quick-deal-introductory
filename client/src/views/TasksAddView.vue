<template>
  <BaseLayout>
    <TasksAdd />
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { TasksAdd } from '@/modules/tasks';

export default {
  name: 'TaskAddView',
  components: {
    BaseLayout,
    TasksAdd
  }
}
</script>
