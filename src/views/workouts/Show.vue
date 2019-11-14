<template>
  <div class="workouts-show">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>{{workout.name}} <span>WORKOUT</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <!-- ===========================
    =====>> TTM <<===== -->
    <section id="ttm-area" class="ttm-area">
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4 p-0">
            <div class="ttm-item">
              <h4>{{ workout.date }}</h4>
              <p>{{ workout.category }}</p><br>
              <p v-if="workout.note">{{ workout.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End TTM <<===== 
    =========================== -->

    <!-- ===========================
    =====>> Fitner <<===== -->
    <section id="fitner-area" class="pt-25">
        <div class="container">
            <div class="fitner-content pt-25 ">
                <div class="row ">
                  <div v-for="exercise in workout.exercises">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <!-- fitner item -->
                        <div class="fitner-item fitner-border mt-40">
                            <h2>{{ exercise.name }}</h2>
                            <p>SETS {{ exercise.sets }}</p>
                            <p>REPS {{ exercise.reps }}</p>
                            <p>WEIGHT {{ exercise.weight }}</p>
                        </div>
                    </div>
                  </div>
                </div>
              <div class="col-lg-center">
                <div class="cta-btn ">
                  <router-link v-bind:to="`/workouts/${workout.id}/edit`" class="btn btn-1">Edit Workout</router-link>
                </div>
              </div>
            </div>
        </div>
    </section>
    <!-- =====>> End Fitner <<===== 
    =========================== -->

<!--     <h1>Workout Show</h1>

    <h2>{{ workout.name }}</h2>
    <p>Date: {{ workout.date }}</p>
    <p>Category: {{ workout.category }}</p>
    <p v-if="workout.note">Note: {{ workout.note }}</p><br>

    <h3>Exercises</h3>
    <div v-for="exercise in workout.exercises">
      <h4>{{ exercise.name }}</h4>
      <p>
      Sets: {{ exercise.sets }}
      Reps: {{ exercise.reps }}
      Weight: {{ exercise.weight }}
      </p>
    </div>

    <br>
    <router-link v-bind:to="`/workouts/${workout.id}/edit`">Edit Workout</router-link> -->

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