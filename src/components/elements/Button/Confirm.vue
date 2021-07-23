<template>
  <form
    :method="`${methodName === 'get' ? 'get' : 'post'}`"
    :action="action"
    :class="className"
  >
    <input type="hidden" name="_token" value="csrf" />
    <input v-if="isPut" type="hidden" name="_method" value="PUT" />
    <input v-if="isDelete" type="hidden" name="_method" value="DELETE" />
    <button
      type="submit"
      :class="`btn btn-${variant}`"
      @click.stop.prevent="handleClick"
    >
      {{ label }}
    </button>
  </form>
</template>

<script>
import csrfMixins from "~/mixins/csrf";
export default {
  mixins: [csrfMixins],
  props: {
    method: String,
    action: String,
    className: String,
    variant: {
      type: String,
      default: "link"
    },
    label: {
      type: String,
      default: "Confirm"
    },
    message: {
      type: String,
      default: "本当に実行してもよろしいですか？"
    }
  },
  computed: {
    methodName() {
      return this.method ? this.method.toLowerCase() : "get";
    },
    isPut() {
      return this.methodName === "put";
    },
    isDelete() {
      return this.methodName === "delete";
    }
  },
  methods: {
    handleClick() {
      if (confirm(this.message)) {
        return this.execute();
      }
      return false;
    },
    execute() {
      this.$el.submit();
    }
  }
};
</script>
