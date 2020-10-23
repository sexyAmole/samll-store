import { Breadcrumb, Tabs, Button, Input, Table, Select, Tag } from "ant-design-vue";

import LayoutPage from "../layouts/LayoutPage.vue";

export default {
  install: (app: any) => {
    app.use(Breadcrumb);
    app.use(Tabs);
    app.use(Button);
    app.use(Input);
    app.use(Table);
    app.use(Tag);
    app.use(Select);
    app.component(LayoutPage.name, LayoutPage);
  }
};
