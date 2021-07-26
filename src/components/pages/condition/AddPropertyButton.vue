<template>
  <span>
    <button
      type="button"
      :class="`btn btn-sm btn-core w-150px position-relative${loading || readonly ? ' readonly' : ''}`"
      @click.stop.prevent="onOpen"
    >
      {{ buttonLabel }}
      <loading v-if="loading" />
    </button>

    <WidgetsModalPropertyInput
      :opened="opened"
      :loading="loading"

      :cancel-label="cancelLabel"
      :back-label="backLabel"
      :next-label="nextLabel"
      :submit-label="submitLabel"

      @cancel="onClose"
      @submit="onSubmit"
    />
  </span>
</template>
<script>

export default {
  props: {
    year: {
      type: Number|String,
      required: true,
    },
    month: {
      type: Number|String,
      required: true,
    },
    endpointUri: {
      type: String,
      required: true,
    },

    readonly: {
      type: Boolean,
      default: false,
    },

    buttonLabel: {
      type: String,
      default: 'Add',
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
  data() {
    return {
      opened: false,
      loading: false,
    }
  },
  methods: {
    onOpen: function() {
      if (this.readonly) {
        return
      }
      this.opened = true
    },
    onClose: function() {
      if (this.readonly) {
        return
      }
      this.opened = false
    },

    onSubmit: async function({ element, optionsLength, options }) {
      if (this.readonly) {
        return
      }
      if (!this.endpointUri) {
        return
      }
      if (this.loading) {
        return
      }

      // Set cover
      this.$store.dispatch('coverPage/setCover', {
        display: true,
        content: {
          title: '保存中',
          loading: true,
        },
      })

      this.loading = true

      const response = await this.$api.post(
        this.endpointUri,
        {
          _year: this.year,
          _month: this.month,
          element,
          optionsLength,
          options,
        }
      )
      if (response && response.data) {
        window.location.reload()
        return
      }

      alert('カテゴリの追加中にエラーが発生しました')
      this.$store.dispatch('coverPage/removeCover')

      this.loading = false
      this.opened = false
    },
  },
}
</script>
