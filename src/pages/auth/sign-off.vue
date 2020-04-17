<template>
  <div class="wrapper">
    <Header />
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>ログアウト</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <p>Signing off...</p>
            </div>
          </div>
        </div>
      </div>
      <!-- /.content -->
    </div>
    <Footer />
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
  public async mounted(): void {
    await this.$store.dispatch("auth/logout", {} as ILogoutPayload);

    this.$router.replace("/auth/sign-in/");
  }

  public head(): any {
    return {
      title: "sign-off"
    };
  }
}
</script>
