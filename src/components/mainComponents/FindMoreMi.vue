<template>
  <div class="product__item">
    <div class="product__item__content">
      <h2 class="product__item__header">
        <slot name="header"></slot>
      </h2>
      <p class="product__item__desc">
        <slot name="desc1"></slot>
      </p>
      <p class="product__item__desc">
        <slot name="desc2"></slot>
      </p>
      <button-no-border></button-no-border>
    </div>
    <slot name="image"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
