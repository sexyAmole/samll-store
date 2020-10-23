import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import antUse from "./core/ant_use";
import "./styles/global.less";

import request from "./utils/axios";

if (process.env.NODE_ENV !== "production") {
  require("./mock/index.js");
}

const app = createApp(App);

//全局注入 axios
app.config.globalProperties.$axios = request;

app.use(router);
app.use(antUse);

app.config.warnHandler = function(msg, vm, trace) {
  console.log(msg, vm);
  // `trace` is the component hierarchy trace
};

app.mount("#app");

// 1、处理路由
// 2、错了错误
// 3、错误页面
