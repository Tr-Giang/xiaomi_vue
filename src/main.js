import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import NavMiVue from "@/components/NavMiVue.vue";
import FooterMi from "./components/FooterMi.vue";
import FindMoreMi from "./components/mainComponents/FindMoreMi.vue";
import BannerMi from "./components/mainComponents/BannerMi.vue";
import BannerTextMi from "./components/mainComponents/BannerTextMi.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/sass/main.scss";

const app = createApp(App);
app.component("nav-mi-vue", NavMiVue);
app.component("footer-mi", FooterMi);
app.component("banner-mi", BannerMi);
app.component("banner-text-mi", BannerTextMi);
app.component("find-more-mi", FindMoreMi);
app.use(router).mount("#app");