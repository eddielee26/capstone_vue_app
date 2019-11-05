<template>
  <div class="workouts-show">
    <h1>Workout Show</h1>

    <h2>{{ workout.name }}</h2>
    <p>Date: {{ workout.date }}</p>
    <p>Category: {{ workout.category }}</p>
    <p>Note: {{ workout.note }}</p>

    <router-link v-bind:to="`/workouts/${workout.id}/edit`">Edit</router-link>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      workout: {},
    };
  },
  created: function() {
    axios.get("/api/workouts/" + this.$route.params.id).then(response => {
      this.workout = response.data;
      console.log(this.workout);
    });
  },
  methods: {}
};
</script>