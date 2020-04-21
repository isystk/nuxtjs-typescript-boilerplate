<template>
  <div>
    <ContentHeader
      :current="{ title: '棒グラフ', url: '/chart/bar/' }"
      :breadcrumb-list="[{ title: 'チャート', url: '/chart/' }]"
    />
    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- LINE CHART -->
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  {{ $moment(fromDate).format("MM月DD日") }}～{{
                    $moment(toDate).format("MM月DD日")
                  }}
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <LineChart
                    :chart-data="chartData"
                    :chart-options="chartOptions"
                  />
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.content -->
  </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins } from "vue-property-decorator";
import Chart from "chart.js";
import { Line } from "vue-chartjs";
import { sideMenuModule } from "@/store/sideMenu";
import { currencyModule } from "@/store/currency";
import ContentHeader from "@/components/ContentHeader.vue";
import LineChart from "@/components/parts/LineChart.vue";
import SelectBox from "@/components/parts/SelectBox.vue";

@Component({
  components: {
    ContentHeader,
    LineChart,
    SelectBox
  },
  middleware: ["authenticated"]
})
export default class extends Mixins(Line) {
  fromDate = new Date();
  toDate = new Date();
  chartData: Chart.ChartData = {};
  chartOptions: Chart.ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "気温（8月1日~8月7日）"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 40,
            suggestedMin: 0,
            stepSize: 10,
            callback(value): string {
              return value + "度";
            }
          }
        }
      ]
    }
  };

  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "chart",
      item: "bar"
    });

    this.createChartData();
  }

  createChartData(): void {
    this.chartData = {
      labels: [
        "8月1日",
        "8月2日",
        "8月3日",
        "8月4日",
        "8月5日",
        "8月6日",
        "8月7日"
      ],
      datasets: [
        {
          type: "bar",
          label: "最低気温(度）",
          data: [25, 27, 27, 25, 26, 27, 25, 21],
          backgroundColor: "#fd98b0",
          borderColor: "#fd98b0"
        },
        {
          type: "bar",
          label: "最低気温(度）",
          data: [25, 27, 27, 25, 26, 27, 25, 21],
          backgroundColor: "#aae0ff",
          borderColor: "#aae0ff"
        }
      ]
    };
  }
}
</script>
