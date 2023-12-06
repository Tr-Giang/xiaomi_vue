<template>
  <main>
    <section class="banner">
      <banner-mi>
        <template #image1>
          <img
            src="../assets/images/home/banner/banner.webp"
            alt="Redmi Note 12 series"
            class="d-none d-md-block"
          />
        </template>
        <template #image2
          ><img
            src="../assets/images/home/banner/banner_mobile.webp"
            alt="Redmi Note 12 series"
            class="d-block d-md-none"
        /></template>
      </banner-mi>

      <banner-text-mi>
        <template #image1>
          <img
            src="../assets/images/home/banner/introductionPOCOwebp.webp"
            alt="POCO f5 pro"
            class="d-none d-md-block"
          />
        </template>
        <template #image2
          ><img
            src="../assets/images/home/banner/introductionPOCOmodbile.webp"
            alt="POCO f5 pro"
            class="d-block d-md-none"
        /></template>

        <template #header>POCO <span>F5 Pro</span></template>
        <template #desc>Kích hoạt siêu năng lực</template>
      </banner-text-mi>
    </section>

    <section class="product">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          <find-more-mi>
            <template #header>Redmi Note <span>12</span> Pro</template>
            <template #image
              ><img
                src="../assets/images/home/product/redmiNote12pro.webp"
                alt="redmi Note 12 pro"
                class="product__item__img"
            /></template>
          </find-more-mi>
        </div>
        <div class="col">
          <find-more-mi>
            <template #header>Redmi A2+</template>
            <template #desc1>MediaTek Helio G36</template>
            <template #desc2>Cảm biến vân tay</template>
            <template #image
              ><img
                src="../assets/images/home/product/redmiA2+.webp"
                alt="Redmi A2+"
                class="product__item__img"
            /></template>
          </find-more-mi>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 col-md-6">
          <find-more-mi>
            <template #header>Xiaomi Smart Air Fryer Pro 4L</template>
            <template #desc1>Cho món ngon mọi bữa</template>
            <template #image
              ><img
                src="../assets/images/home/product/air_fryer.webp"
                alt="safe"
                class="product__item__img"
            /></template>
          </find-more-mi>
        </div>
        <div class="col col-6 col-md-3">
          <find-more-mi>
            <template #header>Redmi Smart Band 2</template>
            <template #desc1>Thỏa sức năng động</template>
            <template #image
              ><img
                src="../assets/images/home/product/miBand7pro.webp"
                alt="Redmi Smart Band 2"
                class="product__item__img"
            /></template>
          </find-more-mi>
        </div>
        <div class="col col-6 col-md-3">
          <find-more-mi>
            <template #header>Xiaomi Smart Camera C400</template>
            <template #image
              ><img
                src="../assets/images/home/product/smart_camera_400.png"
                alt="Xiaomi Smart Camera C400"
                class="product__item__img"
            /></template>
          </find-more-mi>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
