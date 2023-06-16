import Vue from "vue";

import "bootstrap/dist/css/bootstrap.css"; // 引入Bootstrap样式文件
import "bootstrap"; // 引入Bootstrap JavaScript文件
// import $ from 'jquery'; // 引入jQuery，并将其绑定到全局变量$

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VueResource from "vue-resource";

import router from "./router/index";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueResource);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
