<template>
  <div class="banner__item">
    <a href="#!">
      <slot name="image1"></slot>
      <slot name="image2"></slot>
      <div class="banner__item__content" :style="customStyle">
        <h2><slot name="header"></slot></h2>
        <h3><slot name="desc"></slot></h3>
        <button class="xiaomi__btn xiaomi__btn--light">TÌM HIỂU THÊM</button>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {},
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/helpers/_variables.scss";

.banner__item {
  margin-bottom: 1.6rem;
  position: relative;
  img {
    object-fit: cover;
    height: 100%;
  }
  .banner__item__content {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);

    h2 {
      margin: 0;
      font-size: 3.6rem;
      color: $text-color4;
      font-family: "Lexend Deca", sans-serif;
      span {
        font-size: 3.2rem;
      }
    }

    h3 {
      margin-bottom: 2rem;
      font-size: 2.4rem;
      color: $text-color4;
    }
  }
}
@media screen and (max-width: 768px) {
  .banner__item {
    .banner__item__content {
      top: 0;
      left: 50%;
      width: max-content;
      transform: translateX(-50%);
      padding: 4rem 1rem;
      text-align: center !important;

      h2 {
        font-size: 2rem;
        font-weight: 400;
        span {
          font-size: 1.8rem;
        }
      }

      h3 {
        font-size: 1.6rem;
        font-weight: 400;
      }
    }
  }
}
</style>
