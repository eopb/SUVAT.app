import Vue from "vue";
import AboutPage from "./About.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(AboutPage),
}).$mount("#app");
