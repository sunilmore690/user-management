import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
