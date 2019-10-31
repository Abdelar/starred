import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarCheck, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faCalendarCheck, faStar);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
