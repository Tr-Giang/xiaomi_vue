<template>
  <div class="header__respon__item">
    <h3 @click="handleRespon" class="header__respon__item__heading">
      <span>
        <slot name="name"></slot>
      </span>
      <div>
        <i class="fa-solid fa-plus" v-if="isPhoneScreen && !openRespon"></i
        ><i class="fa-solid fa-minus" v-if="isPhoneScreen && openRespon"></i>
      </div>
    </h3>
    <div :style="{ height: heightRespon + 'px' }">
      <ul class="header__respon__item__list">
        <slot name="item"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
import { useHeaderStore } from "@/stores/HeaderStore";
import { ref, computed } from "vue";
export default {
  setup() {
    const store = useHeaderStore();
    const openRespon = ref(false);
    const heightRespon = ref(0);
    let isPhoneScreen = computed(() =>
      window.innerWidth <= 768 ? true : false
    );

    function handleRespon(e) {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        openRespon.value = !openRespon.value;
        if (openRespon.value === true) {
          if (e.target.classList.contains("header__respon__item__heading")) {
            heightRespon.value =
              e.target.nextElementSibling.firstElementChild.clientHeight;
          } else if (
            e.target.parentNode.classList.contains(
              "header__respon__item__heading"
            )
          ) {
            heightRespon.value =
              e.target.parentNode.nextElementSibling.firstElementChild.clientHeight;
          } else if (
            e.target.parentNode.parentNode.classList.contains(
              "header__respon__item__heading"
            )
          ) {
            heightRespon.value =
              e.target.parentNode.parentNode.nextElementSibling.firstElementChild.clientHeight;
          }
        } else {
          heightRespon.value = 0;
        }
      }
    }

    return {
      openRespon,
      heightRespon,
      handleRespon,
      isPhoneScreen,
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
