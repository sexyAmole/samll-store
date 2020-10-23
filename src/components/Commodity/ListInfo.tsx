// button.tsx
import { defineComponent } from "vue";
import "./index.less";
// interface ListInfoProps {
//   url?: "asdsad";
//   name?: string;
// }

const ListInfo = defineComponent({
  name: "AmiListInfo",
  props: {
    url: {
      type: String
    },
    name: {
      type: String
    }
  },
  setup(props) {
    return () => (
      <div class="ami_commodity">
        <img src={props.url} class="ami_commodity_img" />
        <span class="ami_commodity_text">{props.name}</span>
      </div>
    );
  }
});

export default ListInfo;
