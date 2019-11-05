<template>
  <div class="workouts-new">
    <h1>Workouts New</h1>

    <form v-on:submit.prevent="submit()">
      <h1>New Workout</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Date:</label>
        <input type="date" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <label>Category:</label> 
        <input type="text" class="form-control" v-model="category">
      </div>
      <div class="form-group">
        <label>Note:</label> 
        <input type="text" class="form-control" v-model="note">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      date: "",
      category: "",
      note: "",
      errors: [],
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        date: this.date,
        category: this.category,
        note: this.note,
      };
      axios
        .post("/api/workouts", params)
        .then(response => {
          this.$router.push("/workouts");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>