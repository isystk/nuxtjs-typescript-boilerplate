export default {
  props: {
    border: {
      type: Boolean,
      default: true
    },
    borderTop: {
      type: Boolean,
      default: false
    },
    borderBottom: {
      type: Boolean,
      default: false
    },
    borderLeft: {
      type: Boolean,
      default: false
    },
    borderRight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    borderStyle() {
      const classes = [];
      if (this.borderTop) {
        classes.push("border-top");
      }
      if (this.borderBottom) {
        classes.push("border-bottom");
      }
      if (this.borderLeft) {
        classes.push("border-left");
      }
      if (this.borderRight) {
        classes.push("border-right");
      }
      if (classes.length > 0) {
        return classes.join(" ");
      }

      return this.border ? "border" : "";
    }
  }
};
