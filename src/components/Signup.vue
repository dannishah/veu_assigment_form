<template>
  <div class="main">
    <div class="left">
      <div class="container">
        <div class="text">
          <h1>Sign up</h1>

          <p>Stay updated on your professional world</p>
        </div>

        <form name="form" action="/action_page.php" class="your-input">
          <div class="input">
            <input type="text" name="email" v-model="email" id="email" required />

            <label for="email">Email</label>
          </div>

          <div class="input">
            <input
              type="password"
              name="password"
              v-model="password"
              id="password"
              required
            />

            <label for="password">Password</label>
          </div>
          <div class="input">
            <input
              type="password"
              name="re-type password"
              id="re-type password"
              required
            />

            <label for="re-type password">Re-type Password</label>
          </div>
        </form>

        <button type="submit" @click="validate">Sign up</button>

        <p class="join-link">
          <a href="#" class="join-now">
            <router-link to="./componets/Signup"
              ><router-link to="/">Cancel</router-link></router-link
            ></a
          >
        </p>
      </div>
    </div>

    <div class="right"></div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    validate() {
      let x = document.forms["form"][("email", "password", "re-type password")].value;
      if (x == "") {
        document.getElementById("email").style.background = "#ffc0cb";
        document.getElementById("password").style.background = "#ffc0cb";
        document.getElementById("re-type password").style.background = "#ffc0cb";

        return false;
      } else {
        document.getElementById("email").style.background = "white";
        document.getElementById("password").style.background = "white";

        document.getElementById("re-type password").style.background = "white";
        alert(this.email + " " + this.password);
        console.log(this.email, this.password);
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  width: 320px;
  height: 480px;
  background: #fff;
  box-shadow: 0 10px 15px rgba(179, 179, 179, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
}

.container h2 {
  color: #0a66c3;
  font-size: 1.6rem;
}

.container h2 i {
  font-size: 1.8rem;
  padding-left: 0.1rem;
}

.text p {
  font-size: 0.8rem;
  padding-top: 0.3rem;
}

.input {
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 0.7em;
}

.your-input input {
  width: 100%;
  height: 50px;
  padding-top: 1.1rem;
  padding-left: 9px;
  outline: none;
  border: 1px solid #8c8c8c;
  border-radius: 3px;
  transition: 0.2s;
}

.your-input label {
  position: absolute;
  top: 30%;
  left: 10px;
  font-size: 1.1rem;
  color: #8c8c8c;
  transition: 0.2s;
}

.input input:focus ~ label,
.input input:valid ~ label {
  top: 10%;
  font-size: 0.8rem;
  color: #000;
}

.input input:focus {
  border-width: 2px;
  border-color: #0a66c3;
}

.forgot-password-link:hover {
  background: rgba(10, 102, 195, 0.3);
}

button {
  height: 50px;
  background: #0a66c3;
  outline: none;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
}

.join-link {
  text-decoration: none;
  font-weight: bolder;
  color: #0a66c3;
  text-align: center;
}

.join-now {
  text-decoration: none;
  font-weight: bolder;
  color: #0a66c3;
  border-radius: 12px;
  transition: 0.3s;
  font-weight: bolder;
  padding: 0.2rem;
}

.join-now:hover {
  background: rgba(10, 102, 195, 0.3);
}

.main {
}

.left {
  float: left;
  width: 49vw;
  height: 100vh;
  position: relative;
}

.right {
  float: right;
  width: 49vw;
  height: 100vh;
  background: url("/public/img/pic.jpg");
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
