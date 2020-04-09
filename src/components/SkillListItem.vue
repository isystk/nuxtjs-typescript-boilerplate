<template>
  <div>
    <v-divider v-show="!noDivider" />

    <v-layout class="pa-3 vertical-center">
      <div>
        <span class="title font-weight-light">{{ name }}</span>
        
        <p class="body-2 mt-1 mb-0">
          <slot></slot>
        </p>
      </div>

      <v-spacer />

      <v-rating 
        :value="rating" 
        readonly 
        dense
        size="22"
        length="3" />
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
@Component
export default class SkillListItem extends Vue {
  
  @Prop({ default: '' })
  public name!: string;

  @Prop({ default: 0 })
  public rating!: number;

  @Prop({ default: false })
  public noDivider?: boolean;

}
</script>
