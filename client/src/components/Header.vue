 <template>
  <div class="header-section">
    <nav class="navbar navbar-expand-lg primary-header">
      <div class="container">
        <router-link tag="li" exact to="/" active-class="active" class="navbar-brand">
          <span>DevCircle</span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link tag="li" exact to="/Developer" active-class="active" class="nav-item">
              <span class="nav-link pl-4 pr-4">Developers</span>
            </router-link>
            <router-link tag="li" exact to="/Dashboard" class="nav-item">
              <span class="nav-link pl-4 pr-4">Dashboard</span>
            </router-link>
          </ul>
          <ul class="navbar-nav ml-auto">
            <router-link
              tag="li"
              exact
              to="/signup"
              active-class="active"
              class="nav-item header-item"
            >
              <span class="nav-link header-link pl-4 pr-4">Sign Up</span>
            </router-link>
            <router-link
              tag="li"
              exact
              to="/login"
              active-class="active"
              class="nav-item ml-3 header-item"
            >
              <span class="nav-link header-link pl-4 pr-4">Login</span>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.primary-header {
  background-color: #fff;
  color: black;
  padding: 0.5em !important;
  box-shadow: 0 1px 1px #ccc;
  border-bottom: 1px solid #ccc;
  .navbar-brand {
    color: rgb(51, 111, 148);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 19px;
  }
  .header-item {
    border: 1px solid rgb(51, 111, 148);
    border-radius: 2rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 3px #ccc;
    .header-link {
      font-size: 14px;
    }
  }
  .header-item:hover {
    color: #fff;
    background-color: rgb(51, 111, 148);
  }
}
</style>