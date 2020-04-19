<template>
  <div class="col-sm-6 mx-auto pt-3">
    <div class="card">
      <article class="card-body">
        <p>Signing off...</p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ILogoutPayload } from "@/interfaces/api/User/ILogout";

@Component({
  middleware: "authenticated",
  layout: "loginLayout"
})
export default class SignOff extends Vue {
  head(): any {
    return {
      title: "ログアウト"
    };
  }

  public async mounted(): Promise<any> {
    await this.$store.dispatch("auth/logout", {} as ILogoutPayload);

    this.$router.replace("/auth/sign-in/");
  }
}
</script>
