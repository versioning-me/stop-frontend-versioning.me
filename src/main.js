import Vue from "vue";
import App from "./App.vue";
import VueHead from "vue-head";

import router from "./router";

Vue.config.productionTip = false;

// vue-head
Vue.use(VueHead);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// v-scroll
Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});
