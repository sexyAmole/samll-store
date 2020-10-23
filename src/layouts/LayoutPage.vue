<template>
  <div class="ami_layoutPage">
    <div class="ami_layoutPage_center">
      <!-- :breadcrumb="{ routes: getRoutes }" -->
      <a-breadcrumb class="ami_breadcrumb">
        <a-breadcrumb-item v-for="(item, index) in getRoutes" :key="index">
          <router-link :to="item.path">
            <LeftOutlined v-if="getReturnIcon(index)" />
            {{ item.breadcrumbName }}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>

      <!-- <page-header :title="getRoutes[getRoutes.length - 1].breadcrumbName"> </page-header> -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { LeftOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "AmiLayoutPage",
  components: { LeftOutlined },
  setup() {
    const route = useRoute();
    const getRoutes = computed(() => {
      const routes: Array<any> = [];
      route.matched.concat().map(function(route) {
        if (route.path !== "/") {
          routes.push({
            path: route.path,
            breadcrumbName: route.meta.title
          });
        }
      });
      return routes;
    });
    //computed(
    const getReturnIcon = (index: number) => {
      if (index === 0 && getRoutes.value.length) {
        return true;
      }
    };

    return {
      getRoutes,
      getReturnIcon
    };
  }
};
</script>

<style lang="less" scoped>
.ami_layoutPage {
  height: 100%;
  .ami_layoutPage_center {
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 8px #e7e7e7;
  }
}
</style>
