<template>
  <Transition name="loader">
    <div
      class="modal"
      v-if="isShow"
    >
      <div class="modal__wrap">
        <div class="modal__content">
          <button 
            class="modal__btn-close"
            @click="$emit('hide')"
          >x</button>

          <slot />
        </div>
      </div>

      <div
        class="modal__backdrop"
        @click="$emit('hide')"
      ></div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  padding: 40px 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &__wrap {
    max-width: 400px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 20px 15px;
    position: relative;
    z-index: 1;
  }

  &__backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }

  &__btn-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid $color-danger;
    background-color: $color-danger;
    font-size: 12px;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
    transition: color .5s ease 0s, background-color .5s ease 0s;

    &:hover {
      color: $color-danger;
      background-color: #ffffff;
    }
  }
}

.loader-enter-active,
.loader-leave-active {
  opacity: 1;
  transition: opacity .5s ease 0s;
}

.loader-enter,
.loader-leave-to {
  opacity: 0;
}
</style>