<template>
  <ami-layout-page>
    <a-tabs class="ami_tabs">
      <a-tab-pane key="1" tab="全部商品" />
      <a-tab-pane key="2" tab="上架中" />
      <a-tab-pane key="3" tab="已下架" />
      <a-tab-pane key="4" tab="待上架" />
    </a-tabs>
    <ami-search-box type="primary">
      <template v-slot:left>
        <div class="ami_button_combined">
          <a-button type="primary">
            删除
          </a-button>
          <a-button>
            上架
          </a-button>
          <a-button>
            下架
          </a-button>
          <a-button type="primary">
            新增商品
          </a-button>
        </div>
      </template>
      <template v-slot:right>
        <a-input-search placeholder="input search text" enter-button style="width:398px" />
      </template>
    </ami-search-box>
    <div class="ami_page_table">
      <a-table :columns="columns" :data-source="data"></a-table>
    </div>
  </ami-layout-page>
</template>

<script lang="ts">
import AmiSearchBox from "../../components/SearchBox/index";

export default {
  components: { AmiSearchBox },
  setup() {
    const columns = [
      {
        dataIndex: "name",
        key: "name",
        slots: { title: "customTitle", customRender: "name" }
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        slots: { customRender: "tags" }
      },
      {
        title: "Action",
        key: "action",
        slots: { customRender: "action" }
      }
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      }
    ];

    return {
      columns,
      data
    };
  }
};
</script>

<style lang="less" scoped></style>
