import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";

let app = createApp(App);
app = app.use(router, VueMeta, { refreshOnceOnNavigation: true });
app.mount("#app");
