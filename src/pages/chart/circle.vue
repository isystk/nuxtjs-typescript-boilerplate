<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.circle'),
        url: this.$C.URL.CHART_CIRCLE
      }"
      :breadcrumb-list="[
        { title: $t('text.sideMenu.chart'), url: this.$C.URL.CHART }
      ]"
    />
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  パイ
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <ChartPie :chart-data="chartData" :options="chartOptions" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  ドーナツ
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <ChartDoughnut
                    :chart-data="chartData"
                    :options="chartOptions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  資料
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">
                          #
                        </th>
                        <th scope="col">
                          タイトル
                        </th>
                        <th scope="col">
                          URL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          1
                        </th>
                        <td>Doughnut and Pie · Chart.js documentation</td>
                        <td>
                          <a
                            href="https://www.chartjs.org/docs/latest/charts/doughnut.html"
                            target="_blank"
                          >
                            "https://www.chartjs.org/docs/latest/charts/doughnut.html"
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Mixins } from "vue-property-decorator";

import moment from "moment";
import _ from "lodash";
import { sideMenuModule } from "@/store/sideMenu";
import {
  currencyModule,
  SupportedCurrencies,
  SearchHistoricalCondition,
  Historical
} from "@/store/currency";
import ContentHeader from "@/components/ContentHeader.vue";
import ChartPie from "@/components/chart/ChartPie.vue";
import ChartDoughnut from "@/components/chart/ChartDoughnut.vue";

@Component({
  components: {
    ContentHeader,
    ChartPie,
    ChartDoughnut
  }
})
export default class extends Vue {
  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "chart",
      item: "circle"
    });
  }

  get chartData(): Chart.ChartData | null {
    return {
      datasets: [
        {
          type: "pie", // or 'doughnut'
          backgroundColor: ["#ffd3d3", "#fff9b4", "#6090EF"],
          borderColor: "#FFFFFF",
          data: [10, 20, 30]
        }
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["赤", "黄", "青"]
    } as Chart.ChartData;
  }

  get chartOptions(): Chart.ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "タイトル"
      }
    } as Chart.ChartOptions;
  }
}
</script>
