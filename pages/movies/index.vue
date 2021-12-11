<template>
  <div>
    <banner :bgr="bgr">
      <div slot="bannerContent">
        <h1 class="title bold">
          get <span class="color-theme">movie</span> tickets
        </h1>
        <p>
          Buy movie tickets in advance, find movie times watch trailers, read
          movie reviews and much more
        </p>
      </div>
    </banner>
    <search-ticket :bgrSearchTab="bgrSearchTab" />

    <div class="movie-section">
      <div class="container">Movie</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgr: "banner02.jpg",
      bgrSearchTab: "ticket-bg01.jpg",
    };
  },
};
</script>

<style>
</style>