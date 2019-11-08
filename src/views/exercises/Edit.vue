<template>
  <div class="exercises-edit">
    <h1>Exercises Edit</h1>

    <form v-on:submit.prevent="submit()">
      <h1>Edit Exercise</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="exercise.name">
      </div>
      <div class="form-group">
        <label>Sets:</label>
        <input type="number" class="form-control" v-model="exercise.sets">
      </div>
      <div class="form-group">
        <label>Reps:</label> 
        <input type="number" class="form-control" v-model="exercise.reps">
      </div>
      <div class="form-group">
        <label>Weight:</label> 
        <input type="number" class="form-control" v-model="exercise.weight">
      </div>
      <div class="form-group">
        <label>Image:</label> 
        <input type="text" class="form-control" v-model="exercise.image">
      </div>
      <div class="form-group">
        <label>Video:</label> 
        <input type="text" class="form-control" v-model="exercise.video">
      </div>
      <div class="form-group">
        <label>Muscle Group:</label> 
        <input type="text" class="form-control" v-model="exercise.muscle_group">
      </div>
      <input type="submit" class="btn btn-primary" value="Update Exercise">
    </form>

    <div>
      <button v-on:click="destroyExercise()">Destroy</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      exercise: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/exercises/" + this.$route.params.id).then(response => {
      this.exercise = response.data;
      console.log(this.exercise);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.exercise.name,
        sets: this.exercise.sets,
        reps: this.exercise.reps,
        weight: this.exercise.weight,
        image: this.exercise.image,
        video: this.exercise.video,
        muscle_group: this.exercise.muscle_group,
      };
      axios
        .patch("/api/exercises/" + this.exercise.id, params)
        .then(response => {
          this.$router.push("/exercises/" + this.exercise.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyExercise: function() {
      axios.delete("/api/exercises/" + this.exercise.id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/exercises");
        });
    }
  }
};
</script>