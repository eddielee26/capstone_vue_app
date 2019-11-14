<template>
  <div class="exercises-show">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>MY<span>EXERCISE</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <!-- ===========================
    =====>> Pricing <<===== -->
    <section id="pricing-area" class="pt-25">
        <div class="container ">
            <div class="pricing-content pt-40">
                <div class="row">
                    <!-- Pricing Item -->
                    <!-- Pricing Item -->
                    <div class="col-md-6 offset-md-3 p-0">
                        <div class="pricing-item media pricing-item-bgc">
                            <div class="pricing-item-left pricing-right">
                                <ul>
                                    <li>
                                        <h3 class="pricing-item-left-h3">Sets: {{ exercise.sets }}</h3>
                                    </li>
                                    <li>
                                        <h3 class="pricing-item-left-h3">Reps: {{ exercise.reps }}</h3>
                                    </li>
                                    <li>
                                        <h3 class="pricing-item-left-h2">Weight: {{ exercise.weight }}</h3>
                                    </li>
                                </ul>
                            </div>
                            <div class="pricing-item-right pricing-right">
                                <ul>
                                    <li>{{ exercise.name }}</li>
                                </ul>
                                <router-link v-bind:to="`/exercises/${exercise.id}/edit`" class="btn btn-4">Edit Exercise</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =====>> End Pricing <<===== 
    =========================== -->

<!--     <h1>Exercise Show</h1>

    <h2>{{ exercise.name }}</h2>
    <p>Sets: {{ exercise.sets }}</p>
    <p>Reps: {{ exercise.reps }}</p>
    <p>Weight: {{ exercise.weight }}</p>
    <p v-if="exercise.image">Image: {{ exercise.image }}</p>
    <p v-if="exercise.video">Video: {{ exercise.video }}</p>
    <p v-if="exercise.muscle_group">Muscle Group: {{ exercise.muscle_group }}</p>

    <router-link v-bind:to="`/exercises/${exercise.id}/edit`">Edit</router-link> -->

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