<template>
  <div class="magic-preview">
    <template v-if="noImages">
      magic - preivew
    </template>
    <template v-else>
      <div class="row" v-for="(row, i) in rows" :key="i">
        <div class="col" v-for="(col, j) in getCols(row)" :key="i * row + j">
          <img :src="getImageData(i, j)" />
        </div>
        <template v-if="row === rows">
          <div
            class="col"
            v-for="(col, j) in getBlockLength"
            :key="data.images.length + j"
          ></div>
        </template>
      </div>
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
    },
    rows() {
      let {
        data: { column, images }
      } = this;
      return Math.ceil(images.length / column);
    },
    getBlockLength() {
      let {
        data: { column, images },
        rows
      } = this;
      return rows * column - images.length;
    }
  },
  methods: {
    getCols(row) {
      let {
        rows,
        data: { column, images }
      } = this;
      if (row < rows) {
        return column;
      } else {
        return column - (rows * column - images.length);
      }
    },
    getImageData(i, j) {
      let {
        data: { images, column }
      } = this;
      return images[i * column + j].url;
    }
  }
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  .col {
    flex: 1;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
