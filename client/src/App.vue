<template>
  <div id="app">
    <Loader :isLoading="isLoading" />

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters('globalStore', ['isLoading'])
  }
}
</script>

<style lang="scss">
@import '@/styles/main';
</style>
