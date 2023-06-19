<template>
  <Transition name="loader">
    <div
      class="loader"
      v-if="isLoading"
    >
      <div class="loader__icon"></div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 0;
    background-color: $color-global;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
  }

  &__icon:after {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #ffffff;
    border-right-color: $color-primary;
    animation: loader 1s infinite linear;
  }
}

@keyframes loader {
  to {
    transform: rotate(1turn);
  }
}

.loader-enter-active,
.loader-leave-active {
  &__icon {
    transform: translateY(0);
    transition: transform .5s ease 0s;
  }
}

.loader-enter,
.loader-leave-to {
  &__icon {
    transform: translateY(-100px);
  }
}
</style>