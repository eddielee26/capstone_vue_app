<template>
  <div class="exercises-new">
    <h1>Exercises New</h1>

    <form v-on:submit.prevent="submit()">
      <h1>New Exercise</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Sets:</label>
        <input type="number" class="form-control" v-model="sets">
      </div>
      <div class="form-group">
        <label>Reps:</label> 
        <input type="number" class="form-control" v-model="reps">
      </div>
      <div class="form-group">
        <label>Weight:</label> 
        <input type="number" class="form-control" v-model="weight">
      </div>
      <div class="form-group">
        <label>Image:</label> 
        <input type="text" class="form-control" v-model="image">
      </div>
      <div class="form-group">
        <label>Video:</label> 
        <input type="text" class="form-control" v-model="video">
      </div>
      <div class="form-group">
        <label>Muscle Group:</label> 
        <input type="text" class="form-control" v-model="muscle_group">
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
      sets: "",
      reps: "",
      weight: "",
      image: "",
      video: "",
      muscle_group: "",
      errors: [],
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        sets: this.sets,
        reps: this.reps,
        weight: this.weight,
        image: this.image,
        video: this.video,
        muscle_group: this.muscle_group,
      };
      axios
        .post("/api/exercises", params)
        .then(response => {
          this.$router.push("/exercises");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>