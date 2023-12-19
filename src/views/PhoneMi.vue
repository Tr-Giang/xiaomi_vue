<template>
  <div id="all">
    <div class="container-fluid">
      <main>
        <main-show-mi id="xiaomi">
          <template #header>
            <main-show-header>
              <template #heading>Xiaomi series</template>
              <template #desc>A new era of exquisite design</template>
            </main-show-header>
          </template>
          <template #banner>
            <banner-mi>
              <template #image1>
                <img
                  src="../assets/images/phone/phone_xiaomi/banner.webp"
                  alt="Xiaomi 13"
                  class="d-none d-md-block"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/home/banner/banner_mobile.webp"
                  alt="Redmi Note 12 series"
                  class="d-block d-md-none"
                />
              </template>
            </banner-mi>
          </template>
          <template #default>
            <products-show>
              <template #product1>
                <product-mi>
                  <template #header>Xiaomi 13 Pro</template>
                  <template #desc>Ẩn sau tuyệt tác</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_xiaomi/xiaomi13pro.png"
                      alt="redmi Note 12 pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product2>
                <product-mi>
                  <template #header>Xiaomi 13</template>
                  <template #desc>Ẩn sau tuyệt tác</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_xiaomi/xiaomi13.png"
                      alt="redmi Note 12 pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product3>
                <product-mi>
                  <template #header>Xiaomi 12T Pro</template>
                  <template #desc>Kiến tạo siêu khoảnh khắc</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_xiaomi/xiaomi12Tpro.png"
                      alt="redmi Note 12 pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Xiaomi 12T</template>
                  <template #desc>Kiến tạo siêu khoảnh khắc</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_xiaomi/xiaomi12.png"
                      alt="redmi Note 12 pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>Xiaomi 12 Pro</template>
                  <template #desc>Bậc thầy điện ảnh</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_xiaomi/xiaomi12pro.png"
                      alt="redmi Note 12 pro"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show>
          </template>
        </main-show-mi>
        <main-show-mi id="redmi">
          <template #header>
            <main-show-header>
              <template #heading>Redmi series</template>
              <template #desc>The Performance Racer</template>
            </main-show-header>
          </template>
          <template #banner>
            <banner-text-mi-dark>
              <template #image1>
                <img
                  src="../assets/images/phone/phone_redmi/banner.webp"
                  alt="redmi Note 12 pro"
                  class="d-none d-md-block"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/phone/phone_redmi/banner2.webp"
                  alt="POCO f5 pro"
                  class="d-block d-md-none"
                />
              </template>
              <template #header
                ><h2>Redmi Note <span>12</span> Pro</h2></template
              >
            </banner-text-mi-dark>
          </template>
          <template #default>
            <products-show>
              <template #product3>
                <product-mi>
                  <template #header>Redmi Note 12S</template>
                  <template #desc
                    >Camera chính đẳng cấp chuyên nghiệp 108MP</template
                  >
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_redmi/redminote12s.webp"
                      alt="Redmi Smart Band 2"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>Redmi A2+</template>
                  <template #desc>MediaTek Helio G36 Cảm biến vân tay</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_redmi/redmia2+.png"
                      alt="Redmi Smart Band 2"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>Redmi Note 12 Pro 5G</template>
                  <template #desc>Camera IMX766 hàng đầu với OIS</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_redmi/redminote12pro5g.png"
                      alt="Redmi Smart Band 2"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
            </products-show>
          </template>
        </main-show-mi>
        <main-show-mi id="poco">
          <template #header>
            <main-show-header>
              <template #heading>POCO</template>
            </main-show-header>
          </template>
          <template #banner>
            <banner-text-mi>
              <template #image1>
                <img
                  src="../assets/images/home/banner/introductionPOCOwebp.webp"
                  alt="POCO f5 pro"
                  class="d-none d-md-block"
                />
              </template>
              <template #image2>
                <img
                  src="../assets/images/home/banner/introductionPOCOmodbile.webp"
                  alt="POCO f5 pro"
                  class="d-block d-md-none"
                />
              </template>
              <template #header
                ><h2>POCO <span>F5 Pro</span></h2></template
              >
              <template #desc>Kích hoạt siêu năng lực </template>
            </banner-text-mi>
          </template>
          <template #default>
            <products-show>
              <template #product3>
                <product-mi>
                  <template #header>POCO X5 5G</template>
                  <template #desc>Mọi thứ. Đều tuyệt mỹ.</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_poco/pocox55g.png"
                      alt="Redmi Smart Band 2"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product4>
                <product-mi>
                  <template #header>POCO M5s</template>
                  <template #desc>Nhà ảo thuật vui nhộn</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_poco/pocom5s.webp"
                      alt="Redmi Smart Band 2"
                      class="product__item__img"
                  /></template>
                </product-mi>
              </template>
              <template #product5>
                <product-mi>
                  <template #header>POCO M5</template>
                  <template #desc>Trình phát chất lượng</template>
                  <template #image
                    ><img
                      src="../assets/images/phone/phone_poco/pocom5.png"
                      alt="Redmi Smart Band 2"
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
