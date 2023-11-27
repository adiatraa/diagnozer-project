<template>
  <!-- <img class="background-img" src="../../assets/images/background.png" alt=""> -->
  <div class="login-container">
    <div class="second-container">
      <div class="left-container">
          <div class="website-logo">
            <a href="Login.vue">
            <img class="logo" src="../../assets/images/logo.png" alt="">
            </a>
          </div>
          <h style="margin-top: 12px; font-family: 'Roboto'; font-style: normal; font-weight: 500; font-size: 40px; align-self: stretch;">Welcome Back!</h>
          <h style="margin-top: -28px;font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 24px; align-self: stretch;">Please insert your credentials</h>
          <div class="login-form">
            <form @submit.prevent="login">
            <div class="form-box">
              <input type="text" id="email" v-model="email" placeholder="Email" required="required"/>
              <div class="icon">
                <font-awesome-icon :icon="['far', 'envelope']" />
              </div>
            </div>
            <div class="form-box">
              <input :type="showPassword ? 'text' : 'password'"
                      id="password"
                      v-model="password"
                      placeholder="Password"
                      required="required"
                      @input="validatePassword"
                      :class="{ 'is-invalid': passwordError }"/>
              <div class="icon lock-icon">
                <font-awesome-icon :icon="['fas', 'lock']" />
              </div>
              <div class="icon eye-icon" @click="togglePassword">
                <font-awesome-icon :icon="showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']" />
              </div>
            </div>
              <button type="submit" class="button-login" >
                <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                Login
              </button>
            </form>
          </div>
      </div>
      <div class="right-container">
        <div class="cover">
            <img src="../../assets/images/cover.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    login() {
      // Your login logic here
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');


.login-container {
    background-image: url("../../assets/images/background.png");
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.second-container {
  display: flex;
  padding: 32px;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  background-color: #FAFAFA;
  border-radius: 8px;
  border: 1px solid var(--gray_secondary, #C1C1C1);
  width: 1450px; 
  height: 630px; 
}

.left-container{
  display: flex;
  height: 100%;
  padding: 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border: 1px solid var(--grayish_white, #E6E6E6);
  border-right: 1px solid transparent !important;
  width: 50%;
  border-radius: 8px;
}

.website-logo{
  display: flex;
  align-items: center;
  align-content: center;
  gap: 16px;
  align-self: stretch;
  flex-wrap: wrap;
}

.website-logo img{
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
}

.right-container{
  display: flex;
  height: 100%;
  margin-left: -5px;
  padding: 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border: 1px solid var(--grayish_white, #E6E6E6);
  border-left: 1px solid transparent !important;
  width: 50%;
  border-radius: 0px 8px 8px 0px;
}

.cover img{
  width: 360px;
  margin: -40px 0 0 140px;
}

  .form-box {
    position: relative;
    width: 550px;
    height: 46px;
    margin-bottom: 35px;
  }

  .form-box .icon{
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black; 
    font-size: 1.2em;
  }
  .form-box input {
    width: 100%;
    outline: 0;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #777777;
    padding: 10px;
    padding-left: 60px;
    background: var(--grayish_white, #E6E6E6);
    font-size: 1.2em;
    color: black;
  }

  .form-box .icon.eye-icon {
    left: auto;
    right: 0;
    cursor: pointer;
}

  .button-login{
    display: flex;
    width: 550px;
    height: 46px;
    padding: 17px 34px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: var(--primary_dark_blue, #003D5B);
    border-color: transparent;
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 130%;
  }


</style>
