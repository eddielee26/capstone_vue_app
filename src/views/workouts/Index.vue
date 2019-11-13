<template>
  <div class="workouts-index">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>MY<span>WORKOUTS</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <h1>Workouts Index</h1>
    <div v-for="workout in workouts">

      <router-link v-bind:to="`/workouts/${workout.id}`">
        <h2>{{ workout.name }}</h2>
      </router-link>

      <p>Date: {{ workout.date }}</p>
      <p>Category: {{ workout.category }}</p>
      <p v-if="workout.note">Note: {{ workout.note }}</p><br>
    </div>

    <router-link v-bind:to="`/workouts/new`">New Workout</router-link>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      workouts: {},
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