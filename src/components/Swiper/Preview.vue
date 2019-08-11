<template>
  <div class="swiper-preview">
    <template v-if="noImages">
      swiper - preivew
    </template>
    <template v-else>
      <el-carousel trigger="click" height="180px">
        <el-carousel-item v-for="item in data.images" :key="item._t">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    index: {
      type: Number
    }
  },
  computed: {
    noImages() {
      let {
        data: { images }
      } = this;
      return !images || !images.length;
    }
  }
};
</script>

<style lang="less" scoped>
img {
  display: block;
  width: 100%;
}
</style>
