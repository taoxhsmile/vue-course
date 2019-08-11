<template>
  <div class="magic-edit">
    <div>
      列数：
      <el-input-number
        :value="data.column"
        @change="handleChange"
        :min="1"
        :max="5"
      ></el-input-number>
    </div>

    <div class="image-list">
      <ul>
        <li
          v-for="(image, i) in data.images"
          :key="image._t"
          @click="removeImage(i)"
        >
          <img :src="image.url" />
        </li>
      </ul>
    </div>

    <div>
      <el-button type="primary" @click="addImage">上传图片</el-button>
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
    handleChange(val) {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        column: val
      });
    },
    addImage() {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        images: [
          ...data.images,
          {
            url:
              "https://haitao.nosdn1.127.net/be97e628-df3a-4b31-82ee-edf3686883d2T1907021531_192_220.png?imageView&thumbnail=192x220&quality=95",
            _t: Date.now()
          },
          {
            url:
              "https://haitao.nosdn1.127.net/5ee97ce7-9c93-4f79-8ca5-1a1de0cc85afT1907021609_192_220.png?imageView&thumbnail=192x220&quality=95",
            _t: Date.now() + 1
          }
        ]
      });
    },
    removeImage(i) {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        images: data.images.filter((image, _i) => {
          return i !== _i;
        })
      });
    }
  }
};
</script>
<style lang="less" scoped>
.image-list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 0 0 50px;
      border: 1px solid #ccc;
      margin: 5px;
      position: relative;
      cursor: pointer;
      img {
        display: block;
        width: 50px;
        height: 50px;
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
