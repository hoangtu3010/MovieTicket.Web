<template>
  <div class="search-ticket-section">
    <div class="container">
      <div
        class="search-tab bg-img"
        :style="{ backgroundImage: 'url(' + bgrSearchTab + ')' }"
      >
        <div class="row align-items-center">
          <div class="col-lg-6 mb-20">
            <div class="search-ticket-header">
              <h6 class="category">welcome to Boleto</h6>
              <h3 class="title">what are you looking for</h3>
            </div>
          </div>
          <div class="col-lg-6 mb-20">
            <button>Movie</button>
          </div>
        </div>
        <div class="tab-area">
          <div class="tab-item">
            <form class="ticket-search-form">
              <div class="form-group large">
                <input type="text" placeholder="Search fo Movies" />
                <button type="submit"><i class="fas fa-search"></i></button>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="../assets/imgs/city.png" alt="ticket" />
                </div>
                <span class="type">city</span>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="../assets/imgs/date.png" alt="ticket" />
                </div>
                <span class="type">date</span>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="../assets/imgs/cinema.png" alt="ticket" />
                </div>
                <span class="type">cinema</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgrSearchTab: {
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
.search-ticket-section {
  margin-top: -150px;
  position: relative;
  z-index: 9;
}

.event-search::before,
.search-tab::before {
  background-image: -webkit-linear-gradient(0deg, #0f5ae0 0%, #7400ba 100%);
  opacity: 0.8;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.search-tab {
  padding: 40px 30px;
  position: relative;
}

.search-ticket-header {
  text-transform: uppercase;
}

.search-ticket-header .category {
  color: #31d7a9;
  font-weight: 600;
  margin-bottom: 16px;
}

.search-ticket-header .title {
  font-size: 28px;
}

.search-tab .tab-area {
  padding: 30px;
  position: relative;
  -webkit-box-shadow: 0px 5px 15px 0px rgb(44 41 157 / 50%);
  box-shadow: 0px 5px 15px 0px rgb(44 41 157 / 50%);
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-top: 53px;
}

.search-tab .tab-area::before {
  position: absolute;
  content: "";
  background-color: black;
  opacity: 0.4;
  width: 100%;
  height: calc(100% + 1px);
  top: 0;
  left: 0;
}

.ticket-search-form {
  margin-bottom: -20px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ticket-search-form .form-group .thumb {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  -webkit-box-shadow: 5px 0 15px rgb(0 0 0 / 50%);
  box-shadow: 5px 0 15px rgb(0 0 0 / 50%);
}
</style>