<template>
  <ami-search-box>
    <template v-slot:left>
      <a-select style="width: 180px" ref="select">
        <a-select-option value="jack">
          Jack
        </a-select-option>
      </a-select>
    </template>
  </ami-search-box>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import AmiSearchBox from "@/components/SearchBox";
import { getCommodityLibraryList } from "@/api/commodity";
export default {
  components: { AmiSearchBox },
  data() {
    return {
      name: "ss"
    };
  },
  setup() {
    const list = ref<any>([]);
    const getUserRepositories = async () => {
      list.value = await getCommodityLibraryList();
    };

    onMounted(getUserRepositories);

    const columns = [
      { title: "商品信息", dataIndex: "name", width: "320px", key: "name", slots: { customRender: "name" } },
      { title: "价格", dataIndex: "marketPrice", key: "marketPrice", slots: { customRender: "marketPrice" } },
      { title: "市场价", dataIndex: "salesPrice", key: "salesPrice", slots: { customRender: "salesPrice" } },
      { title: "分类", key: "classify", dataIndex: "classify" },
      { title: "标签", key: "label", dataIndex: "label", slots: { customRender: "label" } },
      { title: "价格", key: "price", dataIndex: "price", slots: { customRender: "price" } },
      { title: "操作", key: "action", slots: { customRender: "action" } }
    ];

    const rowSelection = {
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
      },
      onSelect: (record: any, selected: any, selectedRows: any) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
        console.log(selected, selectedRows, changeRows);
      }
    };
    return {
      columns,
      list,
      rowSelection
    };
  }
};
</script>

<style lang="less" scoped></style>
