<template>
  <div class="tasks-list__head">
    <h1 class="tasks-list__head-title">Tasks</h1>

    <Button
      to="/task-add"
      class="tasks-list__head-btn"
    >Add task</Button>
  </div>
</template>

<script>
export default {
  name: 'TasksListHead'
}
</script>

<style lang="scss" scoped>
.tasks-list {
  &__head {
    margin-bottom: 15px;

    @include media('min', $viewport-post-sm) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__head-title {
    @include media('min', $viewport-post-sm) {
      margin-bottom: 0;
    }
    
    @include media('max', $viewport-sm) {
      margin-bottom: 10px;
    }
  }

  &__head-btn {
    @include media('min', $viewport-post-sm) {
      min-width: 100px;
      margin-left: 15px;
    }
    
    @include media('max', $viewport-sm) {
      display: block !important;
      width: 100%;
    }
  }
}
</style>