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
                  src="../assets/images/smart_home/banner/banner1.webp"
                  class="d-none d-md-block w-100"
                  alt="banner"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/smart_home/banner/banner11.webp"
                  class="d-block d-md-none w-100"
                  alt="banner"
                />
              </template>
              <template #header>Xiaomi Robot Vacuum E10</template>
              <template #desc>Chuyên gia vệ sinh sàn linh hoạt</template>
            </banner-text-mi-dark>
          </template>
          <template #banner2>
            <banner-text-mi-dark
              :customStyle="{ textAlign: 'left' }"
              :style="{ marginBottom: '0rem' }"
            >
              <template #image1>
                <img
                  src="../assets/images/smart_home/banner/banner2.webp"
                  class="d-none d-md-block w-100"
                  alt="banner"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/smart_home/banner/banner21.webp"
                  class="d-block d-md-none w-100"
                  alt="banner"
                />
              </template>
              <template #header>Xiaomi TV A 55</template>
              <template #desc>Muôn Góc Nhìn, Vạn Trải Nghiệm</template>
            </banner-text-mi-dark>
          </template>
          <template #banner3>
            <banner-text-mi
              :customStyle="{ textAlign: 'left', fontSize: '2rem' }"
              :style="{ marginBottom: '0rem' }"
            >
              <template #image1>
                <img
                  src="../assets/images/smart_home/banner/banner3.webp"
                  class="d-none d-md-block w-100"
                  alt="banner"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/smart_home/banner/banner31.webp"
                  class="d-block d-md-none w-100"
                  alt="banner"
                />
              </template>
              <template #header>Xiaomi Smart Air Purifier 4 Compact</template>
              <template #desc>Mang không khí sạch đến nơi bạn cần</template>
            </banner-text-mi>
          </template>
        </carousel-mi>
        <main-show-mi id="media">
          <template #header>
            <main-show-header>
              <template #heading>TV & phương tiện</template>
            </main-show-header>
          </template>

          <template #default>
            <products-show2>
              <template #product1>
                <product-mi>
                  <template #header>Xiaomi TV A 43 FHD</template>
                  <template #desc>Muôn Góc Nhìn, Vạn Trải Nghiệm</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/tv/tv1.png"
                      alt="Xiaomi TV A 43 FHD"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product2>
                <product-mi>
                  <template #header>Xiaomi TV A Pro 65</template>
                  <template #desc>Muôn Góc Nhìn, Vạn Trải Nghiệm</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/tv/tv2.png"
                      alt="Xiaomi TV A Pro 65"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product3>
                <product-mi>
                  <template #header>Xiaomi TV A2 58"</template>
                  <template #desc
                    >Cuộc sống tiện nghi, tầm nhìn vô hạn</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/tv/iv3.png"
                      alt="Xiaomi TV A2 58"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Xiaomi TV A2 32"</template>
                  <template #desc
                    >Cuộc sống tiện nghi, tầm nhìn vô hạn</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/tv/iv3.png"
                      alt="Xiaomi TV A2 32"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header
                    >Mi Portable Bluetooth Speaker (16W)</template
                  >
                  <template #desc>ĐƯA ÂM NHẠC VÀO ĐỜI SỐNG</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/tv/speaker.png"
                      alt="Mi Portable Bluetooth Speaker (16W)"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product6>
                <product-mi>
                  <template #header>Mi Smart Projector 2</template>
                  <template #desc>Rạp hát tại gia di động của bạn</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/tv/projector.png"
                      alt="Mi Portable Bluetooth Speaker (16W)"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show2>
          </template>
        </main-show-mi>
        <main-show-mi id="cleaner">
          <template #header>
            <main-show-header>
              <template #heading>Máy hút bụi</template>
            </main-show-header>
          </template>
          <template #default>
            <products-show>
              <template #product1>
                <product-mi>
                  <template #header>Xiaomi Robot Vacuum S10+</template>
                  <template #desc
                    >Lau sàn bằng áp suất với hai giẻ lau để loại bỏ vết bẩn tốt
                    hơn</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/clearner/clearner1.png"
                      alt="Xiaomi Robot Vacuum S10+"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product2>
                <product-mi>
                  <template #header>Xiaomi Robot Vacuum X10+</template>
                  <template #desc>Dọn sạch tối ưu, tự động hóa tối đa</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/clearner/clearner2.png"
                      alt="Xiaomi Robot Vacuum X10+"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product3>
                <product-mi>
                  <template #header
                    >Xiaomi Truclean W10 Ultra Wet Dry Vacuum</template
                  >
                  <template #desc>Làm sạch hoàn toàn trong một lần</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/clearner/cleaner3.png"
                      alt="Xiaomi Truclean W10 Ultra Wet Dry Vacuum"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Xiaomi Robot Vacuum E10</template>
                  <template #desc>Chuyên gia vệ sinh sàn linh hoạt</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/clearner/cleaner4.png"
                      alt="Xiaomi Robot Vacuum E10"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>Xiaomi Vacuum Cleaner G9 Plus</template>
                  <template #desc
                    >Máy đa chức năng để loại bỏ sâu bụi bẩn với nhiều chế độ
                    cài đặt</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/clearner/cleaner5.png"
                      alt="Xiaomi Vacuum Cleaner G9 Plus"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show>
          </template>
        </main-show-mi>
        <main-show-mi id="thietbimoitruong">
          <template #header>
            <main-show-header>
              <template #heading>Thiết bị môi trường</template>
            </main-show-header>
          </template>

          <template #default>
            <products-show2>
              <template #product1>
                <product-mi>
                  <template #header>Xiaomi Smart Air Purifier 4 Pro</template>
                  <template #desc>Hít khí sạch, hô hấp khỏe</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/smart_air/air1.png"
                      alt="Xiaomi Smart Air Purifier 4 Pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product2>
                <product-mi>
                  <template #header
                    >Xiaomi Smart Air Purifier 4 Compact</template
                  >
                  <template #desc>
                    Mang không khí sạch đến nơi bạn cần</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/smart_air/air2.png"
                      alt="Xiaomi Smart Air Purifier 4 Compact"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product3>
                <product-mi>
                  <template #header>Mi Smart Standing Fan 2 Lite</template>
                  <template #desc
                    >Điều khiển mức gió thông minh bằng giọng nói</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/smart_air/air3.png"
                      alt="Mi Smart Standing Fan 2 Lite"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Xiaomi Smart Air Purifier 4</template>
                  <template #desc> Hít khí sạch, hô hấp khỏe</template>
                  <template #image
                    ><img
                      src="../assets/images/smart_home/smart_air/air4.png"
                      alt="Xiaomi Smart Air Purifier 4"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>Mi Smart Standing Fan 2</template>
                  <template #desc
                    >Cánh quạt kép mang đến làn gió mát tự nhiên</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/smart_air/air5.jpg"
                      alt="Mi Smart Standing Fan 2"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product6>
                <product-mi>
                  <template #header>Xiaomi Rechargeable Mini Fan</template>
                  <template #desc
                    >Một chiếc quạt không dây bền bỉ mang đến làn gió mát ở mọi
                    nơi.</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/smart_air/air6.png"
                      alt="Xiaomi Rechargeable Mini Fan"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show2>
          </template>
        </main-show-mi>
        <main-show-mi id="thietbithongminh">
          <template #header>
            <main-show-header>
              <template #heading>Thiết bị thông minh</template>
            </main-show-header>
          </template>
          <template #default>
            <products-show>
              <template #product3>
                <product-mi>
                  <template #header>Mi Camera 2K Magnetic Mount</template>
                  <template #desc
                    >Thiết kế nhỏ gọn, hình ảnh 2K siêu nét</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/camera/camera1.png"
                      alt="Mi Camera 2K Magnetic Mount"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Mi 360° Home Security Camera 2K</template>
                  <template #desc
                    >Chất lượng hình ảnh 2K cực rõ, AI đã được nâng
                    cấp</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/camera/camera2.jpg"
                      alt="Mi 360° Home Security Camera 2K"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>Xiaomi Smart Camera C400</template>
                  <template #desc
                    >Bảo mật thông minh với độ rõ nét 2,5K</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/smart_home/camera/camera3.png"
                      alt="Xiaomi Smart Camera C400"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show>
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
