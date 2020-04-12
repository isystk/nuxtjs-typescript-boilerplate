
<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Chart from "chart.js";
import { Line, Bar, mixins } from "vue-chartjs";

@Component({})
export default class LineChartComponent extends Mixins(Line, Bar, mixins.reactiveProp) {
  @Prop() public chartData: Chart.ChartData = {};
  @Prop() public chartOptions: Chart.ChartOptions = {};

  public mounted() {
    console.log(this);
    this.renderChart(this.chartData, this.chartOptions);
  }
}
</script>

