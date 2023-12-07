import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HomeMi from "../views/HomeMi.vue";
import SmartHouseMi from "../views/SmartHouseMi.vue";
import StyleLifeMi from "../views/StyleLifeMi.vue";
import NotFoundMi from "../views/NotFoundMi.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeMi,
    meta: {
      title: "Xiaomi Việt Nam | Trang web chính thức của Xiaomi",
    },
  },
  {
    path: "/phone",
    name: "phone",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PhoneMi.vue"),
    meta: {
      title: "Xiaomi Việt Nam | Phone Mi",
    },
  },
  {
    path: "/smart-house",
    name: "smart house",
    component: SmartHouseMi,
    meta: {
      title: "Xiaomi Việt Nam | Smart House",
    },
  },
  {
    path: "/style-life",
    name: "style life",
    component: StyleLifeMi,
    meta: {
      title: "Xiaomi Việt Nam | Style Life",
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundMi },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || process.env.VUE_APP_DEFAULT_TITLE;
  });
});

export default router;
