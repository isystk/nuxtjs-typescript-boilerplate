<template>
  <WidgetsModal
    v-if="opened"
    :close-label="cancelLabel"
    lg
    headless
    footless
    @close="handleCanceled"
  >
    <template slot="body">
      <div class="p-1 position-relative text-dark">
        <WidgetsInputGroupStockPropertyElement
          :back-label="backLabel"
          :next-label="nextLabel"
          :submit-label="submitLabel"
          @cancel="handleCanceled"
          @submit="handleSubmitted"
        />

        <ElementsLoading v-if="loading" />
      </div>
    </template>
  </WidgetsModal>
</template>
<script>
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },

    cancelLabel: {
      type: String,
      default: "Close"
    },
    nextLabel: {
      type: String,
      default: "Next"
    },
    backLabel: {
      type: String,
      default: "Back"
    },
    submitLabel: {
      type: String,
      default: "Create"
    }
  },
  methods: {
    handleCanceled() {
      this.$emit("cancel");
    },
    handleSubmitted(values) {
      this.$emit("submit", values);
    }
  }
};
</script>
