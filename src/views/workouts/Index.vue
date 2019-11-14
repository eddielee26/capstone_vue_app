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
      

    <!-- ===========================
    =====>> Fitner <<===== -->
    <section id="fitner-area" class="fitner-about pt-150 pb-150">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="section-title text-center">
                        <h2>WORKOUT<span>LIST</span> </h2>
                    </div>
                </div>
            </div>
            <div class="fitner-content pt-30 ">
                <div class="row ">
                  <div v-for="workout in workouts">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <!-- fitner item -->
                        <div class="fitner-item mt-50 fitner-border ">
                            <router-link v-bind:to="`/workouts/${workout.id}`">
                              <h2>{{ workout.name }}</h2>
                            </router-link>
                            <p>Date: {{ workout.date }}</p><br>
                            <p>Category: {{ workout.category }}</p><br>
                            <p v-if="workout.note">Note: {{ workout.note }}</p><br>
                        </div>
                    </div>
                  </div>
                </div>
              <div class="col-lg-center">
                <div class="cta-btn ">
                  <router-link v-bind:to="`/workouts/new`" class="btn btn-1">New Workout</router-link>
                </div>
              </div>
            </div>
        </div>
    </section>
    <!-- =====>> End Fitner <<===== 
    =========================== -->

    <!-- ===========================
      =====>> Cta <<===== -->

<!--       <section id="cta-area" class="cta-bg1 pt-80 pb-80">
        <div class="container">
          <div class="row">
            <div class="col-lg-center">
              <div class="cta-btn ">
                <router-link v-bind:to="`/workouts/new`" class="btn btn-1">New Workout</router-link>
              </div>
            </div>
          </div>
        </div>
      </section> -->

    <!-- =====>> End Cta <<===== 
      =========================== -->

<!--     <h1>Workouts Index</h1>
    <div v-for="workout in workouts">

      <router-link v-bind:to="`/workouts/${workout.id}`">
        <h2>{{ workout.name }}</h2>
      </router-link>

      <p>Date: {{ workout.date }}</p>
      <p>Category: {{ workout.category }}</p>
      <p v-if="workout.note">Note: {{ workout.note }}</p><br>
    </div>

    <router-link v-bind:to="`/workouts/new`">New Workout</router-link> -->

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

