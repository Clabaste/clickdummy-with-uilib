import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "de-zurich-z21b-ui-library/dist/de-zurich-z21b-ui-library.css";

createApp(App).use(store).use(router).mount("#app");
