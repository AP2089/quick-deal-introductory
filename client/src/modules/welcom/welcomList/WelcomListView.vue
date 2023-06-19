<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'WelcomListView',
  methods: {
    ...mapActions('welcomListStore', ['fetch'])
  },
  computed: {
    ...mapState('welcomListStore', ['title', 'content'])
  },
  mounted() {
    this.fetch();
  }
}
</script>