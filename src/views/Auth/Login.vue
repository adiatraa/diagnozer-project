<template>
    <div class="login-container">
      <div class="second-layer">
        <div class="left-container">
          <div class="website-logo">
            <a href="Login.vue">
            <img class="logo" src="../../assets/images/logo.png" alt="">
            </a>
          </div>
          <h2 style="margin-left: 295px; margin-top: 12px; font-family: 'Poppins'; font-size: 25px;">Diagnozer</h2>
          <div class="login-form">
            <h2>Login</h2>
            <form @submit.prevent="login">
            <div class="form-box">
                
                <input type="text" id="email" v-model="email" required="required"/>
                <span>Email</span>
            </div>
            <div class="form-box">
                <input type="password" id="password" v-model="password" required="required"/>
                <span>Password</span>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
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
        password: ''
      };
    },
    methods: {
      login() {
        // Add your login logic here
        // You can access the email and password with this.email and this.password
      }
    }
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
.login-container {
    background-color: #003D5B;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.second-layer {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 1450px; /* Set the desired width */
    height: 630px; /* Set the desired height */
    align-items: center;
}

.left-container{
  float: left;
  background-color: white;
  width: 50%;
  height: 100%;
  border-radius: 20px 0 0 20px;
}

.website-logo{
  margin-top: 60px;
  margin-left: 45%;
}

.right-container{
  float: right;
  background-color: #FAFAFA;
  width: 50%;
  height: 100%;
  border-radius: 0 20px 20px 0;
}

.cover img{
  width: 350px;
  margin: 60px 0 0 195px;
}

  .login-form{
    background-color: #003D5B;
    margin: 40px 0 0 60px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 600px;
  }
  
.login-form h2{
  margin-bottom: 30px;
  color: white;
}

  .form-box {
    position: relative;
    width: 550px;
    height: 46px;
    margin-bottom: 35px;
  }

  .form-box:last-child
  {
    margin-bottom: 0;
  }
  
  .form-box input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid #777777;
    background: transparent;
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    color: #fff;
    font-weight: 300;
  }

  .form-box span{
    position: absolute;
    top: 1px;
    left: 1px;
    padding: 10px;
    display: inline-block;
    pointer-events: none;
    color: #777777;
    font-size: 16px;
    transition: 0.5s;
    pointer-events: none;
  }

  .login-form .form-box input:focus,
  .login-form .form-box input:valid
  {
    color: white;
    border: 1px solid white;
  }

  .login-form .form-box input:focus + span,
  .login-form .form-box input:valid + span
  {
    color: white;
    height: 30px;
    line-height: 30px;
    transform: translate(-2px, -27px) scale(0.88);
    background-color: #003D5B;
  }

  /* .login-form .form-box input:focus ~ span,
  .login-form .form-box valid:focus ~ span
  {
    transform: translateX(-10px) translateY(-39px);
    font-size: 12px;
  } */
  

  /* .form-input input:valid ~ span,
  .form-input input:focus ~ span
  .btn {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
  } */
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  