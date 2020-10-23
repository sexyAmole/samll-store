<template>
  <ami-layout-page>
    <a-tabs class="ami_tabs" :activeKey="currentRoute" @change="tabChange">
      <a-tab-pane key="1" tab="第三方链接导入" />
      <a-tab-pane key="2" tab="商品库导入" />
    </a-tabs>
    <router-view />
  </ami-layout-page>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "ManagementImport",
  setup() {
    const router = useRouter();
    const getActiveKey = (path: string) => {
      switch (path) {
        case "/commodity/import-link":
          return "1";
        case "/commodity/import-good":
          return "2";
        default:
          return "1";
      }
    };

    const tabChange = (key: string) => {
      currentRoute.value = key;
      router.push(key === "1" ? "/commodity/import-link" : "/commodity/import-good");
    };
    let currentRoute = ref<string>("1");
    currentRoute.value = getActiveKey(useRoute().path);
    return {
      currentRoute,
      tabChange
    };
  }
};
</script>

<style lang="less" scoped></style>
