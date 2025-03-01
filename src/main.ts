import { createApp } from "vue";
import { createPinia } from "pinia";
import { createYmaps } from "vue-yandex-maps";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(createYmaps({ apikey: "6dc0eaa2-b378-4e77-9999-1cfdf124c037" }))
  .mount("#app");
