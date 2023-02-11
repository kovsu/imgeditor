import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);
app.component("Icon", Icon);
app.use(router);
app.use(autoAnimatePlugin);
app.mount("#app");
