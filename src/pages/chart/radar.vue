<template>
  <div>
    <ContentHeader
      :current="{ title: $t('text.sideMenu.radar'), url: '/chart/radar/' }"
      :breadcrumb-list="[{ title: $t('text.sideMenu.chart'), url: '/chart/' }]"
    />
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  レーダーチャート
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <ChartRadar :chart-data="chartData" :options="chartOptions" />
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
                        <td>Radar · Chart.js documentation</td>
                        <td>
                          <a
                            href="https://www.chartjs.org/docs/latest/charts/radar.html"
                            target="_blank"
                          >
                            "https://www.chartjs.org/docs/latest/charts/radar.html"
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
import ChartRadar from "@/components/parts/ChartRadar.vue";

@Component({
  components: {
    ContentHeader,
    ChartRadar
  }
})
export default class extends Vue {
  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "chart",
      item: "radar"
    });
  }

  get chartData(): Chart.ChartData | null {
    return {
      labels: ["価格", "味", "接客", "衛生", "品質"],
      datasets: [
        {
          label: "平均",
          data: [80, 70, 70, 80, 80]
        },
        {
          label: "XX店",
          backgroundColor: "#6090EF",
          borderColor: "#6090EF",
          data: [100, 90, 80, 40, 80]
        }
      ]
    } as Chart.ChartData;
  }

  get chartOptions(): Chart.ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "タイトル"
      },
      scale: {
        angleLines: {
          display: false
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 100
        }
      }
    } as Chart.ChartOptions;
  }
}
</script>
