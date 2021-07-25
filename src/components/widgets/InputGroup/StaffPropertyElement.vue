<template>
  <div>
    <transition>
      <div v-if="step === 1">
        <h4 class="text-center p-4">
          スタッフを分類するカテゴリーの名前と<br/>
          タイプの数を入力してください
        </h4>

        <div class="container max-h-350px overflow-auto">
          <div class="row justify-content-center p-3">
            <input
              type="text"
              class="w-300px original-input"
              v-model="elementName"
              placeholder="カテゴリー名"
            />
            <InvalidFeedback
              v-if="errors.elementName"
              :error="errors.elementName"
              class="d-block text-center"
            />
          </div>

          <div class="row justify-content-center p-3">
            <input
              type="number"
              class="w-50px original-input"
              min="1"
              max="10"
              v-model="optionsLength"
            />種類
            <InvalidFeedback
              v-if="errors.optionsLength"
              :error="errors.optionsLength"
              class="d-block text-center"
            />
          </div>

          <div class="row justify-content-between p-3">
            <button
              type="button"
              class="btn btn-sm btn-done w-125px"
              @click.stop.prevent="handleCanceled"
            >
              {{ backLabel }}
            </button>

            <button
              type="button"
              class="btn btn-sm btn-core w-125px"
              @click.stop.prevent="handleNextClicked"
            >
              {{ nextLabel }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <transition>
      <div v-if="step === 2">
        <h4 class="text-center p-4">
          タイプの名前を入力してください
        </h4>

        <div class="container max-h-350px overflow-auto pt-3" :title="`length: ${length}`">
          <div
            v-for="n of length"
            :key="`property_option_${n}`"
            class="row justify-content-center p-3"
          >
            <input
              type="text"
              class="w-300px original-input"
              v-model="optionNames[n - 1]"
              placeholder="タイプの名前"
            />
            <InvalidFeedback
              v-if="errors.optionNames[n - 1]"
              :error="errors.optionNames[n - 1]"
              class="d-block text-center"
            />
          </div>

          <div class="row justify-content-between p-3">
            <button
              type="button"
              class="btn btn-sm btn-done w-125px"
              @click.stop.prevent="handleBackClicked"
            >
              {{ backLabel }}
            </button>

            <button
              type="button"
              class="btn btn-sm btn-core w-125px"
              @click.stop.prevent="handleSubmitted"
            >
              {{ submitLabel }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import InvalidFeedback from "@/components/elements/InvalidFeedback.vue";

export default {
  components: {
    InvalidFeedback
  },
  props: {
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
      step: 1,

      elementName: '',
      optionsLength: 1,
      optionNames: [
        '',
      ],

      errors: {
        elementName: '',
        optionsLength: '',
        optionNames: [
          '',
        ],
      },
    }
  },
  computed: {
    length: function() {
      return Number(this.optionsLength)
    },
  },
  watch: {
    optionsLength: {
      immediate: true,
      handler: function(newLength, oldLength) {
        if (newLength > oldLength) {
          const arrayToAdd = new Array(newLength - oldLength).fill('')
          this.optionNames.push(...arrayToAdd)
          this.errors.optionNames.push(...arrayToAdd)
        } else if (newLength < oldLength) {
          this.optionNames.splice(newLength)
          this.errors.optionNames.splice(newLength)
        }
      },
    },
  },
  methods: {
    handleBackClicked: function() {
      this.step = 1
    },
    handleNextClicked: function() {
      let errorCount = 0
      if (!this.elementName) {
        this.$set(
          this.errors,
          'elementName',
          'カテゴリー名を入力してください'
        )
        errorCount++
      } else {
        this.$set(
          this.errors,
          'elementName',
          ''
        )
      }
      if (this.optionsLength < 1) {
        this.$set(
          this.errors,
          'optionsLength',
          'タイプの数は 0 以上で指定してください'
        )
        errorCount++
      } else {
        this.$set(
          this.errors,
          'optionsLength',
          ''
        )
      }

      if (errorCount > 0) {
        return
      }

      this.step = 2
    },

    handleCanceled: function() {
      this.$emit('cancel')
    },
    handleSubmitted: function() {
      let errorCount = 0;
      for (const [idx, optionName] of this.optionNames.entries()) {
        if (!optionName) {
          this.errors.optionNames.splice(idx, 1, 'タイプ名を入力してください')
          errorCount++
        } else {
          this.errors.optionNames.splice(idx, 1, '')
        }
      }

      if (errorCount === 0) {
        this.$emit('submit', {
          element: {
            name: this.elementName,
            label: this.elementName,
          },
          options: this.optionNames.map(optionName => ({
            name: optionName,
            label: optionName,
          })),
          optionsLength: this.optionsLength,
        })
      }
    },
  },
}
</script>
