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
      
      <div class="container">
        <div id="main-slider">
        <slider />
      </div>
      <div class="slider-btns">
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
        <div id="upcoming">
          <div class="upcoming-heading">
            <h1>Upcoming Movies</h1>
          </div>
          <div class="post-main">
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-box">
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="movie-name">
                    <span>2014</span>
                    <a href="#">Paranormal ACtivity: The Marked Ones</a>
                  </div>
                  <div class="category-rating">
                    <div class="category">
                      <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#"
                        >Thriller</a
                      >
                    </div>
                    <div class="rating">
                      <b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon><b-icon icon="star"></b-icon
                      ><b-icon icon="star"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import SearchTicket from "../components/search-ticket.vue";
import Slider from "../components/slider.vue";

export default {
  components: { banner, SearchTicket, Slider },
  data() {
    return {
      bgr: "banner01.jpg",
      bgrSearchTab: "ticket-bg01.jpg",
    };
  },
};
</script>
<style>
/*== UPCOMING ==*/
#upcoming {
  margin: 30px auto;
  width: 100%;
}

.upcoming-heading {
  width: 100%;
  padding: 10px 20px;
  background-color: #0a1e5e;
}

.upcoming-heading h1 {
  font-size: 1.8rem;
  font-weight: 500;
}

.post-main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.post-box {
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
  background-color: #0e0e0ec2;
  border: 1px solid #161616b9;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
}

.post-box .post-img {
  width: 100%;
  height: 100%;
}

.post-box .post-img img {
  width: 100%;
  height: 100%;
  object-position: top center;
  object-fit: cover;
  transition: .4s;
}

.post-box:hover img{
  transform: scale(1.1);
}
</style>

