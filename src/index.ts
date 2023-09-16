import { App } from "vue";
import FocusDetect from "./FocusDetect.vue";

/**
 * install focus detect plugin
 * @param component component name
 */
export default {
    install: (app: App) => {
        app.component("focus-detect", FocusDetect);
    }
};
export { FocusDetect };
