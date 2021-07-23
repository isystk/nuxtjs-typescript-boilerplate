import { Component, Vue } from "vue-property-decorator";
import { shadowingName } from "~/utilities/filters";

@Component
export default class extends Vue {
  name = "";
  validated = "";
  errors = [];

  shadowName(): any {
    return shadowingName(this.name);
  }

  state(): boolean | null {
    if (this.validated) {
      return true;
    }
    return this.errors && this.errors.length > 0 ? false : null;
  }

  error(): any {
    if (!this.errors) {
      return "";
    }
    if (Array.isArray(this.errors)) {
      return this.errors.filter(Boolean).join(", ");
    }
    return this.errors;
  }

  validatedClassName(): any {
    if (this.state() === true) {
      return " is-valid";
    }
    if (this.state() === false) {
      return " is-invalid";
    }
    return "";
  }
}
