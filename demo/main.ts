import { createApp } from "vue";
import App from "./App.vue";
import vFocusDetect from "../src/index";

createApp(App)
    .use(vFocusDetect)
    .mount("#app");
