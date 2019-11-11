<template>
  <div class="users-show">
    <h1>User Show</h1>

    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>phone_number: {{ user.phone_number }}</p>
    <p>bio: {{ user.bio }}</p>
    <p>misc_info: {{ user.misc_info }}</p>

    <router-link v-bind:to="`/users/${user_id}/edit`">Edit</router-link>

    <div id="container" style="width:100%; height:400px;"></div>
    
    <input type="number" v-model="benchWeight">

    <form v-on:submit.prevent="submit()">
      <div class="form-group">
        <label>Bench weight</label> 
        <input type="number" class="form-control" v-model="benchWeight">
      </div>
      <input type="submit" class="btn btn-primary" value="Add Bench Weight"><br><br>
    </form>

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
      benchWeight: "",
      squatWeight: "",
      deadliftWeight: "",
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  mounted: function() {
    Highcharts.chart('container', {
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
          data: [this.benchWeight]

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
  },
};
</script>
