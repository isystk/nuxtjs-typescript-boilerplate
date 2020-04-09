<template>
  <v-card class="mb-3" :color="color">
    <v-card-title>
      <v-layout>
        <span class="title">{{ title }}</span>

        <v-spacer />
        
        <v-rating 
          :value="rating" 
          readonly 
          dense
          size="22"
          length="3" />
      </v-layout>
    </v-card-title>

    <v-card-text class="white">
      <p class="body-2 mb-0 pt-2 discription">
        <slot name="text"></slot>
      </p>
    </v-card-text>

    <div class="white">
      <slot name="list"></slot>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class Skill extends Vue {
  
  @Prop({ default: '' }) 
  public title!: string;

  @Prop({ default: '' })
  public color!: string;

  @Prop({ default: 0 })
  public rating!: number;

}
</script>

