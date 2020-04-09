<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="contact" class="headline">コンタクト</h3>
      <v-divider />


      <div class="vertical-center subheading mt-3">
        <v-icon class="mr-2">mail</v-icon>

        <a :href="`mailto:${email}`">
          <span>メール({{email}})</span>
        </a>
      </div>

      <template v-for="(e, index) in contacts" >
        <div class="vertical-center subheading mt-1" :key="index">
          <v-icon class="mr-2">{{e.icon}}</v-icon>

          <a :href="e.linkUrl">
            <span>{{e.name}}</span>
          </a>
        </div>
      </template>

    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
  
  profile = this.$store.state.profile;
  contacts = this.$store.state.contacts;
  email: string = '';

  mounted(): void {
    // 迷惑メール防止
    setTimeout(() => { this.email = this.profile.email }, 100)
  }
}
</script>

