<template>
  <div>
    <header class="header-section">
      <div class="container">
        <div class="header-wrapper">
          <div class="logo">
            <a href="#">
              <img
                src="http://pixner.net/boleto/demo/assets/images/logo/logo.png"
                alt="cinema image"
              />
            </a>
          </div>
          <ul class="menu">
            <li
              class="menu-item"
              v-for="(item, index) in this.menu"
              :key="index"
            >
              <a :href="item.url">{{ item.name }}</a>
            </li>
          </ul>
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
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  background: #001232;
  color: #dbe2fb;
  overflow-x: hidden;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
}

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

.header-wrapper .logo {
  flex: 20%;
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
</style>
