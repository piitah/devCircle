<template>
  <div id="app">
    <section>
      <app-header></app-header>
    </section>
    <router-view />
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import appFooter from "./components/Footer";
import appHeader from "../src/components/Header";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader,
    appFooter
  }
};
</script>
<style lang="scss">
#app {
  font-family: Camphor, Open Sans, Segoe UI, san-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0.823);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
