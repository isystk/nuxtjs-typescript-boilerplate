<template>
  <div>
    <div class="carousel" @mousedown="onMouseDown">
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
    "/img/sample1.jpg",
    "/img/sample2.jpg",
    "/img/sample1.jpg",
    "/img/sample2.jpg",
    "/img/sample1.jpg",
    "/img/sample2.jpg"
  ];

  currentNum = 0;
  diffX = 0;
  startX: number | null = null;

  mounted(): void {
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);
  }

  beforeDestroy(): void {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);
  }

  get _listStyle(): any {
    return {
      transition: this.startX == null ? "" : "none",
      transform: `translate3d(${-100 * this.currentNum}%, 0, 0) translate3d(${
        this.diffX
      }px, 0, 0)`
    };
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
      this.currentNum = Math.max(this.currentNum - 1, 0);
    }
    if (this.diffX < -20) {
      this.currentNum = Math.min(
        this.currentNum + 1,
        this.imagePath.length - 1
      );
    }
    this.diffX = 0;
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  padding: 10px;
  width: 300px;
  margin: 0 auto;
}

.carousel {
  border: solid 2px #ccc;
  overflow: hidden;
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

.inner {
  overflow: hidden;
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 20px;
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
