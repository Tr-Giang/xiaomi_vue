<template>
  <li class="header__navbar__item">
    <router-link
      :to="dynamicLink"
      @click="handleSubnav"
      class="header__navbar__link"
      ><span>
        <slot name="name"></slot>
      </span>
      <div>
        <i class="fa-solid fa-plus" v-if="isPhoneScreen && !openSubnav"></i
        ><i
          class="fa-solid fa-minus"
          v-if="isPhoneScreen && openSubnav"
        ></i></div
    ></router-link>
    <div
      class="header__navbar__subnav__box"
      :style="{ height: isPhoneScreen ? heightSubnav : '' + 'px' }"
    >
      <ul class="header__navbar__item__subnav">
        <slot name="subnav"></slot>
      </ul>
    </div>
  </li>
</template>

<script>
import { ref, computed } from "vue";
export default {
  props: ["nav"],
  setup(props, { emit }) {
    const openSubnav = ref(false);
    const heightSubnav = ref(0);
    let isPhoneScreen = computed(() =>
      window.innerWidth <= 768 ? true : false
    );

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
      if (window.innerWidth <= 768) {
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

    emit("handleSubnav", openSubnav, heightSubnav);

    return {
      openSubnav,
      heightSubnav,
      handleSubnav,
      isPhoneScreen,
      dynamicLink,
    };
  },
};
</script>

<style lang="scss" scoped></style>
