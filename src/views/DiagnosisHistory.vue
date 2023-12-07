<template>
  <body>
    <div class="diagnosisHistory">
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
            <a href="/">
                <i><font-awesome-icon :icon="['fas', 'house']" /></i>
                <span class="links_name">Home</span>
          </a>
          </li>
          <li>
            <span class="title_text" id="title">Diagnosis</span>
          </li>
          <li>
            <a href="/currentDiagnosis">
              <i><font-awesome-icon :icon="['fas', 'file-waveform']" /></i>
              <span class="links_name">Current Diagnosis</span>
            </a>
          </li>
          <li class="active-nav">
            <a href="/diagnosisHistory">
              <i><font-awesome-icon :icon="['fas', 'notes-medical']" /></i>
              <span class="links_name">Diagnosis History</span>
            </a>
          </li>
          <li>
            <a href="/searchDiagnosis">
              <i><font-awesome-icon :icon="['fas', 'kit-medical']" /></i>
              <span class="links_name">Search Diagnosis</span>
            </a>
          </li>
          <li>
            <a href="/surveyDiagnosis">
              <i><font-awesome-icon :icon="['fas', 'stethoscope']" /></i>
              <span class="links_name">Survey Diagnosis</span>
            </a>
          </li>
          <li>
            <span class="title_text" id="title">Users</span>
          </li>
          <li>
            <a href="/userSetting">
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
        <nav class="nav_head">
          <ul>
            <li class="title_page">Home</li>
            <li class="subtitle_page">Quick Diagnosis Survey</li>
            <li class="search-icon">
              <i><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></i>
              <input type="search" placeholder="headache, low energy, other symptoms" id="search-diagnosis">
            </li>
            <li class="profile-icon">
              <i><font-awesome-icon :icon="['fas', 'user']" /></i>
            </li>
            <li class="expand-icon">
              <i><font-awesome-icon :icon="['fas', 'maximize']" /></i>
            </li>
          </ul>
        </nav>
        <div class="breadcrumb-page">
          <v-breadcrumbs :items="items" style="justify-content: flex-end;">
            <template v-slot:divider>
              <v-icon style="font-size: 16px;"><font-awesome-icon :icon="['fas', 'angle-right']" /></v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <v-container style="max-width: 96%;">
          <v-row justify="space-around">
            <v-card width="2300" height="590" style="margin-bottom: 10px;">
              <v-toolbar color="#003D5B" theme="dark" style="padding: 10px 0 10px 0;">
                <template v-slot:prepend>
                  <i style="margin-left: 10px; font-size: 30px;"><font-awesome-icon :icon="['fas', 'notes-medical']" /></i>
                </template>

                <v-toolbar-title class="text-h6" style="font-size: 24px;"> 
                  Diagnosis History
                  <v-toolbar-title class="text-subtitle-2"> Did you do your Quick Survey Diagnosis yet? Your can view your past results in here. </v-toolbar-title>
                </v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <div class="font-weight-bold ms-1 mb-2">Lorem Ipsum</div>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
        
        <v-container style="max-width: 96%;" class="bottom">
          <footer style="margin-top: 20px;">
            <v-row justify="space-around">
              <img class="logo" src="../assets/images/logo.png" alt="" style="width: 44px; height: 44px;">
              <p class="text-h6" style="margin-left: 12px; margin-bottom: -20px;">
                Diagnozer
                <p class="text-subtitle-3" style="margin-top: -12px; font-size: 10px; margin-bottom: 2px;">SMART on FHIR Health Care System</p>
                <v-btn href="https://github.com/adiatraa/diagnozer-project" target="_blank" style="font-size: 14px; padding-left: 15px;">
                  <font-awesome-icon :icon="['fas', 'code']" style="margin-right: 10px;"/>
                  Documentation
                </v-btn>
              </p>
              <div id="vertical-line"></div>
              <div>
                <p class="text-h6" style="font-size: 16px; margin-top: -10px; margin-bottom: 5px;">Our Developers and Team</p>
                <v-card
                  class="mx-auto"
                  width="262"
                  style="height: 75px; border-radius: 8px;"
                >
                  <p style="margin-left: 60px; margin-top: 10px; margin-bottom: 5px;">
                    <font-awesome-icon :icon="['fab', 'github']" style="font-size: 24px; margin-right: 5px;"/>
                    Kevin Yapade
                  </p>
                  <p style="margin-left: 60px;">
                    <font-awesome-icon :icon="['fab', 'linkedin']" style="font-size: 24px; margin-right: 5px;"/>
                    Kevin Yapade
                  </p>
                </v-card>
              </div>

              <div style="margin-top: 27px; margin-left: 12px;">
                <v-card
                  class="mx-auto"
                  width="262"
                  style="height: 75px; border-radius: 8px;"
                >
                  <p style="margin-left: 60px; margin-top: 10px; margin-bottom: 5px;">
                    <font-awesome-icon :icon="['fab', 'github']" style="font-size: 24px; margin-right: 5px;"/>
                    Adiat Rahman
                  </p>
                  <p style="margin-left: 60px;">
                    <font-awesome-icon :icon="['fab', 'linkedin']" style="font-size: 24px; margin-right: 5px;"/>
                    Adiat Rahman
                  </p>
                </v-card>
              </div>

              <div style="margin-top: 27px; margin-left: 12px;">
                <v-card
                  class="mx-auto"
                  width="262"
                  style="height: 75px; border-radius: 8px;"
                >
                  <p style="margin-left: 60px; margin-top: 10px; margin-bottom: 5px;">
                    <font-awesome-icon :icon="['fab', 'github']" style="font-size: 24px; margin-right: 5px;"/>
                    Fairuz Akbar
                  </p>
                  <p style="margin-left: 60px;">
                    <font-awesome-icon :icon="['fab', 'linkedin']" style="font-size: 24px; margin-right: 5px;"/>
                    Fairuz Akbar
                  </p>
                </v-card>
              </div>

              <div style="margin-top: 27px; margin-left: 12px;">
                <v-card
                  class="mx-auto"
                  width="262"
                  style="height: 75px; border-radius: 8px;"
                >
                  <p style="margin-left: 60px; margin-top: 10px; margin-bottom: 5px;">
                    <font-awesome-icon :icon="['fab', 'github']" style="font-size: 24px; margin-right: 5px;"/>
                    Hendrianto Try
                  </p>
                  <p style="margin-left: 60px;">
                    <font-awesome-icon :icon="['fab', 'linkedin']" style="font-size: 24px; margin-right: 5px;"/>
                    Hendrianto Try
                  </p>
                </v-card>
              </div>
            </v-row>
          </footer>
        </v-container>
      </div>
    </div>
  </body>
</template>

<script>
import { defineComponent } from 'vue'

export default {
  data: ()=> ({
      isSidebarActive: false,
    items: [
      {
        title: 'Home',
        disabled: false,
        href: '/'
      },
      {
        title: 'Diagnosis History',
        disabled: true,
        href: '/diagnosisHistory'
      },
    ],
  }),
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;500&display=swap');

body{
  background-color: rgb(244,246,249);
}

.diagnosisHistory{
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

.sidebar ul li.active-nav{
  color: #003D5B;
  background: #fff;
  border-radius: 12px;
}

.sidebar ul li.active-nav a{
  color: #003D5B;
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

.home_content .nav_head{
  background: #ffffff;
  padding: 20px 40px 5px 0px;

}

.home_content .nav_head ul{
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.home_content .nav_head ul li.title_page{
  flex: 1;
  font-size: 18px;
  font-weight: 600;
}

.home_content .nav_head ul li.subtitle_page{
  flex: 9 240px;
  font-size: 14px;
  font-weight: 400;
  color: #767676;
}

.home_content .nav_head ul li.search-icon{
  margin-right: 30px;
  border-radius: 8px;
  border: 1px solid #000;
  width: 500px;
}

.home_content .nav_head ul li.search-icon input{
  margin-right: 10px;
  width: 80%;
  font-size: 16px;
  font-weight: 300;
  padding: 8px 10px;
  outline: none;
}

.home_content .nav_head ul li.search-icon i{
  padding: 10px;
}

.home_content .nav_head ul li.profile-icon i{
  margin-right: 30px;
  font-size: 18px;
}

.home_content .nav_head ul li.expand-icon i{
  font-size: 18px;
}

.home_content .breadcrumb-page {
  margin-left: 1200px;
  margin-top: 20px;
  margin-right: 20px;
}

#vertical-line{
  width: 1px;
  height: 100px;
  background-color: black;
  margin-left: 28px;
  margin-right: 28px;
}
</style>