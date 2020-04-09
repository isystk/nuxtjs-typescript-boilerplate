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

          <template slot="list" v-for="(e2, index2) in e.items" >
            <skill-list-item :name="e2.name" :rating="e2.rating" :noDivider="e2.noDivider" :key="index2">
            {{e2.text}}<br>
            </skill-list-item>
          </template>
        </skill>
      </template>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skill from './Skill.vue';
import SkillListItem from './SkillListItem.vue';
@Component({
  components: {
    Skill, SkillListItem
  }
})
export default class Skills extends Vue {
  skills = this.$store.state.skills;
}
</script>

