<template>
  <div class="workouts-edit">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>WORKOUT<span>EDIT</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <!-- ===========================
    =====>> My Account <<===== -->
    <section id="my-account-area" class="pt-25 pb-25">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="my-account-content">
              <form class="my-account-form">
                <form v-on:submit.prevent="submit()">
                  <h2>Edit Workout</h2><br>
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group">
                    <label>Name:</label> 
                    <input type="text" class="form-control" v-model="workout.name">
                  </div>
                  <div class="form-group">
                    <label>Date:</label>
                    <input type="date" class="form-control" v-model="workout.date">
                  </div>
                  <div class="form-group">
                    <label>Category:</label> 
                    <input type="text" class="form-control" v-model="workout.category">
                  </div>
                  <div class="form-group">
                    <label>Note:</label> 
                    <input type="text" class="form-control" v-model="workout.note">
                  </div>
                  <input type="submit" class="btn btn-primary" value="Edit">
                </form>
                <section id="contact-area" class="pt-25 pb-25">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                        <button v-on:click="destroyWorkout()" class="btn btn-7">Delete Workout</button>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End My Account <<===== 
    =========================== -->

<!--     <h1>Workouts Edit</h1>

    <form v-on:submit.prevent="submit()">
      <h1>Edit Workout</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="workout.name">
      </div>
      <div class="form-group">
        <label>Date:</label>
        <input type="date" class="form-control" v-model="workout.date">
      </div>
      <div class="form-group">
        <label>Category:</label> 
        <input type="text" class="form-control" v-model="workout.category">
      </div>
      <div class="form-group">
        <label>Note:</label> 
        <input type="text" class="form-control" v-model="workout.note">
      </div>
      <input type="submit" class="btn btn-primary" value="Edit">
    </form>
    <div>
      <button v-on:click="destroyWorkout()">Destroy</button>
    </div> -->

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      workout: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/workouts/" + this.$route.params.id).then(response => {
      this.workout = response.data;
      console.log(this.workout);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.workout.name,
        date: this.workout.date,
        category: this.workout.category,
        note: this.workout.note,
      };
      axios
        .patch("/api/workouts/" + this.workout.id, params)
        .then(response => {
          this.$router.push("/workouts/" + this.workout.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyWorkout: function() {
      axios.delete("/api/workouts/" + this.workout.id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/workouts");
        });
    }
  }
};
</script>