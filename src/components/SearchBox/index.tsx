// button.tsx
import { defineComponent } from "vue";
import "./index.less";

const SearchBox = defineComponent({
  name: "AmiSearchBox",
  setup(props, { slots }: any) {
    return () => (
      <div class="ami_searchBox">
        {slots.left && slots.left()}
        {slots.right && slots.right()}
      </div>
    );
  }
});

export default SearchBox;
