<template>
  <div>
    <div v-if="isCarousel" class="carousel" @mousedown="onMouseDown">
      <div class="list" :style="_listStyle" @transitionend="onTransitionEnd">
        <!-- 後ろの要素をコピー -->
        <template v-for="(e, index) in COPY_COUNT">
          <div :key="'before' + index" class="list__item">
            <div class="item square">
              <img
                :src="imagePath[imagePath.length - (COPY_COUNT - index)]"
                width="200px"
              />
            </div>
          </div>
        </template>
        <!-- 本体 -->
        <template v-for="(e, index) in imagePath">
          <div :key="index" class="list__item">
            <div class="item square">
              <img :src="e" width="200px" />
            </div>
          </div>
        </template>
        <!-- 最初の要素をコピー -->
        <template v-for="(e, index) in COPY_COUNT">
          <div :key="'after' + index" class="list__item">
            <div class="item square">
              <img :src="imagePath[index]" width="200px" />
            </div>
          </div>
        </template>
      </div>
    </div>
    <div v-else class="carousel" @mousedown="onMouseDown">
      <div class="list" :style="_listStyle">
        <template v-for="(e, index) in imagePath">
          <div :key="index" class="list__item">
            <div class="item square">
              <img :src="e" width="200px" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from "vue-property-decorator";
import _ from "lodash";

@Component
export default class Carousel extends Vue {
  imagePath = [
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg")
  ];

  currentNum = 0;
  diffX = 0;
  startX: number | null = null;

  isCarousel = true; // カルーセルするかどうか

  COPY_COUNT = 2; // コピーする数
  isAnimating = false;

  mounted(): void {
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);
  }

  beforeDestroy(): void {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);
  }

  get _listStyle(): any {
    if (this.isCarousel) {
      return {
        transition: this.isAnimating ? "" : "none",
        transform: `translate3d(${-100 *
          (this.currentNum + this.COPY_COUNT)}%, 0, 0) translate3d(${
          this.diffX
        }px, 0, 0)`
      };
    } else {
      return {
        transition: this.startX == null ? "" : "none",
        transform: `translate3d(${-100 * this.currentNum}%, 0, 0) translate3d(${
          this.diffX
        }px, 0, 0)`
      };
    }
  }

  onMouseDown(e): void {
    this.startX = e.clientX;
  }

  onMouseMove(e): void {
    if (this.startX == null) {
      return;
    }
    this.diffX = e.clientX - this.startX;
  }

  onMouseUp(e): void {
    this.startX = null;
    if (this.diffX > 20) {
      if (this.isCarousel) {
        this.currentNum -= 1;
        this.isAnimating = true;
      } else {
        this.currentNum = Math.max(this.currentNum - 1, 0);
      }
    }
    if (this.diffX < -20) {
      if (this.isCarousel) {
        this.currentNum += 1;
        this.isAnimating = true;
      } else {
        this.currentNum = Math.min(
          this.currentNum + 1,
          this.imagePath.length - 1
        );
      }
    }
    this.diffX = 0;
  }

  onTransitionEnd(): void {
    this.adjustPosition();
  }

  adjustPosition(): void {
    this.isAnimating = false;
    this.currentNum =
      (this.currentNum + this.imagePath.length) % this.imagePath.length;
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  border: solid 2px #ccc;
  overflow: hidden;
  width: 240px;
}

.list {
  width: 200px;
  margin: 0 auto;
  white-space: nowrap;
  font-size: 0;
  transition: transform 0.5s;

  &__item {
    display: inline-block;
    padding: 10px;
    width: 100%;
    height: 200px;
    font-size: 16px;
  }
}

.item {
  width: 100%;
  height: 100%;
  border: solid 1px #000;
  user-select: none;

  &--copy {
    background-color: #f0f0ff;
  }
}

.square {
  width: 100%;
  position: relative;
}
.square img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
}
</style>
