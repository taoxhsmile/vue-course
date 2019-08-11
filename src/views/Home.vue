<template>
  <div class="home">
    <div class="left">
      <div class="preview">
        <template v-for="(componentData, i) in list">
          <div
            class="preview-item"
            :key="componentData._t"
            @click="changeActiveIndex(i)"
          >
            <component
              :data="componentData"
              :index="i"
              :is="getPreivew(componentData)"
            ></component>
          </div>
        </template>
      </div>
      <div class="buttons">
        <button @click="addComponent('Magic')">魔方</button>
        <button @click="addComponent('Swiper')">轮播图</button>
        <button @click="addComponent('GoodList')">商品列表</button>
        <button @click="addComponent('Search')">搜索条</button>
      </div>
    </div>

    <div class="right">
      <div class="edit" v-if="activeIndex > -1">
        <component
          :is="getEdit()"
          :data="editComponent"
          :index="activeIndex"
          @update="updateComponentData"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import Components from "../components/index.js";
export default {
  name: "home",
  data() {
    return {
      list: [],
      activeIndex: -1
    };
  },
  computed: {
    editComponent() {
      let { list, activeIndex } = this;
      return list[activeIndex];
    }
  },
  methods: {
    getPreivew(componentData) {
      let { type } = componentData;
      return Components[type].Preview;
    },
    getEdit() {
      let { type } = this.editComponent;
      return Components[type].Edit;
    },
    addComponent(type) {
      let { defaultData } = Components[type];
      this.list.push({
        ...defaultData,
        _t: Date.now()
      });
    },
    changeActiveIndex(i) {
      this.activeIndex = i;
    },
    updateComponentData(index, newData) {
      this.list.splice(index, 1, newData);
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  .left {
    float: left;
    margin-left: 200px;
    .preview {
      width: 375px;
      height: 667px;
      border: 1px solid #ccc;
      .buttons {
        border: 1px dashed #ccc;
      }
    }
  }
  .right {
    width: 400px;
    height: 667px;
    border: 1px solid #ccc;
    float: left;
    margin-left: 40px;
  }
}
</style>
