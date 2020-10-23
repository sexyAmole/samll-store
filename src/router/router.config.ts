import { Layout } from "@/layouts";
/**
 * @description: 基础路由
 * @param {type}
 * @return {type}
 */
export const constantRouterMap = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页"
    },
    component: Layout,
    children: [
      //商品管理
      {
        path: "/commodity/management",
        name: "Management",
        meta: {
          title: "商品管理"
        },
        component: () => import("@/views/commodity/Management.vue")
      },
      {
        path: "/commodity/import",
        name: "ManagementImport",
        meta: {
          title: "商品列表"
        },
        redirect: "/commodity/management",
        component: () => import("@/views/commodity/import/Layout.vue"),
        children: [
          {
            path: "/commodity/import-good",
            name: "ImportGood",
            meta: {
              title: "商品导入"
            },
            component: () => import("@/views/commodity/import/Good.vue")
          },
          {
            path: "/commodity/import-link",
            name: "ImportLink",
            meta: {
              title: "链接导入"
            },
            component: () => import("@/views/commodity/import/Link.vue")
          }
        ]
      }
    ]
  }
];
