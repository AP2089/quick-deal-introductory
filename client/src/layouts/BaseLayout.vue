<template>
  <div class="wrap">
    <header class="header">
      <div class="center">
        <div class="header__wrap">
          <router-link to="/" class="header__logo">
            Quick deal introductory
          </router-link>
          
          <MainMenu
            :items="mainMenu"
            class="header__main-menu"
          />
        </div>
      </div>
    </header>

    <main class="middle">
      <div class="center">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <div class="center">
        &copy; Quick deal introductory, 2023.
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'BaseLayout',
  components: {
    MainMenu
  },
  methods: {
    ...mapActions('globalStore', ['getMeta'])
  },
  computed: {
    ...mapState('globalStore', ['mainMenu'])
  },
  mounted() {
    this.getMeta();
  }
}
</script>