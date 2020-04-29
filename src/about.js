import Vue from "vue";
import About from "./About.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(About),
}).$mount("#app");
