<template>
<div class="wrapper">
  <Header></Header>
  <SideMenu></SideMenu>
  <div class="content-wrapper">
    <div>
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>HOME</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SideMenu from '../components/SideMenu.vue';

@Component({
  components: {
    Header, Footer, SideMenu
  }
})
export default class extends Vue {
}

</script>
