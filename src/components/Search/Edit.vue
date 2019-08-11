<template>
  <div class="search-edit">
    搜索条edit
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
<style lang="less" scoped></style>
