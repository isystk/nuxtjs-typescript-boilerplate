<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{ getSelectedCurrency.currency }}</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                仮想通貨一覧
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- LINE CHART -->
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  {{ fromDate | formatDate("MM月DD日") }}～{{
                    toDate | formatDate("MM月DD日")
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
import { Component, Vue, Prop, Watch, Mixins } from "vue-property-decorator";
import { currencyModule, SupportedCurrencies } from "@/store/modules/currency"; // モジュールクラスをインポート
import Chart from "chart.js";
import { Line } from "vue-chartjs";
import LineChart from "@/components/parts/LineChart.vue";

@Component({
  components: {
    LineChart
  }
})
export default class ListItem extends Mixins(Line) {
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
            callback: function(value, index, values) {
              return value + "度";
            }
          }
        }
      ]
    }
  };

  get getSelectedCurrency() {
    return currencyModule.selecedCurrency;
  }

  created() {
    this.createChartData();
  }

  @Watch("getSelectedCurrency", { immediate: true })
  async onChangeCurrency(code: string) {
    if (code === "") {
      return;
    }
    const historicalData = await currencyModule.searchHistorical({});
    console.log(historicalData);

    this.createChartData();
  }

  createChartData() {
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
          type: "line",
          label: "最高気温(度）",
          data: [35, 34, 37, 35, 34, 35, 34, 25],
          backgroundColor: "#6090EF",
          borderColor: "#6090EF",
          fill: false
        },
        {
          type: "bar",
          label: "最低気温(度）",
          data: [25, 27, 27, 25, 26, 27, 25, 21],
          backgroundColor: "#fd98b0",
          borderColor: "#fd98b0"
        }
      ]
    };
  }
}
</script>
