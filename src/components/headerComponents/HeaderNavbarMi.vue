<template>
  <li
    class="header__navbar__item"
    @mouseover="store.openOverlay"
    @mouseout="store.closeOverlay"
  >
    <router-link
      :to="dynamicLink"
      @click="handleSubnav"
      class="header__navbar__link"
      ><span>
        <slot name="name"></slot>
      </span>
      <div>
        <i class="fa-solid fa-plus" v-if="store.isPhone && !openSubnav"></i
        ><i
          class="fa-solid fa-minus"
          v-if="store.isPhone && openSubnav"
        ></i></div
    ></router-link>
    <div
      class="header__navbar__subnav__box"
      :style="{ height: store.isPhone ? `${heightSubnav}px` : '' }"
    >
      <ul class="header__navbar__item__subnav">
        <slot name="subnav"></slot>
      </ul>
    </div>
  </li>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useHeaderStore } from "@/stores/HeaderStore";
export default {
  props: ["nav"],
  setup(props) {
    const store = useHeaderStore();
    const openSubnav = ref(false);
    const heightSubnav = ref(0);

    const dynamicLink = computed(() => {
      if (props.nav == "Điện thoại") {
        return "/phone";
      } else if (props.nav == "Nhà thông minh") {
        return "/smart-house";
      } else if (props.nav == "Phong cách sống") {
        return "/style-life";
      }
      return "";
    });

    function handleSubnav(e) {
      if (store.isPhone) {
        e.stopPropagation();
        e.preventDefault();
        openSubnav.value = !openSubnav.value;
        if (openSubnav.value === true) {
          if (e.target.classList.contains("header__navbar__link")) {
            heightSubnav.value =
              e.target.nextElementSibling.firstElementChild.clientHeight;
          } else if (
            e.target.parentNode.classList.contains("header__navbar__link")
          ) {
            heightSubnav.value =
              e.target.parentNode.nextElementSibling.firstElementChild.clientHeight;
          } else if (
            e.target.parentNode.parentNode.classList.contains(
              "header__navbar__link"
            )
          ) {
            heightSubnav.value =
              e.target.parentNode.parentNode.nextElementSibling.firstElementChild.clientHeight;
          }
        } else {
          heightSubnav.value = 0;
        }
      }
    }
    watch(
      () => store.isShowNav,
      (newValue) => {
        if (!newValue) {
          openSubnav.value = false;
          heightSubnav.value = 0;
        }
      }
    );

    return {
      openSubnav,
      heightSubnav,
      handleSubnav,
      dynamicLink,
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
