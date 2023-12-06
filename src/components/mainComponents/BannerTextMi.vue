<template>
  <div class="banner__item">
    <a href="#!">
      <slot name="image1"></slot>
      <slot name="image2"></slot>
      <div class="banner__item__content">
        <h2><slot name="header"></slot></h2>
        <h3><slot name="desc"></slot></h3>
        <button class="xiaomi__btn xiaomi__btn--light">TÌM HIỂU THÊM</button>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
