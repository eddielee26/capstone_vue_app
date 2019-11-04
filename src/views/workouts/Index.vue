<template>
  <div class="workouts-index">
    <h1>Workouts Index</h1>
    <div v-for="workout in workouts">
      <h2>Name: {{ workout.name }}</h2>
      <p>Category: {{ workout.category }}</p>
      <p>Note: {{ workout.note }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      workouts: []
    };
  },
  created: function() {
    axios.get("/api/workouts").then(response => {
      this.workouts = response.data;
    });
  },
  methods: {}
};
</script>