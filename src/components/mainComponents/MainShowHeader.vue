<template>
  <div class="all__heading">
    <h2><slot name="heading"></slot></h2>
    <p><slot name="desc"></slot></p>
    <a href="#!" class="xiaomi__btn xiaomi__btn--dark"> Xem thêm </a>
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
