<template>
  <div class="search-preview">
    <img :src="require('@/assets/search-bar.png')" />
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
  }
};
</script>

<style lang="less" scoped>
.search-preview {
  img {
    display: block;
    width: 100%;
  }
}
</style>
