import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loginState: false,
        userInfo: {
            username: 'admin',
            password: '123456'
        }
    },
    mutations: {
        changeLoginState(state) {
            state.loginState = !state.loginState;
            if (state.loginState){
                alert('登录成功！');
            }else {
                alert('退出登录成功！');
            }
        }
    }
});