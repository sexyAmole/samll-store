<template>
  <div class="ami_layout_head">
    <div class="ami_layouts_menu_logo">
      <img src="../assets/logo.png" class="ami_layouts_logo_img" alt="" />
    </div>
    <ul class="ami_right_ul">
      <li class="ami_right_ul_li"><a class="ami_rul_box">消息</a></li>
      <li class="ami_right_ul_li">
        <a class="ami_rul_box ami_rul_user">
          <img class="ami_rul_user_img" src="../assets/logo.png" alt="" />
          <span class="ami_rul_user_name">微信小程序</span>
        </a>
      </li>
    </ul>
    <!-- <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in getRoutes" :key="index">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </a-breadcrumb-item>
    </a-breadcrumb> -->
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
// import { computed } from "vue";
export default {
  name: "PageHead",
  setup() {
    // const route = useRoute();
    // const getRoutes = computed(() => {
    //   const routes = route.matched.concat().map(function(route) {
    //     return {
    //       path: route.path,
    //       name: route.meta.title
    //     };
    //   });
    //   return routes;
    // });
    // return {
    //   getRoutes
    // };
  }
};
</script>

<style lang="less" scoped>
.ami_layout_head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  z-index: 100;
  box-shadow: 0px 0 6px 0 #f2f2f2;
}

.ami_layouts_menu_logo {
  // background-color: #409eff;
  .ami_layouts_logo_img {
    width: 141px;
  }
}
.ami_right_ul {
  height: 100%;
  display: flex;
  .ami_right_ul_li {
    display: flex;
    .ami_rul_box {
      padding: 0 16px;
      display: flex;
      align-items: center;
      font-weight: bold;
      color: #333;
    }
  }
  .ami_rul_user {
    .ami_rul_user_img {
      margin-right: 16px;
      width: 42px;
      height: 42px;
      overflow: hidden;
    }
    .ami_rul_user_name {
      font-weight: bold;
    }
  }
}
</style>
