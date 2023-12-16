<template>
  <li class="header__navbar__item__subnav__item">
    <a :href="dynamicLink">
      <slot name="image"></slot>
      <slot name="name"></slot
    ></a>
  </li>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["subNav"],
  setup(props) {
    console.log(props.subNav);
    const dynamicLink = computed(() => {
      if (props.subNav == "Xiaomi") {
        return "/phone#xiaomi";
      } else if (props.subNav == "Redmi") {
        return "/phone#redmi";
      } else if (props.subNav == "POCO") {
        return "/phone#poco";
      } else if (props.subNav == "TV & Phương tiện") {
        return "/smart-house#media";
      } else if (props.subNav == "Máy hút bụi") {
        return "/smart-house#cleaner";
      } else if (props.subNav == "Thiết bị môi trường") {
        return "/smart-house#thietbimoitruong";
      } else if (props.subNav == "Thiết bị thông minh") {
        return "/smart-house#thietbithongminh";
      } else if (props.subNav == "Thiết bị đeo") {
        return "/style-life#thietbideo";
      } else if (props.subNav == "Văn phòng") {
        return "/style-life#vanphong";
      } else if (props.subNav == "Thể thao") {
        return "/style-life#thethao";
      } else if (props.subNav == "Phụ kiện") {
        return "/style-life#phukien";
      }
      return "";
    });

    return {
      dynamicLink,
    };
  },
};
</script>

<style l ang="scss" scoped></style>
