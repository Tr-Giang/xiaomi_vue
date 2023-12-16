<template>
  <div class="product">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <slot name="product1"></slot>
      </div>
      <div class="col">
        <slot name="product2"></slot>
      </div>
    </div>
    <div class="row">
      <div class="col col-6 col-md-3">
        <slot name="product3"></slot>
      </div>
      <div class="col col-6 col-md-3">
        <slot name="product4"></slot>
      </div>
      <div class="col col-6 col-md-3">
        <slot name="product5"></slot>
      </div>
      <div class="col col-6 col-md-3">
        <div class="product__item product__other">
          <h3>All Product</h3>
          <a href="#!"><i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
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
