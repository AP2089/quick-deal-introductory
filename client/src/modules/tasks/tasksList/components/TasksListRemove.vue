<template>
  <Modal
    :isShow="isRemoveAlert"
    @hide="onRemoveAlert"
  >
    <p>Remove a task?</p>

    <div class="buttons-group">
      <Button
        variant="danger"
        class="btn-w-sm"
        @click.native="onRemove"
      >Yes</Button>

      <Button
        class="btn-w-sm"
        @click.native="onRemoveAlert"
      >No</Button>
    </div>
  </Modal>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TasksListRemove',
  methods: {
    ...mapActions('tasksListStore', ['onRemoveAlert', 'onRemove'])
  },
  computed: {
    ...mapState('tasksListStore', ['isRemoveAlert'])
  }
}
</script>