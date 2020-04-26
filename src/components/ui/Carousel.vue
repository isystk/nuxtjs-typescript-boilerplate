<template>
  <div>
    <div
      v-if="isCarousel"
      class="box"
      :style="[boxSize]"
      @mousedown="onTouchStart"
      @touchstart="onTouchStart"
    >
      <div
        class="list"
        :style="[_listStyle, imageSize]"
        @transitionend="onTransitionEnd"
      >
        <!-- 後ろの要素をコピー -->
        <template v-for="(e, index) in COPY_COUNT">
          <div :key="'before' + index" class="list__item" :style="[imageSize]">
            <div class="item square">
              <img :src="imagePath[imagePath.length - (COPY_COUNT - index)]" />
            </div>
          </div>
        </template>
        <!-- 本体 -->
        <template v-for="(e, index) in imagePath">
          <div :key="index" class="list__item" :style="[imageSize]">
            <div class="item square">
              <img :src="e" />
            </div>
          </div>
        </template>
        <!-- 最初の要素をコピー -->
        <template v-for="(e, index) in COPY_COUNT">
          <div :key="'after' + index" class="list__item" :style="[imageSize]">
            <div class="item square">
              <img :src="imagePath[index]" />
            </div>
          </div>
        </template>
      </div>
    </div>
    <div
      v-else
      class="box"
      :style="[boxSize]"
      @mousedown="onTouchStart"
      @touchstart="onTouchStart"
    >
      <div class="list" :style="[_listStyle, imageSize]">
        <template v-for="(e, index) in imagePath">
          <div :key="index" class="list__item" :style="[imageSize]">
            <div class="item square">
              <img :src="e" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Component, Vue, Prop, PropSync, Watch } from "vue-property-decorator";
import _ from "lodash";

@Component
export default class Carousel extends Vue {
  @Prop({
    type: Array as PropType<string[]>,
    default: () => [],
    required: true
  })
  imagePath;

  @Prop({ type: Boolean, default: false, required: false })
  isCarousel; // カルーセルするかどうか

  @Prop({
    type: Object as PropType<string>,
    default: () => ({ width: "240px" }),
    required: true
  })
  boxSize;

  @Prop({
    type: Object as PropType<string>,
    default: () => ({ width: "200px", height: "200px" }),
    required: true
  })
  imageSize;

  currentNum = 0;
  diffX = 0;
  startX: number | null = null;

  /* カルーセル有効の場合に必要なプロパティ */
  COPY_COUNT = 2; // コピーする数
  isAnimating = false;

  mounted(): void {
    // PC向け
    window.addEventListener("mousemove", this.onTouchMove);
    window.addEventListener("mouseup", this.onTouchUp);
    // スマホ向け
    window.addEventListener("touchmove", this.onTouchMove);
    window.addEventListener("touchend", this.onTouchUp);
  }

  beforeDestroy(): void {
    // PC向け
    window.removeEventListener("mousemove", this.onTouchMove);
    window.removeEventListener("mouseup", this.onTouchUp);
    // スマホ向け
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchUp);
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

  onTouchStart(e): void {
    if (e.touches && e.touches[0]) {
      this.startX = e.touches[0].clientX;
    } else if (e.originalEvent && e.originalEvent.changedTouches[0]) {
      this.startX = e.originalEvent.changedTouches[0].clientX;
    } else if (e.clientX) {
      this.startX = e.clientX;
    }
  }

  onTouchMove(e): void {
    if (this.startX == null) {
      return;
    }
    if (e.touches && e.touches[0]) {
      this.diffX = e.touches[0].clientX - this.startX;
    } else if (e.originalEvent && e.originalEvent.changedTouches[0]) {
      this.diffX = e.originalEvent.changedTouches[0].clientX - this.startX;
    } else if (e.clientX) {
      this.diffX = e.clientX - this.startX;
    }
  }

  onTouchUp(e): void {
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
.box {
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
