<template>
  <div>
    <div id="progress">
      <span id="progress_value"></span>
    </div>
    <header class="header-section">
      <div class="container">
        <div class="header-wrapper">
          <a href="#" class="logo"> Cinema <span>.cn</span> </a>
          <ul class="menu">
            <li
              class="menu-item"
              v-for="(item, index) in this.menu"
              :key="index"
            >
              <a :href="item.url">{{ item.name }}</a>
            </li>
          </ul>
          <button class="btn" style="flex: 20%; color: #fff; float: right">Join Us</button>
        </div>
      </div>
    </header>
    <Nuxt />
    <footer class="footer-section">
      <div class="newslater-section">
        <div class="container">
          <div class="newslater-container bg-img">
            <div class="newslater-wrapper">
              <h5 class="cate">subscribe to Boleto</h5>
              <h3 class="title">to get exclusive benifits</h3>
              <form class="newslater-form">
                <input type="text" placeholder="Your Email Address" />
                <button type="submit">subscribe</button>
              </form>
              <p>We respect your privacy, so we never share your info</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="footer-top">
          <a href="#" class="logo"> Cinema <span>.cn</span> </a>
          <ul class="social-icons">
            <li>
              <a href="#">
                <b-icon icon="facebook"></b-icon>
              </a>
            </li>
            <li>
              <a href="#" class="">
                <b-icon icon="twitter"></b-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <b-icon icon="google"></b-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <b-icon icon="instagram"></b-icon>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-area">
            <div class="left">
              <span>
                Copyright © 2020.All Rights Reserved By
                <a href="#" style="color: #31d7a9">Boleto </a>
              </span>
            </div>
            <ul class="links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Movies",
          url: "/movies",
        },
        {
          name: "Blog",
          url: "/blog",
        },
        {
          name: "About us",
          url: "/about-us",
        },
        {
          name: "Contact us",
          url: "/contact-us",
        },
      ],
    };
  },
  mounted(){
    let scrollPrecentage = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress_value")
        let pos = document.documentElement.scrollTop;
        let calHeigh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round(pos * 100 / calHeigh);
        scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%)`
      }
      window.onscroll = scrollPrecentage;
      window.onload = scrollPrecentage;
  },
  methods: {
  }
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: #001232;
  color: #dbe2fb;
  overflow-x: hidden;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  scrollbar-width: none;
}

/*== HIDE DEFAULT SCROLL BAR ==*/
body::-webkit-scrollbar{
  display: none;
}

::selection{
  background-color: #e70634;
  color: #000;
}
/*== SCROLL PROGRESS ==*/
#progress{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  z-index: 999;
}

#progress_value{
  display: block;
  height: calc(100% - 5px);
  width: calc(100% - 5px);
  background-color: #1c1f25;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 0;
}

/*== HEADER ==*/

.header-section {
  border: 1px solid rgba(255, 255, 255, 0.102);
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}

.header-wrapper {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  align-content: center;
}

.logo:hover{
  text-decoration: none;
  color: #31d7a9;
}

.logo {
  flex: 30%;
  color: #e70634;
  margin: 0 30px 0 0;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Monoton;
  letter-spacing: 1px;
  transition: .3s;
}

.logo span{
  font-size: 0.5rem;
  margin-left: 3px;
  font-weight: 700;
  letter-spacing: 2px;

}

.header-wrapper .menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex: 80%;
  margin-bottom: 0;
}

.menu .menu-item {
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.menu .menu-item a {
  color: #fff;
  transition: 0.2s;
}

.menu .menu-item a:hover {
  text-decoration: none;
  color: #31d7a9;
}

.menu .menu-item-active a {
  color: #31d7a9;
}

/*== TITLE ==*/

.title {
  cursor: pointer;
}

.title span {
  transition: 0.5s linear;
}

.title:hover span.text-note {
  margin: 0 20px;
}

.title:hover span {
  color: #fff;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
}

.text-note {
  color: #31d7a9;
}

.typing-text {
  width: 70ch;
  animation: typing 5s steps(70), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 1.8em;
  color: #fff;
}

/*== FOOTER ==*/

.footer-section {
  position: relative;
}

.footer-section::before {
  position: absolute;
  content: "";
  bottom: 0;
  right: 0;
  left: 0;
  top: 80px;
  -webkit-mask-image: url("../assets/imgs/footer-shape.png");
  mask-image: url("../assets/imgs/footer-shape.png");
  -webkit-mask-position: top center;
  mask-position: top center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: cover;
  -webkit-mask-size: cover;
  background: #0a1e5e;
}

.newslater-section {
  padding-bottom: 120px;
}

.newslater-container {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  padding: 60px 20px;
  text-align: center;
}

.newslater-container * {
  position: relative;
  z-index: 1;
}

.newslater-container.bg-img {
  background-image: url("../assets/imgs/newslater-bg01.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.newslater-wrapper {
  max-width: 540px;
  margin: 0 auto;
}

.newslater-container::after {
  position: absolute;
  content: "";
  background-image: -webkit-linear-gradient(0deg, #7400ba 0%, #0f5ae0 100%);
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.newslater-wrapper .title,
.newslater-wrapper .cate {
  text-transform: uppercase;
}

.newslater-wrapper .title {
  margin-bottom: 50px;
}

.newslater-wrapper .cate {
  color: #31d7a9;
  margin-bottom: 23px;
}

.newslater-form {
  margin-bottom: 30px;
}

.newslater-form input {
  height: 50px;
  padding-right: 160px;
  color: #99abe2;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  padding-left: 20px;
  box-shadow: 0px 3px 10px 0px rgb(0 0 0 / 10%);
  background: transparent;
}

.newslater-form input:focus {
  outline: none;
}

.newslater-form button {
  position: absolute;
  right: 0;
  top: 0;
  background-image: -webkit-linear-gradient(
    169deg,
    #5560ff 17%,
    #aa52a1 63%,
    #ff4343 100%
  );
  box-shadow: 0px 10px 15px 0px rgb(59 55 188 / 50%);
  width: auto;
  color: #dbe2fb;
  height: 50px;
  padding: 0 40px;
  border-radius: 25px;
  border: none;
}

.footer-top {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

.footer-top > * {
  padding-bottom: 20px;
  margin-bottom: 0;
}

.social-icons {
  margin: -7.5px;
  display: flex;
  flex-wrap: wrap;
}

.social-icons li {
  list-style: none;
  padding: 7.5px;
}

.social-icons li a {
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 14px;
  display: inline-block;
  transition: all ease 0.3s;
}
.social-icons li a:hover {
  background: #31d7a9;
  border-color: #31d7a9;
}

.footer-top,
.footer-bottom-area {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.footer-bottom {
  padding: 25px 0;
}

.footer-bottom .links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 0;
}

.footer-bottom-area {
  flex-wrap: wrap-reverse;
}

.footer-bottom .links li {
  list-style: none;
  padding: 0 15px;
}

.footer-bottom .links li a {
  color: #dbe2fb;
  transition: 0.2s;
}

.footer-bottom .links li a:hover {
  text-decoration: none;
  color: #31d7a9;
}


@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  80% {
    border-color: transparent;
  }
}
</style>
