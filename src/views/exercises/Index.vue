<template>
  <div class="exercises-index">
    <h1>Exercises Index</h1>
    <div v-for="exercise in exercises">

      <router-link v-bind:to="`/exercises/${exercise.id}`">
        <h2>Name: {{ exercise.name }}</h2>
      </router-link>

      <p>Sets: {{ exercise.sets }}</p>
      <p>Reps: {{ exercise.reps }}</p>
      <p>Weight: {{ exercise.weight }}</p>
      <p>Image: {{ exercise.iamge }}</p>
      <p>Video: {{ exercise.Video }}</p>
      <p>Muscle Group: {{ exercise.muscle_group }}</p>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      exercises: []
    };
  },
  created: function() {
    axios.get("/api/exercises").then(response => {
      this.exercises = response.data;
      console.log(this.exercises);
    });
  },
  methods: {}
};
</script>