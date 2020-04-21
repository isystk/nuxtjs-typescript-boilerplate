<template>
  <div class="col-sm-6 mx-auto pt-3">
    <div class="card">
      <article class="card-body">
        <p class="text-success text-center">
          {{ $t("text.login.headMessage") }}
        </p>
        <form @submit.prevent="login">
          <p v-if="error" class="text-danger">
            {{ error }}
          </p>
          <div class="box-body">
            <div class="form-group">
              <span>{{ $t("text.login.username") }}</span>
              <input
                v-model="username"
                class="form-control"
                type="text"
                placeholder="username"
                name="username"
              />
            </div>
            <div class="form-group">
              <span>{{ $t("text.login.password") }}</span>
              <input
                v-model="password"
                class="form-control"
                type="password"
                placeholder="password"
                name="password"
              />
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary btn-block">
                {{ $t("text.login.login") }}
              </button>
            </div>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { ILoginPayload, IUser } from "@/interfaces/api/User/ILogin";

@Component({
  middleware: ["anonymous"],
  layout: "loginLayout"
})
export default class extends Vue {
  head(): any {
    return {
      title: this.$t("text.login.login")
    };
  }

  public username = "";
  public password = "";
  public error: string | null = null;

  public async login(): Promise<any> {
    try {
      const res: IUser = await this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password
      } as ILoginPayload);

      this.$router.push("/");
    } catch (e) {
      this.error = e.message;
    }
  }
}
</script>
