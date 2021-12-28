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
      <div class="container">
        <div
          class="movie-section"
          style="margin-top: 60px; margin-bottom: 50px"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-3 search">
                <div class="search1">
                  <div>
                    <img
                      src="https://kenh14cdn.com/zoom/320_200/203336854389633024/2021/12/10/photo1639138480561-1639138481365790167131.jpg"
                      width="100%"
                    />
                  </div>
                  <div>
                    <div class="widget-1">
                      <h4><b>Filter By</b></h4>
                      <a style="text-decoration: none" href="" class="clear_all"
                        >Clear All</a
                      >
                    </div>

                    <div class="widget-1-body">
                      <h5 style="margin-bottom: 25px"><b>LANGUAGE</b></h5>
                      <div
                        style="
                          width: 100%;
                          background-color: #dbe2fb;
                          border-top: 1px solid white;
                          margin-bottom: 30px;
                        "
                      ></div>
                      <div class="check-area">
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>

                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                      </div>
                    </div>

                    <div class="widget-1-body">
                      <h5 style="margin-bottom: 25px"><b>EXPERIENCE</b></h5>
                      <div
                        style="
                          width: 100%;
                          background-color: #dbe2fb;
                          border-top: 1px solid white;
                          margin-bottom: 30px;
                        "
                      ></div>
                      <div class="check-area">
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">2D</label>
                        </div>

                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">3D</label>
                        </div>
                        <div
                          style="
                            width: 100%;
                            background-color: #dbe2fb;
                            border-top: 1px solid white;
                            margin-bottom: 30px;
                          "
                        ></div>
                        <div class="form-group">
                          <label for="">VIEW MORE</label>
                        </div>
                      </div>
                    </div>

                    <div class="widget-1-body">
                      <h5 style="margin-bottom: 25px"><b>EXPERIENCE</b></h5>
                      <div
                        style="
                          width: 100%;
                          background-color: #dbe2fb;
                          border-top: 1px solid white;
                          margin-bottom: 30px;
                        "
                      ></div>
                      <div class="check-area">
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                        <div class="form-group">
                          <input class="checkbox" type="checkbox" />
                          <label for="">Tamil</label>
                        </div>
                        <div
                          style="
                            width: 100%;
                            background-color: #dbe2fb;
                            border-top: 1px solid white;
                            margin-bottom: 30px;
                          "
                        ></div>
                        <div class="form-group">
                          <label for="">VIEW MORE</label>
                        </div>
                      </div>
                    </div>

                    <div style="margin-top: 60px">
                      <img
                        src="https://image-us.24h.com.vn/upload/4-2021/images/2021-11-26/batch_h2-1637911867-32-width650height975.jpg"
                        width="100%"
                        height="300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9 list">
                <div class="col-md-12 list1">
                  <div class="filter_area">
                    <div class="filter-main">
                      <div class="showMovie">
                        <div style="margin-left: 40px">
                          <label for=""><b>Show</b> :</label>
                          <span class="nice-select"> 20</span>
                        </div>
                        <div style="margin-left: 40px">
                          <label for=""><b>SORT BY</b> :</label>
                          <span class="nice-select"> Nothink now</span>
                        </div>
                      </div>

                      <div class="typeShow">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="movie">
                              <div>
                                <img
                                  src="https://image-us.eva.vn/upload/4-2020/images/2020-11-10/15-1604973076-822-width600height900.jpg"
                                  width="100%"
                                  height="350px"
                                />
                              </div>
                              <div class="titleMovie">
                                <div class="nameMovie">xxxx</div>
                                <div
                                  style="
                                    width: 100%;
                                    background-color: #dbe2fb;
                                    border-top: 1px solid white;
                                    margin-bottom: 30px;
                                  "
                                ></div>
                                <div class="reatingMovie">
                                  <span>🍄 : 88% </span>
                                  <span style="margin-left: 10px"
                                    >❤️ : 88%</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 advertisement">
                <div class="advertisement_detail">
                  <h3><b>Applicable Offer</b></h3>
                  <div style="margin-top: 20px">
                    <div class="advertisement_1">
                      <img
                        class="img_advertisement"
                        src="https://yt3.ggpht.com/V9v7ldiYlhX26Di6THQ2o5C4C1hh-Ob79caJUy4Y5nmg6odKgPtR6l7R6ozs0LCQd9VVPB5sFQ=s900-c-k-c0x00ffffff-no-rj"
                        width="60px"
                        height="60px"
                      />
                      <div class="offer_advertisement">
                        <h6>
                          <a class="amazon_name" style="font-size: 15px" href=""
                            >Amazon Pay Cashback Offer</a
                          >
                        </h6>
                      </div>
                      <div class="prize_advertisement">
                        Win Cashback Upto Rs 300*
                      </div>
                    </div>

                    <div class="advertisement_1">
                      <img
                        class="img_advertisement"
                        src="https://play-lh.googleusercontent.com/Y2_nyEd0zJftXnlhQrWoweEvAy4RzbpDah_65JGQDKo9zCcBxHVpajYgXWFZcXdKS_o"
                        width="60px"
                        height="60px"
                      />
                      <div class="offer_advertisement">
                        <h6>
                          <a class="amazon_name" style="font-size: 15px" href=""
                            >PayPal Offer</a
                          >
                        </h6>
                      </div>
                      <div class="prize_advertisement">
                        Transact first time with Paypal and get 100% cashback up
                        to Rs. 500
                      </div>
                    </div>

                    <div class="advertisement_1">
                      <img
                        class="img_advertisement"
                        src="https://yt3.ggpht.com/V9v7ldiYlhX26Di6THQ2o5C4C1hh-Ob79caJUy4Y5nmg6odKgPtR6l7R6ozs0LCQd9VVPB5sFQ=s900-c-k-c0x00ffffff-no-rj"
                        width="60px"
                        height="60px"
                      />
                      <div class="offer_advertisement">
                        <h6>
                          <a class="amazon_name" style="font-size: 15px" href=""
                            >Amazon Pay Cashback Offer</a
                          >
                        </h6>
                      </div>
                      <div class="prize_advertisement">
                        Win Cashback Upto Rs 300*
                      </div>
                    </div>

                    <div style="margin-top: 60px">
                      <img
                        src="https://image-us.24h.com.vn/upload/4-2021/images/2021-11-26/batch_h2-1637911867-32-width650height975.jpg"
                        width="100%"
                        height="300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9 detailMovie">
                <div class="movie_details">
                  <h3><b>PHOTOS</b></h3>
                  <div class="detail_photo">
                    <div style="margin-right: 20px">
                      <img
                        src="https://vcdn-ngoisao.vnecdn.net/2019/08/04/1-3434-1564881754.jpg"
                        width="100%"
                        alt=""
                      />
                    </div>
                    <div style="padding: 0px 10px">
                      <img
                        src="http://img.v3.news.zdn.vn/w660/Uploaded/abhuuah/2015_09_12/TMK_0019_zing_1.jpg"
                        width="100%"
                        alt=""
                      />
                    </div>
                    <div style="margin-left: 20px">
                      <img
                        src="https://vcdn-ngoisao.vnecdn.net/2019/08/04/1-3434-1564881754.jpg"
                        width="100%"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="tab summery-review">
                    <ul class="tab-menu">
                      <li>SUMMERY</li>
                      <li>USER REVIEW</li>
                    </ul>
                  </div>
                  <div class="tab-area">
                    <div class="descreption_area">
                      <h3><b>SYNOPSIS</b></h3>
                      <div style="margin-top: 20px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vehicula eros sit amet est tincidunt aliquet.
                        Fusce laoreet ligula ac ultrices eleifend. Donec
                        hendrerit fringilla odio, ut feugiat mi convallis nec.
                        Fusce elit ex, blandit vitae mattis sit amet, iaculis ac
                        elit. Ut diam mauris, viverra sit amet dictum vel,
                        aliquam ac quam. Ut mi nisl, fringilla sit amet erat et,
                        convallis porttitor ligula. Sed auctor, orci id luctus
                        venenatis, dui dolor euismod risus, et pharetra orci
                        lectus quis sapien. Duis blandit ipsum ac consectetur
                        scelerisque.
                      </div>
                    </div>
                    <div class="tab-area">
                      <div class="header">
                        <h3><b>CAST</b></h3>
                      </div>
                      <div
                        style="
                          width: 100%;
                          border-top: 1px dashed #1f3253;
                          margin-bottom: 30px;
                        "
                      ></div>
                      <div>
                        <div class="owl-carousel owl-theme">
                          <div class="item"><h4>1</h4></div>
                          <div class="item"><h4>2</h4></div>
                          <div class="item"><h4>3</h4></div>
                          <div class="item"><h4>4</h4></div>
                          <div class="item"><h4>5</h4></div>
                          <div class="item"><h4>6</h4></div>
                          <div class="item"><h4>7</h4></div>
                          <div class="item"><h4>8</h4></div>
                          <div class="item"><h4>9</h4></div>
                          <div class="item"><h4>10</h4></div>
                          <div class="item"><h4>11</h4></div>
                          <div class="item"><h4>12</h4></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.search {
  position: relative;
  padding-right: 15px;
  flex: 0 0 75%;
  max-width: 25%;
}
.search1 {
}
.list {
  padding: 0 5px 0 5px;
  position: relative;
  padding-left: 15px;
  flex: 0 0 75%;
  max-width: 75%;
}
.list1 {
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}

.widget-1 {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
}
.clear_all {
  margin-top: 5px;
}
.clear_all:hover {
  color: red;
}
.form-group {
  margin: 20px 0;
}
.checkbox {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  padding: 0;
  background: transparent;
  border: 1px solid #2d4186;
  color: #dbe2fb;
  margin-right: 10px;
}
label {
  font-size: 12px;
  text-transform: uppercase;
}

.widget-1-body {
  margin-top: 35px;
  border: none;
  background-color: #032055;
  padding: 30px;
  border: 1px solid #1a2a47;
  border-radius: 4px;
}
.filter_area {
  border-radius: 5px;
  /* padding: 10px 38px; */
  border: 1px solid rgba(5, 20, 44, 0.151);
  margin-bottom: 30px;
}
.showMovie {
  width: 100%;
  height: 70px;
  border: 1px solid white;
  display: flex;
  align-items: center;
}
.nice-select {
  margin-top: 5px;
  margin-left: 20px;
  height: 40px;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 30px;
  background: transparent;
}
.select-bar {
  margin-left: 20px;
  height: 40px;
  border: 1px solid rgba(163, 177, 198, 0.151);
  border-radius: 20px;
  padding: 10px 30px;
  background: transparent;
}
.grid-button {
  float: left;
}
.typeShow {
  margin-top: 30px;
}
.titleMovie {
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #1a2a47;
}
.nameMovie {
  padding: 20px 0px;
  font-size: 30px;
}
.reatingMovie {
  padding-bottom: 20px;
}
/* ////////////////////////////////////////////////// */
.advertisement {
  position: relative;
  padding-right: 15px;
  flex: 0 0 75%;
  max-width: 25%;
}
.detailMovie {
  padding: 0 5px 0 5px;
  position: relative;
  padding-left: 15px;
  flex: 0 0 75%;
  max-width: 75%;
}
.advertisement_1 {
  border: 1px dashed #1f3253;
  border-radius: 10px;
  padding: 20px 20px 28px;
  margin-bottom: 30px;
}
.img_advertisement {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.amazon_name {
  color: aliceblue;
}
.amazon_name:hover {
  color: aqua;
  text-decoration: none;
}

.offer_advertisement {
  margin-bottom: 20px;
}
.prize_advertisement {
  color: #9aace5;
  font-size: 13px;
  line-height: 18px;
  margin: 0;
}
.detail_photo {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.tab {
  margin-top: 30px;
  padding: 10px 0;
  border-top: 1px solid #11326f;
  border-bottom: 1px solid #11326f;
  margin-bottom: 40px;
}
.tab-menu li {
  cursor: pointer;
  margin-top: 10px;
  margin-right: 60px;
}
.tab-menu li :active {
  background-color: aquamarine;
}
.header {
  margin-bottom: 30px;
}
</style>