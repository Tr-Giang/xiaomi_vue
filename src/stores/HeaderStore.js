import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
  state: () => ({
    isOverlay: false,
    isShowNav: false,
    isIcon: false,
  }),
  getters: {
    isPhone() {
      return window.innerWidth <= 768 ? true : false;
    },
  },
  actions: {
    openOverlay() {
      this.isOverlay = true;
    },
    closeOverlay() {
      this.isOverlay = false;
    },
  },
});
