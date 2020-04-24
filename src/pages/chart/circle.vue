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
                  円グラフ
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <ChartPie :chart-data="chartData" :options="chartOptions" />
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
                  ドーナツチャート
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
                  鶏頭図
                </h3>
              </div>
              <div class="card-body">
                <div class="chart">
                  <ChartPolar :chart-data="chartData" :options="chartOptions" />
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
                        <td>
                          ドーナツチャートと円グラフ · Chart.js
                          日本語ドキュメント
                        </td>
                        <td>
                          <a
                            href="https://misc.0o0o.org/chartjs-doc-ja/charts/doughnut.html"
                            target="_blank"
                          >
                            "https://misc.0o0o.org/chartjs-doc-ja/charts/doughnut.html"
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          2
                        </th>
                        <td>
                          鶏頭図 · Chart.js 日本語ドキュメント
                        </td>
                        <td>
                          <a
                            href="https://misc.0o0o.org/chartjs-doc-ja/charts/polar.html"
                            target="_blank"
                          >
                            "https://misc.0o0o.org/chartjs-doc-ja/charts/polar.html"
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
import ChartPolar from "@/components/chart/ChartPolar.vue";

@Component({
  components: {
    ContentHeader,
    ChartPie,
    ChartDoughnut,
    ChartPolar
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
      // データセットプロパティに関する設定
      // See https://misc.0o0o.org/chartjs-doc-ja/charts/doughnut.html#%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3
      datasets: [
        {
          backgroundColor: ["#ffd3d3", "#fff9b4", "#6090EF"], // データセットの円弧の塗りつぶし色
          borderColor: "#FFFFFF", // データセットの円弧の境界線の色データセットの円弧の塗りつぶし色
          borderWidth: 1, // データセットの円弧の境界線の太さ
          // hoverBackgroundColor: "#ececec", // マウスオーバー時の円弧の塗りつぶし色
          // hoverBorderColor: "#ececec", // マウスオーバー時の境界線の色
          // hoverBorderWidth: 2, // マウスオーバー時の境界線の太さ
          data: [10, 20, 30] // データ値
        }
      ],
      labels: ["赤", "黄", "青"] // 凡例とツールチップに表示するラベル
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
      animation: {
        // アニメーションに関する設定
        // See https://misc.0o0o.org/chartjs-doc-ja/configuration/animations.html
        duration: 1000, // アニメーションにかける時間（ミリ秒）
        easing: "easeOutQuart", // 使用するイージング(easing)(訳注:アニメーションの効果
        // onProgress: null, // アニメーションの各ステップで呼び出されるコールバック
        // onComplete: null, // アニメーションの最後に呼び出されるコールバック
        animateRotate: true, // （円グラフ）trueの場合、グラフは回転アニメーションをします。
        animateScale: true // （円グラフ）trueの場合、中央から外側に向かってグラフが拡大するアニメーションをします。
      },
      rotation: -0.5 * Math.PI, // （円グラフ）弧を描画する開始角度
      circumference: 2 * Math.PI // （円グラフ）弧全体の角度
      // cutoutPercentage: 50, // （ドーナツ）中央部から切り取られるグラフの割合
      // startAngle: -0.5 * Math.PI // (鶏頭図のみ) データセットの最初の項目の円弧を描画する開始角度
    } as Chart.ChartOptions;
  }
}
</script>
