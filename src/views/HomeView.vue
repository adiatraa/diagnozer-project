<template>
  <div class="home">
    <div class="sidebar" :class="{ active: isSidebarActive }">
      <div class="logo_content">
        <div class="logo">
          <img class="logo" src="../assets/images/logoW.png" alt="">
          <div class="logo_name">Diagnozer</div>
        </div>
        <font-awesome-icon :icon="['fas', 'bars']" id="btn" @click="toggleSidebar"/>
      </div>
      <div class="profile_content">
          <div class="profile">
            <div class="profile_details">
              <img src="../assets/images/profile.jpg" alt="">
              <div class="name_user">
                <div class="name">Adiat Rahman</div>
                <div class="short_name">Adiat</div>
              </div>
            </div>
          </div>
      </div>
      <ul class="nav_list" style="margin-left: -40px;">
        <li>
          <a href="#">
              <i><font-awesome-icon :icon="['fas', 'house']" /></i>
              <span class="links_name">Home</span>
        </a>
        </li>
        <li>
          <span class="title_text" id="title">Diagnosis</span>
        </li>
        <li>
          <a href="#">
            <i><font-awesome-icon :icon="['fas', 'file-waveform']" /></i>
            <span class="links_name">Current Diagnosis</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i><font-awesome-icon :icon="['fas', 'notes-medical']" /></i>
            <span class="links_name">Diagnosis History</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i><font-awesome-icon :icon="['fas', 'kit-medical']" /></i>
            <span class="links_name">Search Diagnosis</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i><font-awesome-icon :icon="['fas', 'stethoscope']" /></i>
            <span class="links_name">Survey Diagnosis</span>
          </a>
        </li>
        <li>
          <span class="title_text" id="title">Users</span>
        </li>
        <li>
          <a href="#">
          <i><font-awesome-icon :icon="['fas', 'gear']" /></i>
            <span class="links_name">User Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
          <i><font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" id="log_out"/></i>
            <span class="links_name">Logout</span>
          </a>
        </li>
      </ul>  
    </div>
    <div class="home_content">
      
      <div class="text">Home Content</div>
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { NCard } from 'naive-ui'

export default {
  // component:{ NCard },
  data() {
    return {
      isSidebarActive: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;500&display=swap');

.home{
  position: relative;
}

.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  background: #003D5B;
  padding: 6px 14px;
  transition: all 0.5s ease;
}

.sidebar.active{
  width: 72px;
}

.sidebar .logo_content .logo img{
  width: 27px;
  height: 25px;
  margin-right: 12px;
}

.sidebar .logo_content .logo{
  color: #fff;
  display: flex;
  margin-right: 20px;
  height: 50px;
  align-items: center;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  opacity: 1;
  pointer-events: none;
  transition: all 0.5s ease;
}

.sidebar.active .logo_content .logo{
  pointer-events: none;
  opacity: 0;
}

.sidebar #btn{
  color: #fff;
  position: absolute;
  left: 96%;
  top: 18px;
  font-size: 20px;
  height: 20px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50px);
}

.sidebar.active #btn{
  left: 80%;
}

.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 5px;
  list-style-type: none;
  list-style: none;
  line-height: 50px;
}

.sidebar ul li span .title_text{
  height: 0px;
}

.sidebar ul li a{
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  white-space: nowrap;
}

.sidebar ul li a:hover{
  color: #003D5B;
  background: #fff;
}

.sidebar ul li a i{
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}

.sidebar .profile_content{
  position: relative;
  color: #fff;
  left: 0;
  width: 100%;
}

.sidebar .profile_content .profile{
  position: relative;
  padding: 10px 0px;
  height: 60px;
  margin-bottom: 10px;
}

.sidebar.active .links_name{
  opacity: 0;
  pointer-events: none;
}

.sidebar .links_name{
  opacity: 1;
  pointer-events: none;
  transition: all 0.5s ease;
}

.profile_content .profile .profile_details{
  display: flex;
  align-items: center;
}

.profile_content .profile .profile_details img{
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 12px;
}

.profile .profile_details .name_user{
  margin-left: 12px;
}

.profile .profile_details .name{
  font-size: 15px;
  font-weight: 400;
}

.profile .profile_details .short_name{
  font-size: 12px;
}

.title_text {
  font-size: 12px; /* Adjust the font size as needed */
  color: #ccc; /* Adjust the color as needed */
  text-align: center; /* Center the text */
  margin-top: 5px; /* Add some top margin for spacing */
}

.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;
  background-color: #F4F6F9;
}

.sidebar.active ~.home_content{
  width: calc(100% - 72px);
  left: 72px;
}

.home_content .text{
  font-size: 25px;
  font-weight: 500;
  margin: 12px;
}
</style>