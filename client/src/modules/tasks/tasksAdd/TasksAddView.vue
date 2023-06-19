<template>
  <form
    @submit.prevent="onSubmit"
  >
    <h1>Task add</h1>

    <div class="row">
      <Input
        placeholder="Title"
        class="input-w-md"
        :value="title"
        @input="setState(['title', $event])"
      />
    </div>

    <div class="buttons-group">
      <Button
        type="submit"
        class="btn-w-sm"
      >Save</Button>

      <Button
        to="/tasks"
        class="btn-w-sm"
        variant="warning"
      >Cancel</Button>
    </div>
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'TasksAddView',
  methods: {
    ...mapMutations('tasksAddStore', ['setState']),
    ...mapActions('tasksAddStore', ['onSubmit'])
  },
  computed: {
    ...mapState('tasksAddStore', ['title'])
  },
  destroyed() {
    this.setState(['title', '']);
  }
}
</script>