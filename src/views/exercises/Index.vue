<template>
  <div class="exercises-index">
    <h1>Exercises Index</h1>
    <div v-for="exercise in exercises">

      <router-link v-bind:to="`/exercises/${exercise.id}`">
        <h2>{{ exercise.name }}</h2>
      </router-link>

      <p>Sets: {{ exercise.sets }}</p>
      <p>Reps: {{ exercise.reps }}</p>
      <p>Weight (lbs): {{ exercise.weight }}</p>
      <p v-if="exercise.image">Image: {{ exercise.image }}</p>
      <p v-if="exercise.video">Video: {{ exercise.video }}</p>
      <p v-if="exercise.muscle_group">Muscle Group: {{ exercise.muscle_group }}</p>
    </div>

    <router-link v-bind:to="`/exercises/new`">New Exercise</router-link>

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