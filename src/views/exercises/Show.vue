<template>
  <div class="exercises-show">
    <h1>Exercise Show</h1>

    <h2>{{ exercise.name }}</h2>
    <p>Date: {{ exercise.sets }}</p>
    <p>Category: {{ exercise.reps }}</p>
    <p>Note: {{ exercise.weight }}</p>
    <p>Note: {{ exercise.image }}</p>
    <p>Note: {{ exercise.video }}</p>
    <p>Note: {{ exercise.muscle_group }}</p>

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