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
            <!-- bar CHART -->
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
                  <LineChart :data="chartData" :options="chartOptions" />
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
import { Bar } from "vue-chartjs";
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
export default class extends Mixins(Bar) {
  selectedCurrencyCode = "";
  fromDate = new Date("2020-02-01");
  toDate = new Date("2020-04-22");
  currencyData: Historical = {};

  @Watch("selectedCurrencyCode", { immediate: true })
  onChangeselectedCurrencyCode(val, old): void {
    // console.log("change currentMenu new:%s old:%s", val, old);
    if (val) {
      this.createChartData(val);
    }
  }

  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "chart",
      item: "bar"
    });

    // サポートしている通貨の一覧を生成します。
    currencyModule.fetchSupportedCurrencies();
  }

  // サポートしている通貨の一覧を取得します。
  get supportedCurrencies(): SupportedCurrencies[] {
    return currencyModule.supportedCurrencies;
  }

  get chartData(): Chart.ChartData {
    if (_.isEmpty(this.currencyData)) {
      return {};
    }
    const lalbels = _.map(this.currencyData.historicals, e => {
      return moment(e.updated).format("MM月DD日");
    });
    const datas = _.map(this.currencyData.historicals, e => {
      return Math.floor(e.rateFloat);
    });

    return {
      labels: lalbels,
      datasets: [
        {
          type: "bar",
          label: "rate",
          data: datas,
          backgroundColor: "#6090EF",
          borderColor: "#6090EF",
          fill: false
        }
      ]
    } as Chart.ChartData;
  }

  get chartOptions(): Chart.ChartOptions {
    if (_.isEmpty(this.currencyData)) {
      return {};
    }
    return {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text:
          this.selectedCurrencyCode +
          " " +
          moment(this.fromDate).format("MM月DD日") +
          "～" +
          moment(this.toDate).format("MM月DD日")
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMax: 40,
              suggestedMin: 0,
              stepSize: 10,
              callback(value): string {
                return "$" + value;
              }
            }
          }
        ]
      }
    };
  }

  // 引数で指定した通貨のチャートを描画します。
  async createChartData(currency: string): Promise<any> {
    this.currencyData = await currencyModule.searchHistorical({
      currency,
      start: this.fromDate,
      end: this.toDate
    } as SearchHistoricalCondition);
  }
}
</script>
