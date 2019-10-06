<template>
  <div class="section">
    <div class="top-wrap">
      &nbsp;
      <div class="container">
        <div class="top-content-wrap w-100 m-auto">
          <div class="top-header-primary">
            <h1>Developer Connector</h1>
            <h5>
              Create a developer profile/portfolio, share posts and get
              help from other developers
            </h5>
          </div>
          <div class="top-header-sec">
            <p></p>
          </div>
          <div class="d-flex flex-row justify-content-center">
            <a class="top-header-btn mr-3">
              <span class="header-link">Sign Up</span>
            </a>
            <a class="top-header-btn">
              <span class="header-link">Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.top-wrap {
  background-image: linear-gradient(
      to right bottom,
      rgba(86, 178, 235, 0.32),
      rgba(39, 83, 110, 0.177)
    ),
    url("../assets/img/abstract-1278017_1920.jpg");
  background-position: top;
  background-size: cover;
  width: 100%;
  height: 88vh;
  .top-content-wrap {
    margin: auto !important;
    padding: 2rem;
    width: 100%;
    .top-header-primary {
      width: 60%;
      text-align: center;
      margin: auto;
      margin-top: 6.5rem;
      font-size: 22px;
      font-weight: bold;
      font-weight: 500;
      color: #fff;
    }
    .top-header-sec {
      color: #fff;
      font-size: 15px;
    }
    .top-header-btn {
      width: 10rem;
      color: #fff;
      padding: 10px;
      border: 1px solid rgb(51, 111, 148);
      border-radius: 2rem;
      transition: all 0.3s ease-in-out;
      font-size: 14px;
    }
    .top-header-btn:hover {
      color: #fff;
      background-color: rgb(51, 111, 148);
    }
  }
}
</style>