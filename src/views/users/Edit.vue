<template>
  <div class="users-edit">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>USER<span>EDIT</span></h1>
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
                              <h2>Edit User</h2><br>
                              <ul>
                                <li class="text-danger" v-for="error in errors">{{ error }}</li>
                              </ul>
                              <div class="form-group">
                                <label>Name</label> 
                                <input type="text" class="form-control" v-model="user.name">
                              </div>
                              <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" v-model="user.email">
                              </div>
                              <div class="form-group">
                                <label>Phone Number</label> 
                                <input type="text" class="form-control" v-model="user.phone_number">
                              </div>
                              <div class="form-group">
                                <label>Bio</label> 
                                <input type="text" class="form-control" v-model="user.bio">
                              </div>
                              <div class="form-group">
                                <label>Miscellaneous Info</label> 
                                <input type="text" class="form-control" v-model="user.misc_info">
                              </div>
                              <input type="submit" class="btn btn-primary" value="Edit"><br><br>
                            </form>
                            <section id="contact-area" class="pt-25 pb-25">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4 offset-md-5 p-0">
                                          <button v-on:click="destroyUser()" class="btn btn-7">Delete User</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =====>> End My Account <<===== 
    =========================== -->

<!--     <form v-on:submit.prevent="submit()">
      <h1>Edit User</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="user.name">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="user.email">
      </div>
      <div class="form-group">
        <label>Phone Number:</label> 
        <input type="text" class="form-control" v-model="user.phone_number">
      </div>
      <div class="form-group">
        <label>Bio:</label> 
        <input type="text" class="form-control" v-model="user.bio">
      </div>
      <div class="form-group">
        <label>Misc Info:</label> 
        <input type="text" class="form-control" v-model="user.misc_info">
      </div>
      <input type="submit" class="btn btn-primary" value="Edit"><br><br>
    </form>
    <div>
      <button v-on:click="destroyUser()">Destroy</button>
    </div> -->

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      errors: [],
      user_id: localStorage.getItem("user_id"),
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.user.name,
        email: this.user.email,
        phone_number: this.user.phone_number,
        bio: this.user.bio,
        misc_info: this.user.misc_info,
      };
      axios
        .patch("/api/users/" + this.user_id, params)
        .then(response => {
          this.$router.push("/users/" + this.user_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function() {
      axios.delete("/api/users/" + this.user_id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/signup");
        });
    }
  }
};
</script>