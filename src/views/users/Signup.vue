<template>
  <div class="signup">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>SIGN<span>UP</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <div class="container">
      
      <section id="my-account-area" class="pt-50 pb-50">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                      <div class="my-account-content">
                          <h2>New Member</h2>
                          <form class="my-account-form">
                              <form v-on:submit.prevent="submit()">
                                <ul>
                                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                </ul>
                                <div class="form-group">
                                  <label>Name:</label> 
                                  <input type="text" class="form-control" v-model="name">
                                </div>
                                <div class="form-group">
                                  <label>Email:</label>
                                  <input type="email" class="form-control" v-model="email">
                                </div>
                                <div class="form-group">
                                  <label>Password:</label>
                                  <input type="password" class="form-control" v-model="password">
                                </div>
                                <div class="form-group">
                                  <label>Password confirmation:</label>
                                  <input type="password" class="form-control" v-model="passwordConfirmation">
                                </div>
                                <button type="submit" class="btn btn-primary" value="Submit">Register</button>
                              </form>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>

<!--       <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>