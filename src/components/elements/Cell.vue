<template>
  <span
    :is="component"
    :class="classForStyle"
    :disabled="disabled || readonly"
    @click="onClick"
  >
    <slot name="content">
      {{ text }}
    </slot>
    <loading v-if="loading" />
  </span>
</template>
<script>
import cellMixins from "~/mixins/cell";
export default {
  mixins: [cellMixins],
  props: {
    component: {
      type: String,
      default: "span"
    },
    text: {
      type: String | Number,
      default: ""
    },

    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },

    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classForStyle() {
      const size = this.small ? 25 : 50;
      const variant = this.readonly ? "secondary" : "light";
      const btnStyle = `bg-${variant} ${
        this.component === "a" ? "cursor-pointer decoration-none" : ""
      }`;
      const baseStyle = `d-flex align-items-center justify-content-center w-${size}px h-${size}px position-relative`;
      const disabledStyle = this.disabled ? "disabled" : "";

      return `${this.borderStyle} ${btnStyle} ${baseStyle} ${disabledStyle}`;
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.$emit("click");
    }
  }
};
</script>
