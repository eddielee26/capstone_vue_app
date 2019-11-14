<template>
  <div class="exercises-index">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>MY<span>EXERCISES</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <!-- ===========================
    =====>> Fitner <<===== -->
    <section id="fitner-area" class="fitner-about pt-150 pb-150">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="section-title text-center">
                        <h2>EXERCISE<span>LIST</span> </h2>
                    </div>
                </div>
            </div>
            <div class="fitner-content pt-30 ">
                <div class="row ">
                  <div v-for="exercise in exercises">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <!-- fitner item -->
                        <div class="fitner-item mt-50 fitner-border ">
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
                    </div>
                  </div>
                </div>
              <div class="col-lg-center">
                <div class="cta-btn ">
                  <router-link v-bind:to="`/exercises/new`" class="btn btn-1">New Exercise</router-link>
                </div>
              </div>
            </div>
        </div>
    </section>
    <!-- =====>> End Fitner <<===== 
    =========================== -->

<!--     <h1>Exercises Index</h1>
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

    <router-link v-bind:to="`/exercises/new`">New Exercise</router-link> -->

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