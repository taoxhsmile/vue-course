<template>
  <div class="scrollgoodlist-edit">
    <div class="img" v-if="data.image" @click="removeImage">
      <img :src="data.image.url" />
    </div>
    <el-button v-else type="primary" @click="addImage">上传主图</el-button>

    <div class="goods-list">
      <ul>
        <li
          v-for="(good, i) in data.goods"
          :key="good._t"
          @click="removeGood(i)"
        >
          <img :src="good.image" />
          <p class="title">{{ good.title }}</p>
          <p class="price">¥{{ good.price / 100 }}</p>
        </li>
      </ul>
    </div>

    <div>
      <el-button type="primary" @click="addGood">上传商品</el-button>
    </div>
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
  methods: {
    addImage() {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        image: {
          url:
            "https://haitao.nosdn2.127.net/eaf0e735-fc74-4cac-86a5-a2348b9a9e04T1908091357_960_480.jpg?imageView&thumbnail=750x0&quality=95&type=webp"
        }
      });
    },
    removeImage() {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        image: null
      });
    },
    addGood() {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        goods: [
          ...data.goods,
          {
            image:
              "https://haitao.nosdn1.127.net/efaed105f39b4cc3ad6a1f065ac520221556605490573jv3epvg111345.jpg?imageView&thumbnail=345x345&quality=95&type=webp",
            title:
              "【李现同款人气防晒】NARIS UP 娜丽丝 清爽嫩白隔离保湿防晒喷雾 90克",
            price: 7900,
            _t: Date.now()
          },
          {
            image:
              "https://haitao.nosdn2.127.net/66b24ded2fc34cf2a6e7dc4696084a321554808896936ju9p2mwz10301.jpg?imageView&thumbnail=345x345&quality=95&type=webp",
            title: "SHISEIDO 资生堂 红妍肌活精华露 50毫升",
            price: 69900,
            _t: Date.now() + 1
          }
        ]
      });
    },
    removeGood(i) {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        goods: data.goods.filter((good, _i) => {
          return i !== _i;
        })
      });
    }
  }
};
</script>
<style lang="less" scoped>
.img {
  position: relative;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
  &:after {
    content: "删除";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 14px;
    display: none;
  }
  &:hover:after {
    display: flex;
  }
}
.goods-list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 0 0 150px;
      border: 1px solid #ccc;
      margin: 5px;
      position: relative;
      cursor: pointer;
      img {
        display: block;
        width: 150px;
        height: 150px;
      }
      p {
        padding: 0 10px;
      }
      .title {
        font-size: 14px;
      }
      .price {
        font-size: 12px;
        color: red;
      }
      &:after {
        content: "删除";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        font-size: 14px;
        display: none;
      }
      &:hover:after {
        display: flex;
      }
    }
  }
}
</style>
