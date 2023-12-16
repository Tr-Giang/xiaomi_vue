<template>
  <div class="product__item">
    <div class="product__item__content">
      <h3 class="product__item__header">
        <slot name="header"></slot>
      </h3>
      <p class="product__item__desc">
        <slot name="desc"></slot>
      </p>
      <a href="#!" class="product__item__btn xiaomi__btn xiaomi__btn--dark">
        TÌM HIỂU THÊM
      </a>
    </div>
    <slot name="image"></slot>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
