<template>
  <div class="workouts-edit">
    <h1>Workouts Edit</h1>

    <form v-on:submit.prevent="submit()">
      <h1>Edit Workout</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="workout.name">
      </div>
      <div class="form-group">
        <label>Date:</label>
        <input type="date" class="form-control" v-model="workout.date">
      </div>
      <div class="form-group">
        <label>Category:</label> 
        <input type="text" class="form-control" v-model="workout.category">
      </div>
      <div class="form-group">
        <label>Note:</label> 
        <input type="text" class="form-control" v-model="workout.note">
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
      workout: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/workouts/" + this.$route.params.id).then(response => {
      this.workout = response.data;
      console.log(this.workout);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.workout.name,
        date: this.workout.date,
        category: this.workout.category,
        note: this.workout.note,
      };
      axios
        .patch("/api/workouts/" + this.workout.id, params)
        .then(response => {
          this.$router.push("/workouts/" + this.workout.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>