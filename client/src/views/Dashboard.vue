<template>
  <div class="section-dashboard">
    <div class="dashboard-header container">
      <!-- <h1>Dashboard</h1>
      <p>welcome to dev center</p>-->
      <div class="user-container p4">
        <div class="wrapper">
          <div class="sidebar">
            <h2>Dashboard</h2>
            <ul>
              <li class="ml-3 mr-3" @click.prevent="currentView = 'Profile'">
                <a href="#">Profile</a>
              </li>
              <li class="ml-3 mr-3" @click.prevent="currentView = 'EditProfile'">
                <a href="#">Edit Profile</a>
              </li>
              <li class="ml-3 mr-3" @click.prevent="currentView = 'Experience'">
                <a href="#">Add Experience</a>
              </li>
              <li class="ml-3 mr-3" @click.prevent="currentView = 'Education'">
                <a href="#">Add Education</a>
              </li>
              <li class="ml-3 mr-3">
                <a href="#">Update</a>
              </li>
            </ul>
          </div>
          <div class="main_content">
            <div class="header">
              Welcome!!
              <strong>
                <i>Olubayo.</i>
              </strong>
            </div>
            <div class="info">
              <keep-alive>
                <component :is="currentView"></component>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<<script>
export default {
    name: "Dashboard",
    data() {
        return {
            currentView: "Profile"
        }
    }
}
</script>

<style lang="scss" scoped>
.section-dashboard {
  background-color: rgb(236, 236, 236);
}
.dashboard-header {
  text-align: start !important;
}
.user-container {
  display: inline-block;
  width: 100%;
  margin: auto;
  background-color: #fff;
  color: #fff;
  box-shadow: 0 2px 3px #ccc;
}
.sidebar {
  padding: 1.4rem;
  width: 20%;
  background-color: #f4f7f7;
}
.user-content-wrap {
  width: 70%;
  color: orangered;
}

.nav-item .nav-link {
  color: black !important;
}
.avatar {
  border: 1px solid #ccc;
  padding: 15px;
}
.wrapper {
  display: flex;
  width: 100% !important;
  box-sizing: border-box;
}

@media only screen and (max-width: 600px) {
  .wrapper .sidebar {
    display: none;
  }
}
.wrapper .sidebar {
  width: 300px;
  height: 100% auto;
  background: rgb(62, 101, 124);
  padding: 30px 0px;
}

.wrapper .sidebar h2 {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li {
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  list-style: none;
}

.wrapper .sidebar ul li a {
  color: #fff;
  display: block;
  font-size: 14px;
  text-decoration: none;
}

.wrapper .sidebar ul li:hover {
  background-color: #7099ca;
}

.wrapper .sidebar ul li:hover a {
  color: #fff;
}

.wrapper .sidebar .social_media {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.wrapper .sidebar .social_media a {
  display: block;
  width: 40px;
  background: #594f8d;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #bdb8d7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.wrapper .main_content {
  width: 100%;
  margin-left: 2px;
}

.wrapper .main_content .header {
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info {
  margin: 20px;
  color: #717171;
  line-height: 25px;
}

.wrapper .main_content .info div {
  margin-bottom: 20px;
}
</style>