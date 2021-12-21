<template>
  <div>
    <banner :bgr="bgr">
      <div slot="bannerContent">
        <h1 class="title cd-headline clip">
          <span class="d-block">book your</span>
          <span>tickets for</span> 
          <span class="text-note"> Movie </span>
        </h1>
        <div class="typing-text">
          Safe, secure, reliable ticketing.Your ticket to live entertainment!
        </div>
      </div>
    </banner>
    <search-ticket :bgrSearchTab="bgrSearchTab" />

    <section class="movie-section">
      <div class="container"></div>
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
      bgrSearchTab: "ticket-bg01.jpg",
    };
  },
};
</script>
<style>

</style>

