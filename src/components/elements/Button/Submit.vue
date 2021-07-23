<template>
  <button
    type="submit"
    :name="name || 'save'"
    :class="`btn btn-${variant}`"
    @click.once="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    variant: {
      type: String,
      default: "link"
    }
  },
  methods: {
    handleClick() {
      return false;
    }
  }
};
</script>
