<template>
  <section class="banner-section">
    <div
      class="banner-bg bg-img bg-fixed"
      :style="{ backgroundImage: 'url(' + bgr + ')' }"
    ></div>
    <div class="container">
      <div class="banner-content">
        <slot name="bannerContent"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bgr: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.banner-section {
  padding: 249px 0 316px;
  position: relative;
}

.banner-section .banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.3;
}

.banner-section::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 18, 50, 0.4);
  z-index: 2;
}

.banner-section .banner-content {
  position: relative;
  z-index: 3;
}

.banner-content {
  margin: 0 auto;
  text-align: center;
  max-width: 840px;
}

.banner-content .title {
  font-size: 80px;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 18px;
  font-weight: 800;
}

.bg-img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-fixed {
  background-attachment: fixed;
}
</style>