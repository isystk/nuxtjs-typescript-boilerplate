<script lang="ts">
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import { Radar as VueRadar, mixins } from "vue-chartjs";

@Component({})
export default class Radar extends Mixins(VueRadar, mixins.reactiveProp) {
  @Prop()
  chartData;

  @Prop()
  options;

  mounted(): void {
    if (this.chartData) {
      this.renderChart(this.chartData, this.options);
    }
  }

  @Watch("chartData")
  onChangeData(val, old): void {
    if (this.chartData) {
      this.renderChart(this.chartData, this.options);
    }
  }
}
</script>
