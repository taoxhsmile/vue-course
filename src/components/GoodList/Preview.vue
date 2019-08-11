<template>
  <div class="goodlist-preview">
    <template v-if="noGoods">
      goodlist - preivew
    </template>
    <template v-else>
      <div class="row" v-for="(row, i) in rows" :key="i">
        <div class="col" v-for="(col, j) in getCols(row)" :key="i * row + j">
          <img :src="getGoodData(i, j).image" />
          <p class="title">{{ getGoodData(i, j).title }}</p>
          <p class="price">¥{{ getGoodData(i, j).price }}</p>
        </div>
        <template v-if="row === rows">
          <div
            class="col"
            v-for="(col, j) in getBlockLength"
            :key="data.goods.length + j"
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
    noGoods() {
      let {
        data: { goods }
      } = this;
      return !goods || !goods.length;
    },
    rows() {
      let {
        data: { column, goods }
      } = this;
      return Math.ceil(goods.length / column);
    },
    getBlockLength() {
      let {
        data: { column, goods },
        rows
      } = this;
      return rows * column - goods.length;
    }
  },
  methods: {
    getCols(row) {
      let {
        rows,
        data: { column, goods }
      } = this;
      if (row < rows) {
        return column;
      } else {
        return column - (rows * column - goods.length);
      }
    },
    getGoodData(i, j) {
      let {
        data: { goods, column }
      } = this;
      return goods[i * column + j];
    }
  }
};
</script>

<style lang="less" scoped>
.goodlist-preview {
  background: #f2f2f2;
}
.row {
  display: flex;
  .col {
    flex: 0 0 170px;
    background: white;
    margin-left: 10px;
    border: 1px solid #ececec;
    margin-top: 10px;
    img {
      display: block;
      width: 100%;
      height: 140px;
    }
    p {
      padding: 0 10px;
    }
    .title {
      font-size: 14px;
    }
    .price {
      font-size: 17px;
      color: red;
    }
  }
}
</style>
