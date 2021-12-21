<template>
  <div>
    <banner :bgr="bgr">
      <div slot="bannerContent">
        <h1 class="title bold">
          <span>get</span> 
          <span class="text-note">movie</span>
          <span>tickets</span>
        </h1>
        <div class="typing-text">
          Buy movie tickets in advance, find movie times watch trailers, and...
        </div>
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