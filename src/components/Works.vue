<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="works" class="headline">作品</h3>
      <v-divider />

      <v-container grid-list-sm>
        <v-layout row wrap>
          <template v-for="(e, index) in works" >
            <work 
              :href="e.url" 
              :src="`${STATIC_PATH}${e.imageUrl}`" :key="index">

              {{e.title}}<br>
              {{e.text}}
            </work>
          </template>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Work from './Work.vue';
@Component({
  components: {
    Work
  }
})
export default class Works extends Vue {
  works = this.$store.state.works;
  STATIC_PATH = process.env.STATIC_PATH;
}
</script>
