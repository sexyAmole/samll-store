<template>
  <div class="ami_layout">
    <page-head />
    <div class="ami_head_bg"></div>
    <div class="ami_layout_page">
      <page-menu></page-menu>
      <div class="ami_layout_center">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import PageMenu from "./PageMenu.vue";
import PageHead from "./PageHead.vue";

export default {
  name: "Layout",
  components: {
    PageMenu,
    PageHead
  }
};
</script>
<style lang="less" scoped>
.ami_layout {
  min-height: calc(100vh);
  background-color: #f8f8f8;
  .ami_head_bg {
    height: 60px;
  }
  .ami_layout_page {
    min-height: calc(100vh - 60px);
    display: flex;
    .ami_layout_center {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 14px;
    }
  }
}
</style>
