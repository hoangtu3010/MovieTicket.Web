<template>
  <div>
    <section
      class="detail-banner bg-img"
      :style="{ backgroundImage: 'url(' + bgrBannerDetail + ')' }"
    >
    <div class="container">

    </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgrBannerDetail: "banner03.jpg",
    };
  },
};
</script>

<style>
.detail-banner {
  padding-top: 235px;
  padding-bottom: 20px;
  position: relative;
}

.details-banner:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 18, 50, 0.134891) 0%,
    #001232 90%
  );
}
</style>