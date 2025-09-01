import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
//cargo en app el router
app.use(router);
app.mount("#app");
