<template>
  <span
    :is="component"
    :class="classForStyle"
    :disabled="disabled"
    @click="onClick"
  >
    {{ name }}
  </span>
</template>
<script>
export default {
  props: {
    component: {
      type: String,
      default: "span"
    },
    name: {
      type: String | Number,
      required: true
    },

    hasError: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      opened: false
    };
  },
  computed: {
    classForStyle() {
      const blockStyle = this.block ? "d-block" : "";
      const disabledStyle = this.disabled ? "disabled" : "";
      const readonlyStyle = this.component !== "a" ? "readonly" : "";
      const erroredStyle = this.hasError ? "error blink" : "";

      return `btn-element ${blockStyle} ${disabledStyle} ${readonlyStyle} ${erroredStyle}`;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
