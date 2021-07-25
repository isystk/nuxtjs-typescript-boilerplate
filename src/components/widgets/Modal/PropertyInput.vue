<template>
  <Modal
    v-if="opened"
    @close="handleCanceled"
    :close-label="cancelLabel"
    lg
    headless
    footless
  >
    <template slot="body">
      <div class="p-1 position-relative text-dark">
        <StaffPropertyElementInputGroup
          :back-label="backLabel"
          :next-label="nextLabel"
          :submit-label="submitLabel"

          @cancel="handleCanceled"
          @submit="handleSubmitted"
        />

        <loading v-if="loading" />
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "@/components/widgets/Modal.vue";
import StaffPropertyElementInputGroup from "@/components/widgets/InputGroup/StaffPropertyElement.vue";

export default {
  components: {
    Modal,
    StaffPropertyElementInputGroup
  },
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },

    cancelLabel: {
      type: String,
      default: 'Close',
    },
    nextLabel: {
      type: String,
      default: 'Next',
    },
    backLabel: {
      type: String,
      default: 'Back',
    },
    submitLabel: {
      type: String,
      default: 'Create',
    },
  },
  methods: {
    handleCanceled: function() {
      this.$emit('cancel')
    },
    handleSubmitted: function(values) {
      this.$emit('submit', values)
    },
  },
}
</script>
