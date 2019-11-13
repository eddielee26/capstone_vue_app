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
      =====>> Pricing <<===== -->
      <section id="pricing-area" class="pt-150">
        <div class="container ">
          <div class="row ">
            <div class="col-lg-8 offset-lg-2 ">
              <div class="section-title text-center ">
                <h2>WORK<span>OUTS</span></h2>
                </div>
              </div>
            </div>
            <div class="pricing-content pt-40">
              <div class="row">
                <!-- Pricing Item -->


                <!-- Pricing Item -->
                <div v-for="workout in workouts">
                  <div class="col-lg-20 mt-20">
                    <div class="pricing-item media pricing-item-bgc">

                      <div class="pricing-item-right pricing-right">
                        <ul>
                          <li><router-link v-bind:to="`/workouts/${workout.id}`"><h2>{{ workout.name }}</h2></router-link></li>
                          <li><p>DATE: {{ workout.date }}</p></li>
                          <li><p>CATEGORY: {{ workout.category }}</p></li>
                          <li><p v-if="workout.note">NOTE: {{ workout.note }}</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="cta-area" class="cta-bg1 pt-80 pb-80">
        <div class="container">
          <div class="row">
            <div class="col-lg-center">
              <div class="cta-btn ">
                <router-link v-bind:to="`/workouts/new`" class="btn btn-1">New Workout</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <router-link v-bind:to="`/workouts/new`">New Workout</router-link>
    <!-- =====>> End Pricing <<===== 
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

