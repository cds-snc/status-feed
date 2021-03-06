import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    fr: fr,
  },
});
const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount("#app");
