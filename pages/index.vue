<template>
  <section class="banner-section">
    <div class="banner-bg bg-img bg-fixed"></div>

    <div class="container">
      <div class="banner-content">
        <h1 class="title cd-headline clip">
          <span class="d-block">book your</span> tickets for
          <span
            class="color-theme cd-words-wrapper p-0 m-0"
            style="width: 271.888px"
          >
            <b class="is-hidden">Movie</b>
          </span>
        </h1>
        <p>
          Safe, secure, reliable ticketing.Your ticket to live entertainment!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
  background-image: url("../assets/imgs/banner01.jpg");
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
