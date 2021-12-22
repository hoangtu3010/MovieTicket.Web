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
            <div class="post-box post-point">
              <a class="play-btn" href="#"></a>
              <div class="post-img">
                <img src="../assets/imgs/venus.jpg" alt="img" />
              </div>
              <div class="main-slider-text">
                <span class="quality">Full HD</span>
                <div class="bottom-text">
                  <div class="category-rating">
                      <div class="category">
                        <a href="#">Horror</a>,<a href="#">Mistery</a>,<a
                          href="#"
                          >Thriller</a
                        >
                      </div>
                      <div class="rating">
                        <span>Rating:</span> <b-icon icon="star"></b-icon
                        ><b-icon icon="star"></b-icon
                        ><b-icon icon="star"></b-icon
                        ><b-icon icon="star"></b-icon
                        ><b-icon icon="star"></b-icon>
                      </div>
                    </div>
                  <div class="movie-name">
                    <a class="title" href="#"
                      >Paranormal ACtivity: The Marked Ones</a
                    >
                    <span>Upcoming on cinema: 27 december 2021</span>
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
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color: #0e0e0ec2;
  border: 1px solid #161616b9;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
}

.post-box.post-point {
  grid-area: 1 / 1 / span 1 / span 2;
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
  transition: 0.4s;
}

.post-box:hover img {
  transform: scale(1.1);
}

.post-point .main-slider-text .category a {
  font-size: 1rem;
}

.post-point .rating {
    font-size: 1rem;
    letter-spacing: 1px;
}

.post-point .main-slider-text .movie-name .title {
  font-size: 2rem;
}

.post-point .main-slider-text .movie-name span {
  margin: 15px 0;
}

.post-point .play-btn {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    rgba(255, 0, 43, 0.8) 60%,
    rgba(255, 255, 255, 1) 62%
  );
  border-radius: 50%;
  position: absolute;
  display: block;
  box-shadow: 0px 0px 25px 3px rgba(255, 0, 43, 0.8);
  z-index: 2;
}

.post-point .play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-40%) translateY(-50%);
  transform: translateX(-40%) translateY(-50%);
  transform-origin: center center;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid #fff;
  z-index: 100;
  -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.post-point .play-btn:before {
  content: "";
  position: absolute;
  width: 150%;
  height: 150%;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate1 2s;
  animation: pulsate1 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.75);
  top: -25%;
  left: -25%;
  background: rgba(198, 16, 0, 0);
}

@-webkit-keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
      0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;
  }
}

@keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
      0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;
  }
}
</style>

