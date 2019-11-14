<template>
  <div class="workouts-new">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>CREATE<span>WORKOUT</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <!-- ===========================
    =====>> My Account <<===== -->
    <section id="my-account-area" class="pt-150 pb-150">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="my-account-content">
                        <form class="my-account-form">
                          <h2>Create Workout</h2>
                           <form v-on:submit.prevent="submit()">
                             <ul>
                               <li class="text-danger" v-for="error in errors">{{ error }}</li>
                             </ul>
                             <div class="form-group">
                               <input type="text" class="form-control" v-model="name" placeholder="Workout Name">
                             </div>
                             <div class="form-group">
                               <input type="date" class="form-control" v-model="date" placeholder="Workout Date">
                             </div>
                             <div class="form-group">
                               <input type="text" class="form-control" v-model="category" placeholder="Workout Category">
                             </div>
                             <div class="form-group"> 
                               <input type="text" class="form-control" v-model="note" placeholder="Workout Note">
                             </div>

                             <div v-for="exercise in exercises">
                              <form class="shop-single-form">
                                  <div class="wrapper">
                                    <input type="checkbox" :id="exercise.id" :value="exercise.id" v-model="exerciseIds">
                                    <label :for="exercise.id">{{ exercise.name }}</label>
                                  </div>
                              </form>
                             </div>
                             <input type="submit" class="btn btn-primary" value="Create Workout">
                           </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =====>> End My Account <<===== 
    =========================== -->

    <!-- <h1>Workouts New</h1>

    <form v-on:submit.prevent="submit()">
      <h1>New Workout</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Date:</label>
        <input type="date" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <label>Category:</label> 
        <input type="text" class="form-control" v-model="category">
      </div>
      <div class="form-group">
        <label>Note:</label> 
        <input type="text" class="form-control" v-model="note">
      </div>

      <div v-for="exercise in exercises">
        <input type="checkbox" :id="exercise.id" :value="exercise.id" v-model="exerciseIds">
        <label :for="exercise.id">{{exercise.name}}</label>

      </div>

      

      <input type="submit" class="btn btn-primary" value="Submit">
    </form> -->

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      date: "",
      category: "",
      note: "",
      errors: [],
      exercises: [],
      exerciseIds: [],
    };
  },
  created: function() {
    axios.get("/api/exercises").then(response => {
      this.exercises = response.data;
      console.log(this.exercises);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        date: this.date,
        category: this.category,
        note: this.note,
        exercise_ids: this.exerciseIds
      };
      axios
        .post("/api/workouts", params)
        .then(response => {
          this.$router.push("/workouts");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>