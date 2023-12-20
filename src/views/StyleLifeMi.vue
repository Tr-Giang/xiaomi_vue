<template>
  <div id="all">
    <div class="container-fluid">
      <main>
        <carousel-mi>
          <template #banner1>
            <banner-text-mi-dark
              :customStyle="{ textAlign: 'left' }"
              :style="{ marginBottom: '0rem' }"
            >
              <template #image1>
                <img
                  src="../assets/images/life_style/banner/banner1.webp"
                  class="d-none d-md-block w-100"
                  alt="banner"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/life_style/banner/banner11.webp"
                  class="d-block d-md-none w-100"
                  alt="banner"
                />
              </template>
              <template #header>RedmiBook 15</template>
              <template #desc
                >Chiếc máy tính có thể tiếp sức sáng tạo cho bạn</template
              >
            </banner-text-mi-dark>
          </template>
          <template #banner2>
            <banner-text-mi-dark
              :customStyle="{ textAlign: 'left' }"
              :style="{ marginBottom: '0rem' }"
            >
              <template #image1>
                <img
                  src="../assets/images/life_style/banner/banner2.webp"
                  class="d-none d-md-block w-100"
                  alt="banner"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/life_style/banner/banner21.webp"
                  class="d-block d-md-none w-100"
                  alt="banner"
                />
              </template>
              <template #header>Xiaomi Smart Band 8</template>
              <template #desc>Thể thao kết hợp với phong cách</template>
            </banner-text-mi-dark>
          </template>
          <template #banner3>
            <banner-text-mi
              :customStyle="{ textAlign: 'left', fontSize: '2rem' }"
              :style="{ marginBottom: '0rem' }"
            >
              <template #image1>
                <img
                  src="../assets/images/life_style/banner/banner3.webp"
                  class="d-none d-md-block w-100"
                  alt="banner"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/life_style/banner/banner31.webp"
                  class="d-block d-md-none w-100"
                  alt="banner"
                />
              </template>
              <template #header>Xiaomi Buds 3T Pro</template>
              <template #desc>Nhịp điệu say đắm, âm thanh diệu kỳ</template>
            </banner-text-mi>
          </template>
        </carousel-mi>
        <main-show-mi id="thietbideo">
          <template #header>
            <main-show-header>
              <template #heading>Thiết bị đeo</template>
            </main-show-header>
          </template>

          <template #default>
            <products-show2>
              <template #product1>
                <product-mi>
                  <template #header>Xiaomi Smart Band 8</template>
                  <template #desc> Thể thao kết hợp với phong cách</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/wearables/band8.webp"
                      alt="Xiaomi Smart Band 8"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product2>
                <product-mi>
                  <template #header>Xiaomi Watch 2 Pro</template>
                  <template #desc> Thông minh hơn sau mỗi lần đeo</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/wearables/watch2.webp"
                      alt="Xiaomi Watch 2 Pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product3>
                <product-mi>
                  <template #header>Xiaomi Smart Band 8 Active</template>
                  <template #desc> Kích hoạt một ngày của bạn</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/wearables/ban8a.webp"
                      alt="Xiaomi Smart Band 8 Active"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Xiaomi Buds 4 Pro"</template>
                  <template #desc> Sống động dưới mọi hình thức</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/wearables/pod1.png"
                      alt="Xiaomi Buds 4 Pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>Redmi Buds 4 Pro</template>
                  <template #desc>Âm thanh như bạn mong muốn</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/wearables/pod4.png"
                      alt="Redmi Buds 4 Pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product6>
                <product-mi>
                  <template #header>Xiaomi Watch S1 Pro</template>
                  <template #desc>Chiếc đồng hồ cổ điển</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/wearables/watch1.png"
                      alt="Xiaomi Watch S1 Pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show2>
          </template>
        </main-show-mi>
        <main-show-mi id="vanphong">
          <template #header>
            <main-show-header>
              <template #heading>Văn phòng</template>
            </main-show-header>
          </template>
          <template #default>
            <products-show2>
              <template #product1>
                <product-mi>
                  <template #header>Mi AIoT Router AX3600</template>
                  <template #desc
                    >Wi-Fi 6 là bộ định tuyến 5G đầu tiên trên thế
                    giới</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/office/wifi1.png"
                      alt="Mi AIoT Router AX3600"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product2>
                <product-mi>
                  <template #header>Mi Router 4A Gigabit Edition</template>
                  <template #desc
                    >Bộ định tuyến AC1200 Gigabit đầy đủ lõi kép</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/office/wifi2.png"
                      alt="Mi Router 4A Gigabit Edition"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product3>
                <product-mi>
                  <template #header>Mi Router 4C (White)</template>
                  <template #desc
                    >Bốn ăng-ten đa hướng cho trải nghiệm nhanh hơn và thông
                    minh hơn</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/office/wifi1.png"
                      alt="Mi Router 4C (White)"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Xiaomi Pad 5</template>
                  <template #desc> Chơi chất, làm chất</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/office/pad1.png"
                      alt="Xiaomi Pad 5"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>RedmiBook 15</template>
                  <template #desc
                    >Chiếc máy tính có thể tiếp sức sáng tạo cho bạn</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/office/lap1.png"
                      alt="RedmiBook 15"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product6>
                <product-mi>
                  <template #header>Redmi Pad</template>
                  <template #desc
                    >Pad đa năng trong tay, niềm vui trong tầm với</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/office/pad2.png"
                      alt="Redmi Pad"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show2>
          </template>
        </main-show-mi>
        <main-show-mi id="thethao">
          <template #header>
            <main-show-header>
              <template #heading>Thể thao</template>
            </main-show-header>
          </template>

          <template #default>
            <div class="product">
              <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                  <product-mi>
                    <template #header>Mi Body Composition Scale 2</template>
                    >
                    <template #image
                      ><img
                        src="../assets/images/life_style/sport/sport1.png"
                        alt="Mi Body Composition Scale 2"
                        class="product__item__img"
                    /></template>
                  </product-mi>
                </div>
                <div class="col">
                  <product-mi>
                    <template #header>Mi Smart Scale 2</template>
                    <template #desc
                      >Đủ chính xác để phát hiện bạn vừa uống một ly
                      nước</template
                    >
                    <template #image
                      ><img
                        src="../assets/images/life_style/sport/sport2.png"
                        alt="Mi Smart Scale 2"
                        class="product__item__img"
                    /></template>
                  </product-mi>
                </div>
              </div>
            </div>
          </template>
        </main-show-mi>
        <main-show-mi id="phukien">
          <template #header>
            <main-show-header>
              <template #heading>Phụ kiện</template>
            </main-show-header>
          </template>
          <template #default>
            <products-show3>
              <template #product1>
                <product-mi>
                  <template #header>Xiaomi 22.5W Power Bank 10000</template>
                  <template #desc
                    >Vỏ kim loại chắc chắn, khả năng sạc mạnh mẽ</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/accessory/power1.webp"
                      alt="Xiaomi 22.5W Power Bank 10000"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product2>
                <product-mi>
                  <template #header
                    >Xiaomi Wireless Keyboard and Mouse</template
                  >
                  <template #desc
                    >Tận hưởng năng suất làm việc không dây</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/accessory/mourse1.webp"
                      alt="Xiaomi Wireless Keyboard and Mouse"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product3>
                <product-mi>
                  <template #header>Xiaomi Wireless Mouse Lite</template>
                  <template #desc
                    >Đơn giản và gọn nhẹ, không còn bị dây nối ràng
                    buộc</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/accessory/mourse2.webp"
                      alt="Xiaomi Wireless Mouse Lite"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Mi Dual Mode Wireless Mouse</template>
                  <template #desc
                    >Người bạn đồng hành thầm lặng giúp bạn đạt năng suất cao
                    hơn</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/accessory/mourse3.webp"
                      alt="Mi Dual Mode Wireless Mouse"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>Xiaomi 33W Power Bank 10000mAh</template>
                  <template #desc
                    >Nhẹ và nhỏ gọn, vừa vặn trong túi của bạn</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/accessory/power2.webp"
                      alt="Xiaomi 33W Power Bank 10000mAh"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product6>
                <product-mi>
                  <template #header>Mi 65W Fast Charger with GaN Tech</template>
                  <template #desc
                    >Công nghệ gali nitrua tuyệt vời, sạc nhanh công suất cao
                    65W MAX</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/life_style/accessory/charger1.webp"
                      alt="Mi 65W Fast Charger with GaN Tech"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product7>
                <product-mi>
                  <template #header
                    >Mi 33W Wall Charger (Type-A + Type-C)</template
                  >
                  <template #desc>Sạc nhanh và mạnh mẽ</template>
                  <template #image
                    ><img
                      src="../assets/images/life_style/accessory/charger2.webp"
                      alt="Mi 33W Wall Charger (Type-A + Type-C)"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show3>
          </template>
        </main-show-mi>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner__item__content {
  text-align: left;
}
</style>
