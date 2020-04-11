<template>
<div class="wrapper">
  <Header></Header>
  <SideMenu :group="'coin'" :item="'history'"></SideMenu>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>仮想通貨一覧</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item">仮想通貨一覧</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <Corrency></Corrency>
  </div>
  <Footer></Footer>
</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import SideMenu from '../../components/SideMenu.vue';
import Corrency from '../../components/Corrency.vue';

@Component({
  components: {
    Header, Footer, SideMenu, Corrency
  }
})
export default class extends Vue {
}

</script>
