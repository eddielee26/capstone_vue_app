<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserInfo().userId}`">My Profile</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> 
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link to="/workouts">Workouts Index</router-link> |
      <router-link to="/exercises">Exercises Index</router-link> |

    </div> -->


    <!-- ===========================
      =====>> Top Menu <<===== -->

      <header class="top-nav">

        <!-- Top Menu -->
        <nav id="cssmenu">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2">
                <div class="logo">
                  <a href="index-1.html"><img src="/assets/img/logo.png" alt="logo"></a>
                </div>
              </div>
              <div class="col-lg-7 col-md-12">
                <div id="head-mobile"></div>
                <div class="button"></div>
                <ul class="navbar-nav">
                  <li><router-link v-if="isLoggedIn()" :to="`/users/${getUserInfo().userId}`">My Profile</router-link></li>
                  <li><router-link to="/workouts">WORKOUTS</router-link></li>
                  <li><router-link to="/exercises">EXERCISES</router-link></li>
                  <li><router-link v-if="!isLoggedIn()" to="/login">LOGIN</router-link></li>
                  <li><router-link v-if="isLoggedIn()" to="/logout">LOGOUT</router-link></li>
                </ul>
              </div>
              <div class="col-lg-3 text-right p-0 nobile-position">

                <div class="become-member">
                  <router-link to="/signup">REGISTER</router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <!-- End Top Menu -->
      </header>
    <!-- =====>> End Top Menu <<===== 
      =========================== -->

      <router-view/>

      <footer id="footer-area" class="pt-100 pb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 pt-50">
              <div class="footer-item">
                <a href="#" class="footer-logo-img"><img src="/assets/img/f-logo.png" alt=""></a>
                <p>Our commitment to you is to provide honest, friendly, and on-time service. Visit a locally owned and operated business that has been serving </p>

              </div>
            </div>
            <div class="col-lg-2 offset-lg-1 col-md-4 pt-50">
              <div class="footer-item">
                <h6>Useful Links</h6>
                <ul>
                  <li><a href="index-1.html"><i class="fas fa-angle-right"></i> Home</a></li>
                  <li><a href="about.html"><i class="fas fa-angle-right"></i> About us</a></li>
                  <li><a href="#"><i class="fas fa-angle-right"></i> Services</a></li>
                  <li><a href="#"><i class="fas fa-angle-right"></i> Blog</a></li>
                  <li><a href="#"><i class="fas fa-angle-right"></i> Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 pt-50">
              <div class="footer-item">
                <h6>Services</h6>
                <ul>
                  <li><a href="#"><i class="fas fa-angle-right"></i> Fat burn</a></li>
                  <li><a href="#"><i class="fas fa-angle-right"></i> cycling</a></li>
                  <li><a href="#"><i class="fas fa-angle-right"></i> streching</a></li>
                  <li><a href="#"><i class="fas fa-angle-right"></i> Weight Loss</a></li>
                  <li><a href="#"><i class="fas fa-angle-right"></i> body buliding</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 pt-50">
              <div class="footer-item">
                <h6>Contact Us</h6>
                <ul class="media">
                  <li><i class="fas fa-map-marker-alt"></i></li>
                  <li><a target="_blank" href="https://www.google.com/maps/place/New+York,+NY+10036,+USA/@40.7462126,-74.0089606,14z/data=!3m1!4b1!4m5!3m4!1s0x89c2585393f82307:0xf7d56896de1566ed!8m2!3d40.7602619!4d-73.9932872">143 castle road 517 district,
                    <br> kiyev port south Canada</a></li>
                  </ul>
                  <ul class="media">
                    <li><i class="fas fa-phone-volume"></i></li>
                    <li><a href="#">+00 12 123 4567</a></li>
                  </ul>
                  <ul class="media">
                    <li><i class="fas fa-envelope"></i></li>
                    <li><a href="#">Info@yourmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="copy-right">© Copyrights 2019 <a href="https://wpsprite.com/">wpsprite.</a> All rights reserved.</div>
              </div>
            </div>
          </div>
        </footer>

  </div>
</template>

    <script>
      export default {
        data: function() {
          return {

          };
        },
        methods: {
          isLoggedIn: function() {
            if (localStorage.getItem("jwt")) {
              return true;
            } else {
              return false;
            }
          },
          getUserInfo: function() {
            return {
              userId: localStorage.getItem("user_id")
            };
          }
        }
      };
    </script>

    <style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    #nav {
      padding: 30px;
    }

    #nav a {
      font-weight: bold;
      color: #2c3e50;
    }

    #nav a.router-link-exact-active {
      color: #42b983;
    }
  </style>
