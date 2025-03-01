import { createApp } from "vue";
import { createPinia } from "pinia";
import { createYmaps } from "vue-yandex-maps";
import "./style.css";
import "./assets/styles/reset.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

function loadTelegramSDK(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (window.Telegram && window.Telegram.WebApp) {
      resolve(window.Telegram.WebApp);
    } else {
      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-web-app.js";
      script.async = true;

      script.onload = () => {
        resolve(window.Telegram.WebApp);
      };
      script.onerror = () => {
        reject(new Error("Failed to load Telegram WebApp SDK"));
      };

      document.head.appendChild(script);
    }
  });
}

loadTelegramSDK()
  .then((tg) => {
    createApp(App)
      .use(router)
      .use(pinia)
      .use(createYmaps({ apikey: "6dc0eaa2-b378-4e77-9999-1cfdf124c037" }))
      .mount("#app");

      if (tg) {
        tg.expand();
        tg.setupSwipeBehavior({ allow_vertical_swipe: false });
      }
  })
  .catch((error) => {
    console.error("Error loading Telegram SDK:", error);
    createApp(App)
      .use(router)
      .use(pinia)
      .use(createYmaps({ apikey: "6dc0eaa2-b378-4e77-9999-1cfdf124c037" }))
      .mount("#app");
  });
