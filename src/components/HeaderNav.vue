<template>
    <div id="header-nav">
        <router-link to="/">博客</router-link> |
        <router-link to="/edit">写博客</router-link> |
        <span id="login-button" @click="loginActive" v-if="!loginState">登录</span>
        <span v-else> | 你好！ {{ userInfo.username }} <span @click="changeLoginState"> | 退出登录</span></span>
    </div>
</template>

<script>
    import { mapState, mapMutations} from 'vuex'
    export default {
        name: "HeaderNav",
        data() {
          return {
              display: false
          }
        },
        props: ['login_display'],
        computed: mapState([
            // 映射 this.loginState 为 store.state.loginState
            'loginState',
            "userInfo"
        ]),
        methods: {
            loginActive: function () {
                this.display = !this.display;
                this.$emit('loginActive', this.display);
            },
            ...mapMutations([
                'changeLoginState', // 将 `this.changeLoginState()` 映射为 `this.$store.commit('changeLoginState')`
            ])
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
        text-decoration: underline;
    }

    #header-nav a.router-link-exact-active {
        color: #42b983;
    }
</style>