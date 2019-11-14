<template>
  <div class="login">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>USER<span>LOGIN</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <!-- ===========================
    =====>> My Account <<===== -->
    <section id="my-account-area" class="pt-50 pb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="my-account-content">
                        <form class="my-account-form">
                            <form v-on:submit.prevent="submit()">
                              <h2>Login</h2><br><br>
                              <ul>
                                <li class="text-danger" v-for="error in errors">{{ error }}</li>
                              </ul>
                              <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" v-model="email">
                              </div>
                              <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" v-model="password">
                              </div>
                              <button type="submit" class="btn btn-primary" value="Login">Log In</button>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =====>> End My Account <<===== 
    =========================== -->

<!--     <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Login">
      </form>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/workouts");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>