<template>
  <div class="ami_layouts_menu">
    <!-- <div class="ami_layouts_menu_logo">
      <img src="../assets/logo.png" class="ami_layouts_logo_img" alt="" />
    </div> -->
    <div class="ami_layouts_menu_warp">
      <ul class="ami_layouts_lmwul">
        <li class="ami_layouts_lmwul_li " :class="getCurrentPath(index)" v-for="(item, index) in menu" :key="index">
          <a class="ami_layouts_lmwull" href="#">
            <i class="iconfont " :class="item.icon"></i>
            <span class="ami_layouts_lmwull_text">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="ami_layouts_menu_bottom"></div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "PageMenu",
  setup() {
    const currentPath = ref(0);

    const getCurrentPath = (index: number) => {
      // console.log(index);
      return currentPath.value === index && "ami_layouts_lmwul_li_active";
    };

    return {
      currentPath,
      getCurrentPath,
      menu: [
        { name: "首页", icon: "iconshouye1", path: "" },
        { name: "商品", icon: "iconshangpin1", path: "" },
        { name: "订单", icon: "iconAK-MNdingdan_fill1", path: "" },
        { name: "营销", icon: "iconyingxiao1", path: "" },
        { name: "统计", icon: "icontongji1", path: "" },
        { name: "会员", icon: "iconhuiyuan1", path: "" },
        { name: "财务", icon: "iconcaiwu1", path: "" },
        { name: "设置", icon: "iconshezhi1", path: "" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.ami_layouts_menu {
  width: 128px;
  background: #fafbfe;
  border-right: 1px solid #ebeef5;
  display: flex;
  flex-direction: column;

  .ami_layouts_menu_logo,
  .ami_layouts_menu_bottom {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ami_layouts_menu_warp {
    flex: 1;
    overflow: hidden auto;
  }
}

.ami_layouts_lmwul {
  margin-top: 10px;
  .ami_layouts_lmwul_li {
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    &:hover {
      .iconfont {
        color: #409eff;
        // background: #409eff;
      }

      .ami_layouts_lmwull_text {
        color: #409eff;
        // background: #409eff;
      }
    }
    .ami_layouts_lmwull {
      width: 98px;
      height: 38px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      text-decoration: none;
      color: rgba(48, 49, 51, 0.8);
    }
  }
}

.ami_layouts_lmwul_li_active {
  .ami_layouts_lmwull {
    color: #fff;
    background: #409eff;
    border-radius: 24px;
  }
  .iconfont {
    color: #fff !important;
  }

  .ami_layouts_lmwull_text {
    color: #fff !important;
  }
}

.ami_layouts_lmwull {
  .iconfont {
    font-size: 18px;
    color: rgba(48, 49, 51, 0.8);
    margin-right: 12px;
  }

  .ami_layouts_lmwull_text {
    font-size: 14px;
    color: rgba(48, 49, 51, 0.8);
    font-weight: 500;
  }
}
</style>
