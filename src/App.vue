<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserInfo().userId}`">My Profile</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> 
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link to="/workouts">Workouts Index</router-link> |
      <router-link to="/exercises">Exercises Index</router-link> |

    </div>

    <div id="preloader">
        <div class="lds-css">
            <div class="preloader-3">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <!-- =====>> End Top Preloader <<===== 
    =========================== -->

    <!-- ===========================
    =====>> Top Menu <<===== -->

    <header class="top-nav">
        <!-- Top Address -->
        <div class="top-address">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="top-address-ditels">
                            <ul>
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <a target="_blank" href="https://www.google.com/maps/place/New+York,+NY+10036,+USA/@40.7462126,-74.0089606,14z/data=!3m1!4b1!4m5!3m4!1s0x89c2585393f82307:0xf7d56896de1566ed!8m2!3d40.7602619!4d-73.9932872">Brooklyn, NY 10036</a>
                                </li>
                                <li>
                                    <i class="far fa-clock"></i>
                                    <span>Sunday to Friday  :  8.00 Am - 9.00 Pm</span>
                                </li>
                                <li>
                                    <i class="fas fa-phone"></i>
                                    <a href="#">+1 (327) 66676 123</a>
                                </li>
                            </ul>
                        </div>
                        <div class="top-social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Top Address -->

        <!-- Top Menu -->
        <nav id="cssmenu">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2">
                        <div class="logo">
                            <a href="index-1.html"><img src="assets/img/logo.png" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12">
                        <div id="head-mobile"></div>
                        <div class="button"></div>
                        <ul class="navbar-nav">
                            <li><a href="index-1.html">HOME</a>
                                <ul>
                                    <li><a href="index-1.html">Home One</a></li>
                                    <li><a href="index-2.html">Home Two</a></li>
                                    <li><a href="index-3.html">Home Three</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">ABOUT</a></li>
                            <li><a href="#">TRAINERS</a>
                                <ul>
                                    <li><a href="trainers.html">Trainers</a></li>
                                    <li><a href="trainers-single.html">Trainers Single</a></li>
                                </ul>
                            </li>
                            <li><a href="#">PAGES</a>
                                <ul>
                                    <li><a href="classes.html">classes</a></li>
                                    <li><a href="classes-single.html">classes single</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                </ul>
                            </li>
                            <li><a href="#">SHOP</a>
                                <ul>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-single.html">Shop Single</a></li>
                                </ul>
                            </li>
                            <li><a href="#">NEWS</a>
                                <ul>
                                    <li><a href="news.html">News</a></li>
                                    <li><a href="news-single.html">News Single</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">CONTACT</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 text-right p-0 nobile-position">
                        <div class="shopping-bag">
                            <a class="cart" href="shop.html"><i class="fa fa-shopping-bag"></i><span>0</span></a>
                        </div>
                        <div class="search-dropdown">
                            <button type="button" class="icon-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search"></i>       
                            </button>
                            <form class="dropdown-menu dropdown-menu-right">
                                <input class="search-input " name="search" placeholder="Search " aria-label="Search ">
                                <button class="search-btn " type="submit"><i class="fas fa-search "></i>  </button>
                            </form>
                        </div>
                        <div class="become-member ">
                            <a href="#">BECOME A MEMBER</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- End Top Menu -->
    </header>

    <router-view/>
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
