<template>
  <div>
    <ContentHeader
      :current="{ title: $t('text.sideMenu.bar'), url: '/chart/bar/' }"
      :breadcrumb-list="[{ title: $t('text.sideMenu.chart'), url: '/chart/' }]"
    />
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  棒グラフ
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <ChartLineBar
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
                        <td>Line · Chart.js documentation</td>
                        <td>
                          <a
                            href="https://www.chartjs.org/docs/latest/charts/bar.html"
                            target="_blank"
                          >
                            "https://www.chartjs.org/docs/latest/charts/bar.html"
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

import { sideMenuModule } from "@/store/sideMenu";
import ContentHeader from "@/components/ContentHeader.vue";
import ChartLineBar from "@/components/chart/ChartLineBar.vue";
import SelectBox from "@/components/form/SelectBox.vue";

@Component({
  components: {
    ContentHeader,
    ChartLineBar,
    SelectBox
  }
})
export default class extends Vue {
  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "chart",
      item: "bar"
    });
  }

  get chartData(): Chart.ChartData {
    return {
      // Data to be represented on x-axis
      labels: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      datasets: [
        {
          type: "bar",
          label: "データ1",
          backgroundColor: "#f87979",
          pointBackgroundColor: "white",
          borderWidth: 1,
          pointBorderColor: "#249EBF",
          // Data to be represented on y-axis
          data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
        },
        {
          type: "bar",
          label: "データ2",
          data: [30, 40, 80, 60, 50, 80, 90, 50, 20, 10, 50, 30]
        }
      ]
    } as Chart.ChartData;
  }

  get chartOptions(): Chart.ChartOptions {
    return {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      },
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: false
    } as Chart.ChartOptions;
  }
}
</script>
