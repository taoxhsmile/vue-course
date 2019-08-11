export default {
  Edit: () => import("./Edit.vue"),
  Preview: () => import("./Preview.vue"),
  defaultData: {
    type: "ScrollGoodList",
    image: null,
    goods: []
  }
};
