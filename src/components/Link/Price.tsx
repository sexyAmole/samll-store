// button.tsx
import { defineComponent } from "vue";
import "./index.less";

const priceProps = {
  text: {
    type: [Number, String],
    default: ""
  },
  type: {
    type: String,
    default: "primary"
  }
};

const Price = defineComponent({
  name: "AmiPrice",
  props: priceProps,
  setup(props) {
    const cls = `ami_price_${props.type}`;
    return () => <span class={`ami_price ${cls}`}>¥{props.text}</span>;
  }
});

export default Price;
