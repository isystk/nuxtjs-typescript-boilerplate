<template>
  <div class="wrapper">
    <Header />
    <SideMenu />
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>ログイン</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <form @submit.prevent="login">
                <p v-if="error" class="error">
                  {{ error }}
                </p>
                <p>
                  <input
                    v-model="username"
                    type="text"
                    placeholder="username"
                    name="username"
                  />
                </p>
                <p>
                  <input
                    v-model="password"
                    type="password"
                    placeholder="password"
                    name="password"
                  />
                </p>
                <div class=".login-btn">
                  <button type="submit">
                    ログイン
                  </button>
                </div>
              </form>
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
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SideMenu from "@/components/SideMenu.vue";
import { ILoginPayload, IUser } from "@/interfaces/api/User/ILogin";

@Component({
  components: {
    Header,
    Footer,
    SideMenu
  },
  middleware: ["anonymous"]
})
export default class extends Vue {
  public username = "";
  public password = "";
  public error: string | null = null;

  public async login(): void {
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
