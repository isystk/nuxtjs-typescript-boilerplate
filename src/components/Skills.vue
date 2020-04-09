<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="skills" class="headline">スキル</h3>
      <v-divider />

      <v-card class="mt-2">
        <v-layout row>
          <v-flex xs4 class="rating-standard">
            <v-rating 
              :value="3" 
              readonly 
              dense
              size="22"
              length="3" />

              <div>使い慣れている</div>
          </v-flex>

          <v-flex xs4 class="rating-standard">
            <v-rating 
              :value="2" 
              readonly 
              dense
              size="22"
              length="3" />

              <div>そこそこ使える</div>
          </v-flex>


          <v-flex xs4 class="rating-standard">
            <v-rating 
              :value="1" 
              readonly 
              dense
              size="22"
              length="3" />

              <div>入門程度</div>
          </v-flex>
        </v-layout>
      </v-card>

      <h3 class="title my-3">プログラミング言語</h3>

      <template v-for="(e, index) in skills" >
        <skill 
          :title="e.title" 
          :color="e.color"
          :rating="e.rating" :key="index">
          
          <template slot="text">
            {{e.text}}<br>
          </template>

        </skill>
      </template>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skill from './Skill.vue';
@Component({
  components: {
    Skill
  }
})
export default class Skills extends Vue {
  skills = this.$store.state.skills;
}
</script>

