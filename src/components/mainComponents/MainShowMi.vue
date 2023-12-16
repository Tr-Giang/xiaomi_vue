<template>
  <section>
    <slot name="header"></slot>

    <div class="banner">
      <slot name="banner"></slot>
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
