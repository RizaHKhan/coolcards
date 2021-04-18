import "./TiltingCard.scss";

import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const clickListener = () => {
      alert("i got clicked");
    };

    return () => {
      return h(
        "div",
        {
          class: "tiling-card",
          onClick: clickListener,
        },
        props.title
      );
    };
  },
});
