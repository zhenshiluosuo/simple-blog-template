<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view/>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  import HeaderNav from "./components/HeaderNav";
  import FooterNav from "./components/FooterNav";
  export default {
    components:{
      HeaderNav, FooterNav
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
