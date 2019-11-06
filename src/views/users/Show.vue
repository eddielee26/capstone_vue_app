<template>
  <div class="users-show">
    <h1>User Show</h1>

    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>phone_number: {{ user.phone_number }}</p>
    <p>bio: {{ user.bio }}</p>
    <p>misc_info: {{ user.misc_info }}</p>

    <router-link v-bind:to="`/users/${user_id}/edit`">Edit</router-link>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      user_id: localStorage.getItem("user_id"),
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {}
};
</script>