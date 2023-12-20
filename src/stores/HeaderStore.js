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
      if (!this.isPhone) {
        this.isOverlay = true;
      }
    },
    closeOverlay() {
      if (!this.isPhone) {
        this.isOverlay = false;
      }
    },
  },
});
