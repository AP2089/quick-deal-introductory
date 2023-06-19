<template>
  <input
    type="text"
    :class="classes"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    classes() {
      return `input input_${this.variant}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: block;
  padding: 6px 12px;
  font-size: 12px;
  color: #000000;
  line-height: 1.2;
  border-width: 1px;
  border-style: solid;
  text-align: left;
  text-decoration: none;
  outline: none;

  @include placeholder() {
    color: #000000;
  }

  &_primary {
    border-color: $color-primary;
    background-color: #ffffff;
  }
}
</style>