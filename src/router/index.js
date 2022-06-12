import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HomeView from "../views/HomeView.vue";

const DEFAULT_TITLE = 'TRENDSSTROE'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: DEFAULT_TITLE
    }
  },
  {
    path: "/contents",
    name: "contents",
    component: () => import("../views/EmptyView.vue"),
    meta: {
      title: '콘텐츠 | ' + DEFAULT_TITLE
    }
  },
  {
    path: "/vod",
    name: "vod",
    component: () => import("../views/EmptyView.vue"),
    meta: {
      title: 'VOD | ' + DEFAULT_TITLE
    }
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/EmptyView.vue"),
    meta: {
      title: 'Shop | ' + DEFAULT_TITLE
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
