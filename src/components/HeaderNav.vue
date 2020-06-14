<template>
    <div id="header-nav">
        <router-link to="/">博客</router-link> |
        <router-link to="/edit">写博客</router-link> |
        <span id="login-button" @click="loginActive">登录</span>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        data() {
          return {
              display: false
          }
        },
        props: ['login_display'],
        methods: {
            loginActive: function () {
                this.display = !this.display;
                this.$emit('loginActive', this.display);
            }
        },
        watch:{
            login_display: function (val) {
                this.display = val;
            }
        }
    }
</script>

<style scoped>
    #header-nav {
        padding: 30px;
        border-bottom: 5px solid black;
        margin-bottom: 10px;
    }

    #header-nav a span {
        font-weight: bold;
        color: #2c3e50;
    }

    span {
        background: blanchedalmond;
        text-decoration: underline;
    }

    #header-nav a.router-link-exact-active {
        color: #42b983;
    }
</style>