<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <img src="../assets/img/abstract-1278017_1920.jpg" class="img-fluid avatar" alt />
      </div>
      <div class="col-md-9"></div>
    </div>
    <div>You have not yet setup a profile, please add some info</div>
    <h3>Education Credentials</h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Microsoft</td>
            <td>Engineer</td>
            <td>12 Oct 19</td>
          </tr>
          <tr>
            <td>Jhaki</td>
            <td>Developer</td>
            <td>21 May 14</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>Data Scientist</td>
            <td>03 June 16</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>Experience Credentials</h3>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Microsoft</td>
              <td>Engineer</td>
              <td>12 Oct 19</td>
            </tr>
            <tr>
              <td>Jhaki</td>
              <td>Developer</td>
              <td>21 May 14</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>Data Scientist</td>
              <td>03 June 16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.btn-color {
  background-color: rgb(51, 111, 148) !important;
  color: #fff !important;
}
</style>