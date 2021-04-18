import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  render() {
    return h("p", {}, this.title);
  },
});
