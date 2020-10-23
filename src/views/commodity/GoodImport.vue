<template>
  <ami-layout-page>
    <a-tabs class="ami_tabs" activeKey="2">
      <a-tab-pane key="1" tab="第三方链接导入" />
      <a-tab-pane key="2" tab="商品库导入" />
    </a-tabs>
    <ami-search-box type="primary">
      <template v-slot:left>
        <a-select style="width: 180px" ref="select">
          <a-select-option value="jack">
            Jack
          </a-select-option>
        </a-select>
      </template>
    </ami-search-box>
    <div class="ami_page_table">
      <a-table :columns="columns" :data-source="list" :row-selection="rowSelection">
        <template v-slot:name="{ record }">
          <ami-list-info :url="record.url" :name="record.name"></ami-list-info>
        </template>

        <template v-slot:marketPrice="{ text }">
          <ami-price :text="text" type="market" />
        </template>
        <template v-slot:salesPrice="{ text }">
          <ami-price :text="text" type="sales" />
        </template>
        <template v-slot:price="{ text }">
          <ami-price :text="text" />
        </template>

        <template v-slot:label="{ text }">
          <a-tag color="pink">
            {{ text }}
          </a-tag>
        </template>
        <template v-slot:action="{ record }">
          <ami-link-a @click="record">导入</ami-link-a>
          <!-- <a-button type="link">导入</a-button> -->
        </template>
      </a-table>
    </div>
  </ami-layout-page>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import AmiSearchBox from "../../components/SearchBox/index";
import AmiListInfo from "../../components/Commodity/ListInfo";

import AmiLinkA from "../../components/Link/LinkA";
import AmiPrice from "../../components/Link/Price";

import { getCommodityLibraryList } from "@/api/commodity";
export default {
  components: { AmiSearchBox, AmiListInfo, AmiLinkA, AmiPrice },
  data() {
    return {
      name: "ss"
    };
  },
  // mounted() {
  //   console.log(this); // 'bar'
  // },
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
