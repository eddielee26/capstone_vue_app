<template>
  <div class="workouts-index">
    <h1>Workouts Index</h1>
    <div v-for="workout in workouts">

      <router-link v-bind:to="`/workouts/${workout.id}`">
        <h2>Name: {{ workout.name }}</h2>
      </router-link>

      <p>Date: {{ workout.date }}</p>
      <p>Category: {{ workout.category }}</p>
      <p>Note: {{ workout.note }}</p><br>
    </div>

    <router-link v-bind:to="`/workouts/new`">New Workout</router-link>

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
      console.log(this.workouts);
    });
  },
  methods: {}
};
</script>