<template>
  <transition name="modal">
    <div class="modal-mask" @click.self.prevent="handleClose">
      <div
        class="modal"
        tabindex="-1"
        role="dialog"
        @click.self.stop="handleClose"
      >
        <div :class="modalClass" role="document">
          <div class="modal-content">
            <div v-if="!headless" class="modal-header">
              <h5 class="modal-title">
                <slot name="title"></slot>
              </h5>
              <button
                type="button"
                class="close"
                :disabled="suspending"
                :aria-label="closeLabel"
                :title="closeLabel"
                @click.prevent.stop="handleClose"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <slot name="body">
                Body
              </slot>
            </div>

            <div v-if="!footless" class="modal-footer">
              <slot name="footer">
                <button
                  class="btn btn-done"
                  :disabled="suspending"
                  @click.prevent.stop="handleClose"
                >
                  {{ closeLabel }}
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    suspending: {
      type: Boolean,
      default: false
    },
    closeLabel: {
      type: String,
      default: "Close"
    },
    sm: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    },
    headless: {
      type: Boolean,
      default: false
    },
    footless: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalClass() {
      let size = "";
      if (this.xl) {
        size = " modal-xl";
      } else if (this.lg) {
        size = " modal-lg";
      } else if (this.sm) {
        size = " modal-sm";
      }
      return "modal-dialog" + size;
    }
  },
  methods: {
    handleClose() {
      if (this.suspending) {
        return false;
      }
      this.$emit("close");
    }
  }
};
</script>
