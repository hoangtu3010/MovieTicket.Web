<template>
  <div>
    <banner :bgr="bgr">
      <div slot="bannerContent">
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
    </banner>
    <search-ticket :bgrSearchTab="bgrSearchTab" />

    <section class="movie-section">
      <div class="container">Movie</div>
    </section>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import SearchTicket from "../components/search-ticket.vue";
export default {
  components: { banner, SearchTicket },
  data() {
    return {
      bgr: "banner01.jpg",
      bgrSearchTab: "ticket-bg01.jpg"
    };
  },
};
</script>
<style>
 
</style>

