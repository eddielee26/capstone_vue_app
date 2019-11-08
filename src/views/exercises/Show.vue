<template>
  <div class="exercises-show">
    <h1>Exercise Show</h1>

    <h2>{{ exercise.name }}</h2>
    <p>Date: {{ exercise.sets }}</p>
    <p>Category: {{ exercise.reps }}</p>
    <p>Note: {{ exercise.weight }}</p>
    <p v-if="exercise.image">Image: {{ exercise.image }}</p>
    <p v-if="exercise.video">Video: {{ exercise.video }}</p>
    <p v-if="exercise.muscle_group">Muscle Group: {{ exercise.muscle_group }}</p>

    <router-link v-bind:to="`/exercises/${exercise.id}/edit`">Edit</router-link>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      exercise: {},
    };
  },
  created: function() {
    axios.get("/api/exercises/" + this.$route.params.id).then(response => {
      this.exercise = response.data;
      console.log(this.exercise);
    });
  },
  methods: {}
};
</script>