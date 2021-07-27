<template>
  <div>
    <ContentHeader
      :current="{ title: $t('text.sideMenu.bar'), url: this.$C.URL.CHART_BAR }"
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
                  棒グラフ
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <PagesChartLineBar
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
                  横棒グラフ
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <PagesChartHorizontalBar
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
                        <td>棒グラフ · Chart.js 日本語ドキュメント</td>
                        <td>
                          <a
                            href="https://misc.0o0o.org/chartjs-doc-ja/charts/bar.html"
                            target="_blank"
                          >
                            "https://misc.0o0o.org/chartjs-doc-ja/charts/bar.html"
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
import Chart from "chart.js";

import { sideMenuModule } from "@/store/sideMenu";
import ContentHeader from "@/components/pages/ContentHeader.vue";

@Component({
  components: {
    ContentHeader
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
      // データセットプロパティに関する設定
      // See https://misc.0o0o.org/chartjs-doc-ja/charts/bar.html
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
          label: "データ1", // 凡例とツールチップに表示されるデータセットのラベル
          xAxisID: null, // このデータセットをプロットするx軸のID。指定されていない場合、これは最初に見つかったx軸のIDになります。
          yAxisID: null, // このデータセットをプロットするy軸のID。指定されていない場合、これは最初に見つかったy軸のIDになります。
          backgroundColor: "#6090EF", // 線の下の塗りつぶしの色
          borderColor: null, // 線の色
          borderWidth: 1, // 線の幅
          pointBackgroundColor: "white", // 点の塗りつぶしの色
          pointBorderColor: "#249EBF", // 点の境界線の色
          data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
        },
        {
          label: "データ2",
          data: [30, 40, 80, 60, 50, 80, 90, 50, 20, 10, 50, 30]
        }
      ]
    } as Chart.ChartData;
  }

  get chartOptions(): Chart.ChartOptions {
    return {
      responsive: true, // コンテナサイズが変更された際に、チャートキャンバスサイズを変更します
      responsiveAnimationDuration: 0, // サイズ変更イベント後に新しいサイズにアニメーションするのに要する時間（ミリ秒）
      maintainAspectRatio: false, // サイズ変更の際に、元のキャンバスのアスペクト比(width / height)を維持します。
      // onResize(chart, size): void {
      //   // サイズ変更が発生したときに呼び出されます。チャートインスタンスと新しいサイズの2つの引数を渡します。
      // },
      layout: {
        // レイアウトに関する設定
        // See https://misc.0o0o.org/chartjs-doc-ja/configuration/layout.html
        padding: 0 // グラフの内側に追加するパディング
      },
      title: {
        // タイトル
        // See https://misc.0o0o.org/chartjs-doc-ja/configuration/title.html
        display: true, // タイトルを表示します。
        position: "top", // タイトルの位置
        fontSize: 12, // タイトルのフォントサイズ
        padding: 10, // タイトルテキストの上下に追加するピクセル数
        text: "タイトル"
      },
      legend: {
        // 凡例に関する設定
        // See https://misc.0o0o.org/chartjs-doc-ja/configuration/legend.html
        display: true, // 凡例を表示します。
        position: "bottom" // 凡例の位置
      },
      tooltips: {
        // ツールチップに関する設定
        // See https://misc.0o0o.org/chartjs-doc-ja/configuration/tooltip.html
        display: true // キャンバス上でツールチップを有効にします
      },
      elements: {
        // 要素に関する設定
        // See https://misc.0o0o.org/chartjs-doc-ja/configuration/elements.html
        point: {
          // 点に関する設定
        },
        line: {
          // 線に関する設定
        },
        rectangle: {
          // 矩形に関する設定
        },
        arc: {
          // 円弧に関する設定
        }
      },
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
      }
    } as Chart.ChartOptions;
  }
}
</script>
