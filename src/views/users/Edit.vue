<template>
  <div class="users-edit">
    <h1>Users Edit</h1>

    <form v-on:submit.prevent="submit()">
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
    </div>

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