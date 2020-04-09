<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="profile" class="headline">自己紹介</h3>
      <v-divider />

      <v-card class="mt-2">
        <v-card-title>
          <v-layout fill-height class="vertical-center">
            <v-avatar :size="128">
              <img :src="`${STATIC_PATH}${profile.imageUrl}`" />
            </v-avatar>

            <v-flex xs12 ml-4>
              <p class="mb-0 profile-text" v-html="$options.filters.sanitize(profile.message)"></p>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
  profile = this.$store.state.profile;
  STATIC_PATH = process.env.STATIC_PATH;
}
</script>

