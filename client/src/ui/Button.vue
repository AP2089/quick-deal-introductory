<template>
  <router-link
    v-if="to"
    :to="to"
    :class="classes"
  >
    <slot />
  </router-link>

  <button
    v-else
    :class="classes"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: {
      type: String
    },
    variant: {
      type: String,
      default: 'primary' // primary | warning | danger
    }
  },
  computed: {
    classes() {
      return `button button_${this.variant}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  vertical-align: middle;
  padding: 6px 12px;
  font-size: 12px;
  color: #ffffff;
  line-height: 1.2;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: color .5s ease 0s, background-color .5s ease 0s;

  &:hover {
    background-color: #ffffff;
    text-decoration: none;
  }

  &_primary {
    border-color: $color-primary;
    background-color: $color-primary;

    &:hover {
      color: $color-primary;
    }
  }

  &_warning {
    border-color: $color-warning;
    background-color: $color-warning;

    &:hover {
      color: $color-warning;
    }
  }

  &_danger {
    border-color: $color-danger;
    background-color: $color-danger;

    &:hover {
      color: $color-danger;
    }
  }
}
</style>