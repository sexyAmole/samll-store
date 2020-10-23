// button.tsx
import { defineComponent } from "vue";
import "./index.less";
const LinkA = defineComponent({
  name: "AmiLink",
  props: {
    text: {
      type: String
    }
  },
  setup(props, { slots }: any) {
    return () => <a class="ami_link_a">{slots.default()}</a>;
  }
});

export default LinkA;
