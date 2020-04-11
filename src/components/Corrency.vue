<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{getSelectedCurrency.currency}}</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item">仮想通貨一覧</li>
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
                <h3 class="card-title">Line Chart</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                </div>
              </div>
              <div class="card-body">
                <div class="chart">
                  <lineChartComponent :chartData="chartData" :chartOptions="chartOptions"></lineChartComponent>
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
import { Component, Vue, Prop, Watch, Mixins } from 'vue-property-decorator';
import { currencyModule } from "../store/modules/currency"; // モジュールクラスをインポート
import { SupportedCurrencies } from '../types/currency';
import Chart from "chart.js";
import { Line } from 'vue-chartjs'
import LineChartComponent from './parts/LineChartComponent.vue'

const FONT_COLOR = "rgba(255, 255, 255, 1)";
const GRID_LINES_SETTING = {
  display: true,
  drawOnChartArea: false,
  color: "rgba(255, 255, 255, .5)",
  zeroLineColor: "rgba(255, 255, 255, 1)"
};

@Component({
  components: {
    LineChartComponent
  }
})
export default class ListItem extends Mixins(Line) {

  public chartData: Chart.ChartData = {};
  public chartOptions: Chart.ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      // display: false
      onClick(event, legendItem) {
        return;
      },
      fullWidth: false,
      labels: {
        boxWidth: 20,
        fontColor: FONT_COLOR
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 20,
        bottom: 20,
        right: 20
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: GRID_LINES_SETTING,
          ticks: {
            autoSkip: true,
            fontColor: FONT_COLOR,
            fontSize: 14
          },
          scaleLabel: {
            display: true,
            fontColor: FONT_COLOR,
            labelString: "月",
          },
        },
      ],
      yAxes: [
        {
          id: "yAxis_1",
          type: "linear",
          gridLines: GRID_LINES_SETTING,
          scaleLabel: {
            display: true,
            fontColor: FONT_COLOR,
            labelString: "湿度(%)"
          },
          ticks: {
            autoSkip: true,
            fontColor: FONT_COLOR,
            fontSize: 14,
            min: 0,
            max: 100
          },
        },
        {
          id: "yAxis_2",
          type: "linear",
          gridLines: GRID_LINES_SETTING,
          scaleLabel: {
            display: true,
            fontColor: FONT_COLOR,
            labelString: "温度(℃)"
          },
          ticks: {
            autoSkip: true,
            fontColor: FONT_COLOR,
            fontSize: 14,
            min: 0,
            max: 40
          },
          position: "right"
        }
      ],
    }
  };
  get getSelectedCurrency() {
    return currencyModule.selecedCurrency;
  }

  @Watch('getSelectedCurrency', { immediate: true })
  async onChangeCurrency(code: String) {
    if (code === '') {
      return;
    }
    var historicalData = await currencyModule.searchHistorical({});
    console.log(historicalData);
    
    this.chartData = {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          yAxisID: "yAxis_1",
          type: "line",
          label: "湿度",
          backgroundColor: "#6090EF",
          borderColor: "#6090EF",
          fill: false,
          data: this.craeteRamdomValue(100)
        },
        {
          yAxisID: "yAxis_2",
          type: "bar",
          label: "温度",
          backgroundColor: "#F87979",
          borderColor: "#F87979",
          fill: false,
          data: this.craeteRamdomValue(40)
        }
      ]
    };
    
    // this.renderChart(this.chartData, this.chartOptions);

  }

  public craeteRamdomValue(baseNumber: number) {
    const arr: number[] = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * baseNumber));
    }
    return arr;
  }
}
</script>

