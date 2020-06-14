<template>
  <div id="app">
    <HeaderNav @loginActive="changeDisplayState" :login_display="login_display"></HeaderNav>
    <router-view/>
    <Login :display="login_display" @translateUserInfo="translateUserInfo" @closeLoginDiv="closeLoginDiv"></Login>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  import HeaderNav from "./components/HeaderNav";
  import FooterNav from "./components/FooterNav";
  import Login from "./components/Login";
  export default {
    data() {
      return {
        login_display: false
      }
    },
    components:{
      HeaderNav, FooterNav,Login
    },
    methods:{
      changeDisplayState: function (isActive) {
        this.login_display = isActive;
      },
      translateUserInfo: function (userInfo) {
        alert(userInfo.username + ' ' + userInfo.password);
        this.login_display = false;
      },
      closeLoginDiv: function (val) {
        this.login_display = val;
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
