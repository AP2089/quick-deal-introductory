<template>
  <nav class="main-menu">
    <ul class="main-menu__list">
      <li
        v-for="item in items"
        :key="item.id"
        class="main-menu__item"
      >
        <router-link
          :to="item.link"
          class="main-menu__link"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0 20px 0 0;
    padding: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    text-decoration: none;
    transition: color .5s ease 0s;

    &:hover,
    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>