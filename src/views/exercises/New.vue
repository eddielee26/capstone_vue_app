<template>
  <div class="exercises-new">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>CREATE<span>EXERCISE</span></h1>
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
                          <h2>Create Exercise</h2><br>
                           <form v-on:submit.prevent="submit()">
                             <ul>
                               <li class="text-danger" v-for="error in errors">{{ error }}</li>
                             </ul>
                             <div class="form-group">
                               <input type="text" class="form-control" v-model="name" placeholder="Exercise Name">
                             </div>
                             <div class="form-group">
                               <input type="number" class="form-control" v-model="sets" placeholder="Exercise Sets">
                             </div>
                             <div class="form-group">
                               <input type="number" class="form-control" v-model="reps" placeholder="Exercise Reps">
                             </div>
                             <div class="form-group">
                               <input type="number" class="form-control" v-model="weight" placeholder="Exercise Weight">
                             </div>
<!--                              <div class="form-group">
                               <label>Image:</label> 
                               <input type="text" class="form-control" v-model="image">
                             </div>
                             <div class="form-group">
                               <label>Video:</label> 
                               <input type="text" class="form-control" v-model="video">
                             </div>
                             <div class="form-group">
                               <label>Muscle Group:</label> 
                               <input type="text" class="form-control" v-model="muscle_group">
                             </div> -->
                             <input type="submit" class="btn btn-primary" value="Submit">
                           </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =====>> End My Account <<===== 
    =========================== -->

<!--     <form v-on:submit.prevent="submit()">
      <h1>New Exercise</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Sets:</label>
        <input type="number" class="form-control" v-model="sets">
      </div>
      <div class="form-group">
        <label>Reps:</label> 
        <input type="number" class="form-control" v-model="reps">
      </div>
      <div class="form-group">
        <label>Weight:</label> 
        <input type="number" class="form-control" v-model="weight">
      </div>
      <div class="form-group">
        <label>Image:</label> 
        <input type="text" class="form-control" v-model="image">
      </div>
      <div class="form-group">
        <label>Video:</label> 
        <input type="text" class="form-control" v-model="video">
      </div>
      <div class="form-group">
        <label>Muscle Group:</label> 
        <input type="text" class="form-control" v-model="muscle_group">
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
      sets: "",
      reps: "",
      weight: "",
      image: "",
      video: "",
      muscle_group: "",
      errors: [],
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        sets: this.sets,
        reps: this.reps,
        weight: this.weight,
        image: this.image,
        video: this.video,
        muscle_group: this.muscle_group,
      };
      axios
        .post("/api/exercises", params)
        .then(response => {
          this.$router.push("/exercises");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  }
};
</script>