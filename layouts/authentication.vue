<template>
  <div class="account-section bg-img">
    <div class="container">
      <div class="section-pad">
        <div class="account-area">
          <nuxt />
          <div class="or">
            <span>Or</span>
          </div>
          <ul class="social-icons">
            <li>
              <a href="#" class="active">
                <b-icon icon="facebook"></b-icon>
              </a>
            </li>
            <li>
              <a href="#" class="">
                <b-icon icon="twitter"></b-icon>
              </a>
            </li>
            <li>
              <a href="#" class="">
                <b-icon icon="google"></b-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.account-section {
  background-image: url("../assets/imgs/account-bg.jpg");
}

.section-pad{
    padding: 100px 0;
}

.account-area {
  width: 100%;
  max-width: 540px;
  padding: 60px 45px;
  margin: 0 auto;
  background-color: rgba(68, 90, 153, 0.051);
  box-shadow: 0px 0px 29.4px 0.6px rgb(0 0 0 / 50%);
}

.account-header {
  margin-bottom: 35px;
  text-align: center;
  text-transform: uppercase;
}

.account-header .cate {
  font-size: 24px;
  margin-bottom: 25px;
  color: #31d7a9;
}

.account-header .account-title {
  font-size: 40px;
  font-weight: 700;
  margin-top: 15px;
}

.account-btn {
  background-image: -webkit-linear-gradient(
    169deg,
    #5560ff 17%,
    #aa52a1 63%,
    #ff4343 100%
  );
  transition: all ease 0.3s;
  border-radius: 30px;
  width: auto;
  padding: 0 50px;
  height: 50px;
  text-transform: uppercase;
  margin: 10px auto;
}

.account-btn:hover {
  box-shadow: 0px 10px 15px 0px rgb(59 55 188 / 50%);
}

.account-area .option {
  text-align: center;
  margin-bottom: 28px;
}

.account-area .option a {
  color: #31d7a9;
}

.account-section .or {
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  margin-bottom: 20px;
}
.account-area .or span {
  position: relative;
}

.account-area .or span::before {
  right: calc(100% + 40px);
}

.account-area .or span::after {
  left: calc(100% + 40px);
}

.account-area .or span::after,
.account-area .or span::before {
  background-color: #bdbdbd;
  position: absolute;
  content: "";
  opacity: 0.502;
  height: 2px;
  width: 500px;
  top: 10px;
}

.account-area .social-icons {
  justify-content: center;
}

.account-area .social-icons a:hover {
  border: none;
  background: -webkit-linear-gradient(
    169deg,
    #5560ff 17%,
    #aa52a1 63%,
    #ff4343 100%
  );
}
</style>