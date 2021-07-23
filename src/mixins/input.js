import { shadowingName } from "~/utilities/filters";

export default {
  computed: {
    shadowName() {
      return shadowingName(this.name);
    },
    state() {
      if (this.validated) {
        return true;
      }
      return this.errors && this.errors.length > 0 ? false : null;
    },
    error() {
      if (!this.errors) {
        return "";
      }
      if (Array.isArray(this.errors)) {
        return this.errors.filter(Boolean).join(", ");
      }
      return this.errors;
    },
    validatedClassName() {
      if (this.state === true) {
        return " is-valid";
      }
      if (this.state === false) {
        return " is-invalid";
      }
      return "";
    }
  }
};
