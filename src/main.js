
import Vue from 'vue'

import {Header,Swipe, SwipeItem} from 'mint-ui' //按需导入mint-ui组件
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js' //引入router文件
import VueRouter from 'vue-router' //导入路由
Vue.use( VueRouter) //安装路由

import App from './App.vue' 
import  './lib/css/mui.min.css' //引入mui组件
import './lib/css/icons-extra.css'

import Vueresce from 'vue-resource' // 引入 vue-resource 发送请求
Vue.use(Vueresce)  //安装

var vm = new Vue({
    el : "#app",
    data :{},
    methods : {},
    render : c => c(App),
    router
})