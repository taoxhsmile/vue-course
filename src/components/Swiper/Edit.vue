<template>
  <div class="magic-edit">
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
    addImage() {
      let { index, data } = this;
      this.$emit("update", index, {
        ...data,
        images: [
          ...data.images,
          {
            url:
              "https://haitao.nos.netease.com/961aac91-9488-4abe-a667-5f75ad0c6ee9T1908091503_960_480.jpg?imageView&thumbnail=750x0&quality=95&type=webp",
            _t: Date.now()
          },
          {
            url:
              "https://haitao.nosdn2.127.net/5d4c3e29-be30-48f0-865f-1cce2e4a4124T1908091356_960_480.jpg?imageView&thumbnail=750x0&quality=95&type=webp",
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
