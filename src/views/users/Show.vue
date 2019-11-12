<template>
  <div class="users-show">

    <!-- ===========================
    =====>> Page Hero <<===== -->
    <section id="page-hero" class="about-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>My <span>Profile</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Page Hero <<===== 
    =========================== -->

    <!-- ===========================
    =====>> Trainers Single <<===== -->
    <section id="trainers-single-area" class="pt-150">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5">
            <div class="trainers-single-img">
              <img src="/assets/img/team/1.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1 col-md-7 offset-md-0">
            <div class="trainers-single-text">
              <h2>{{ user.name }}</h2>
              <h6>Fitness & Body</h6>
              <p>Over 50 group training sessions per week There is no one type or way in our diverse community Alienum phaedrum torquatos nec eu. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum</p>

              <div class="trainers-information">
                <ul>
                  <li><span>Experience</span> : 5 Years</li>
                  <li><span>Age</span> : 35</li>
                  <li><span>Weight</span> : 60 kg</li>
                  <li><span>Phone</span> : +1 234 45456 654</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =====>> End Trainers Single <<===== 
    =========================== -->


    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>phone_number: {{ user.phone_number }}</p>
    <p>bio: {{ user.bio }}</p>
    <p>misc_info: {{ user.misc_info }}</p>

    <router-link v-bind:to="`/users/${user_id}/edit`">Edit</router-link>

    <div id="container" style="width:100%; height:400px;"></div>
    
    <input type="number" v-model="benchWeight">
    <input type="number" v-model="squatWeight">
    <input type="number" v-model="deadliftWeight">
    <button v-on:click="chartUpdate()">Add Weights</button>

  </div>

</template>
<style>
  .highcharts-figure, .highcharts-data-table table {
      min-width: 310px; 
      max-width: 800px;
      margin: 1em auto;
  }

  #container {
      height: 400px;
  }

  .highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #EBEBEB;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
  }
  .highcharts-data-table caption {
      padding: 1em 0;
      font-size: 1.2em;
      color: #555;
  }
  .highcharts-data-table th {
    font-weight: 600;
      padding: 0.5em;
  }
  .highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
      padding: 0.5em;
  }
  .highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
      background: #f8f8f8;
  }
  .highcharts-data-table tr:hover {
      background: #f1f7ff;
  }
</style>
<script>
import axios from "axios";
import Highcharts from 'highcharts';

export default {
  data: function() {
    return {
      user: {},
      user_id: localStorage.getItem("user_id"),
      benchWeight: 0,
      squatWeight: 0,
      deadliftWeight: 0,
      chart: ""
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  mounted: function() {
    this.chart=Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'ONE REP MAX (ORM)'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: [
          'Bench',
          'Bench Estimate',
          'Squat',
          'Squat Estimate',
          'Deadlift',
          'Deadlift Estimate',
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Weight (lbs)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} lbs</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: 
      [
        {
          name: 'Bench',
          data: [0]

        }, {
          name: 'Bench Estimate',
          data: [170]

        }, {
          name: 'Squat',
          data: [240]

        }, {
          name: 'Squat Estimate',
          data: [265]

        }, {
          name: 'Deadlift',
          data: [295]

        }, {
          name: 'Deadlift Estimate',
          data: [315]

        }],
    });
  },
  methods: {
    chartUpdate: function() {
      console.log(this.chart)
      console.log(this.benchWeight)
      var bench = parseInt(this.benchWeight)
      var squat = parseInt(this.squatWeight)
      var deadlift = parseInt(this.deadliftWeight)
      this.chart.update({
        series: [
        {
          name: 'Bench',
          data: [bench]

        }, {
          name: 'Bench Estimate',
          data: [bench + 10]

        }, {
          name: 'Squat',
          data: [squat]

        }, {
          name: 'Squat Estimate',
          data: [265]

        }, {
          name: 'Deadlift',
          data: [deadlift]

        }, {
          name: 'Deadlift Estimate',
          data: [315]

        }],
      })
    }
  },
};
</script>
