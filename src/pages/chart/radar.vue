<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.radar'),
        url: this.$C.URL.CHART_RADAR
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
                        <td>レーダーチャート · Chart.js 日本語ドキュメント</td>
                        <td>
                          <a
                            href="https://misc.0o0o.org/chartjs-doc-ja/charts/radar.html"
                            target="_blank"
                          >
                            "https://misc.0o0o.org/chartjs-doc-ja/charts/radar.html"
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
import ChartRadar from "@/components/chart/ChartRadar.vue";

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
      // データセットプロパティに関する設定
      // See https://misc.0o0o.org/chartjs-doc-ja/charts/radar.html
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
