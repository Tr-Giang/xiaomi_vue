import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import NavMiVue from "@/components/NavMiVue.vue";
import FooterMi from "./components/FooterMi.vue";
import FindMoreMi from "./components/mainComponents/FindMoreMi.vue";
import BannerMi from "./components/mainComponents/BannerMi.vue";
import MainShowHeader from "./components/mainComponents/MainShowHeader.vue";
import MainShowMi from "./components/mainComponents/MainShowMi.vue";
import ProductMi from "./components/mainComponents/ProductMi.vue";
import ProductsShow from "./components/mainComponents/ProductsShow.vue";
import ProductsShow2 from "./components/mainComponents/ProductsShow2.vue";
import BannerTextMi from "./components/mainComponents/BannerTextMi.vue";
import BannerTextMiDark from "./components/mainComponents/BannerTextMiDark.vue";
import CarouselMi from "./components/mainComponents/CarouselMi.vue";
import ButtonNoBorder from "./components/baseComponents/ButtonNoBorder.vue";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/sass/main.scss";

const app = createApp(App);
const pinia = createPinia();

app.component("nav-mi-vue", NavMiVue);
app.component("footer-mi", FooterMi);
app.component("banner-mi", BannerMi);
app.component("main-show-mi", MainShowMi);
app.component("product-mi", ProductMi);
app.component("products-show", ProductsShow);
app.component("products-show2", ProductsShow2);
app.component("main-show-header", MainShowHeader);
app.component("banner-text-mi", BannerTextMi);
app.component("banner-text-mi-dark", BannerTextMiDark);
app.component("find-more-mi", FindMoreMi);
app.component("carousel-mi", CarouselMi);
app.component("button-no-border", ButtonNoBorder);
app.use(router).use(pinia).mount("#app");
