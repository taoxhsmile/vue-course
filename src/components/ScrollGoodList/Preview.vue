<template>
  <div class="scrollgoodlist-preview">
    <template v-if="noGoods">
      scrollgoodlist - preivew
    </template>
    <template v-else>
      <div class="main-image" v-if="data.image">
        <img :src="data.image.url" />
      </div>
      <div class="list-wrap">
        <ul :style="{ width: (data.goods.length + 1) * 105 + 30 + 'px' }">
          <li v-for="good in data.goods" :key="good._t">
            <img :src="good.image" />
            <p class="title">{{ good.title }}</p>
            <p class="price">¥{{ good.price / 100 }}</p>
          </li>
          <li class="more">查看更多</li>
        </ul>
        <div style="clear:both;"></div>
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
.scrollgoodlist-preview {
  background: #f2f2f2;
}
.main-image {
  img {
    display: block;
    width: 100%;
  }
}
.list-wrap {
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: -50px;
  position: relative;
  z-index: 1;
}
ul {
  padding: 0;
  &:before,
  &:after {
    content: "";
    float: left;
    width: 15px;
    height: 206px;
  }
  li {
    width: 105px;
    box-sizing: border-box;
    float: left;
    border: 1px solid #ececec;
    box-shadow: 0 0.026667rem 0.08rem 0 #f2f2f2;
    background-color: #fff;
    height: 174px;
    img {
      display: block;
      width: 105px;
      height: 105px;
    }
    p {
      padding: 0 5px;
    }
    .title {
      font-size: 12px;
      height: 14px;
      line-height: 14px;
      overflow: hidden;
    }
    .price {
      font-size: 12px;
      color: red;
    }
  }
}
</style>
