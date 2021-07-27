<template>
  <i
    v-if="content"
    v-tooltip="{
      content,
      trigger: 'manual',
      placement,
      hideOnTargetClick: false,
      html: true,
      show: opened
    }"
    v-click-outside="onHide"
    :class="`fas fa-info-circle${warn ? ' warn' : ''}`"
    @click.prevent="onToggle"
  ></i>
</template>

<script>
const ClickOutside = require("vue-click-outside");

export default {
  directives: {
    ClickOutside
  },
  props: {
    content: String,
    placement: {
      type: String,
      default: "top"
    },
    warn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      opened: false
    };
  },
  mounted() {
    this.popupItem = this.$el;
  },
  methods: {
    onToggle(e) {
      this.opened = !this.opened;
    },
    onShow(e) {
      this.opened = true;
    },
    onHide(e) {
      this.opened = false;
    }
  }
};
</script>
