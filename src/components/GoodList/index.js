export default {
  Edit: () => import("./Edit.vue"),
  Preview: () => import("./Preview.vue"),
  defaultData: {
    type: "GoodList",
    column: 2,
    goods: []
  }
};
