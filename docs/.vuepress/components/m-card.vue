<template>
  <div class="zm-card" :style="width ? {width: width + 'px'} : {}">
    <div class="zm-card-img" :style="imgHeight ? {imgHeight: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="zm-card-summary">
      summary
    </div>
    <div v-else class="zm-card-summary">
      <slot></slot>
    </div>
    <slot name="zm-card-footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ZmCard",
  props: {
    width: { // 卡片宽度
      type: Number,
      default: 0
    },
    imgSrc: { // 卡片图片资源地址
      type: String,
      default: '',
      required: true
    },
    imgHeight: { // 卡片图片高度
      type: Number,
      default: 0
    },
    summary: { // 卡片的概要
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss">
  @import "./zm-card.scss";
</style>
