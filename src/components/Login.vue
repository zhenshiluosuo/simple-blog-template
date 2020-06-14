<template>
    <div id="login-div" :class="{ is_not_active : !display }">
        <div id="close-login-div" @click="closeLoginDiv">×</div>
        <div class="div-type1"><label for="username">用户名</label><input type="text" id="username" v-model="userInfo.username"></div>
        <div class="div-type1"><label for="password">密码</label><input type="password" id="password" v-model="userInfo.password"></div>
        <div class="div-center"><button @click="translateUserInfo()">登录</button></div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                userInfo: {
                    username: '',
                    password: ''
                }
            }
        },
        props: ['display'],
        methods: {
            translateUserInfo: function (){
                this.$emit('translateUserInfo', this.userInfo);
            },
            closeLoginDiv: function () {
                this.$emit('closeLoginDiv', false);
            }
        }
    }
</script>

<style scoped>
    .is_not_active {
        display: none;
    }
    #login-div {
        z-index: 999;
        background: white;
        opacity:1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 50px;
        width: 100%;
        max-width: 400px;
        text-align: left;
        border: 1px solid black;
    }
    #close-login-div {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 30px;
    }
    label {
        display: inline-block;
        max-width: 100%;
        margin: 5px 0;
        font-weight: 700;
    }
    input {
        display: block;
        width: 90%;
        height: 30px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    .div-type1 {
        margin: 0 auto;
        width: 70%;
    }
    .div-center {
        text-align: center;
    }
    button {
        margin-top: 30px;
        width: 30%;
        height: 30px;
        background: floralwhite;
        font-weight: 700;
    }
</style>