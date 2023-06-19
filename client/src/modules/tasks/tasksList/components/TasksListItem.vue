<template>
  <div class="tasks-list__item">
    <div class="tasks-list__title">{{ item.title }}</div>

    <div class="tasks-list__panel">
      <Button 
        :to="`/tasks/${item.id}`"
        class="tasks-list__panel-btn"
      >Edit</Button>

      <Button
        class="tasks-list__panel-btn"
        variant="danger"
        @click.native="onRemoveAlert(item.id)"
      >Remove</Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TasksListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('tasksListStore', ['onRemoveAlert'])
  }
}
</script>

<style lang="scss" scoped>
.tasks-list {
  &__item {
    padding: 15px;
    border: 1px solid $color-extra;
    margin-bottom: 5px;

    @include media('min', $viewport-post-sm) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__title {
    font-size: 14px;
    
    @include media('max', $viewport-sm) {
      margin-bottom: 10px;
    }
  }

  &__panel {
    @include media('min', $viewport-post-sm) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 15px;
    }
  }

  &__panel-btn {
    @include media('min', $viewport-post-sm) {
      min-width: 80px;
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }
    }
    
    @include media('max', $viewport-sm) {
      display: block !important;
      width: 100%;
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>