import { createApp } from "vue";
import { createPinia } from "pinia";
import { createYmaps } from "vue-yandex-maps";
import "./style.css";
import "./assets/styles/reset.css";
import App from "./App.vue";
import router from "./router";
import { VueTelegramPlugin } from "vue-tg";

const pinia = createPinia();

const app = createApp(App)

app.use(router)
app.use(VueTelegramPlugin)
app.use(pinia)
app.use(createYmaps({ apikey: "6dc0eaa2-b378-4e77-9999-1cfdf124c037" }))
app.mount("#app");
