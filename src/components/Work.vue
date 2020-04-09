<template>
  <v-flex xs12 sm6 lg4>
    <v-card>
      <a :href="href">
        <v-img height="200" :src="src">
          <v-layout
            align-end
            fill-height
            pa-3
            white--text>
          </v-layout>
        </v-img>
      </a>

      <v-card-title>
        <p class="body-2 mb-0">
          <slot></slot>
        </p>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class Work extends Vue {
  
  @Prop({ default: '' }) 
  public href!: string;

  @Prop({ default: '' }) 
  public src!: string;

}
</script>
