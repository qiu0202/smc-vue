
import Vue from 'vue'

import {Header,Swipe, SwipeItem,Button} from 'mint-ui' //按需导入mint-ui组件
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import router from './router.js' //引入router文件
import VueRouter from 'vue-router' //导入路由
Vue.use( VueRouter) //安装路由


import App from './App.vue' 
import  './lib/css/mui.min.css' //引入mui组件
import './lib/css/icons-extra.css'

import Vueresce from 'vue-resource' // 引入 vue-resource 发送请求
Vue.use(Vueresce)  //安装

Vue.http.options.root = 'http://www.liulongbin.top:3005/' //定义一个全局请求根路径
Vue.http.options.emulateJSON = true //设置全局post请求表达格式

//定义一个全局的过滤器
import moment from 'moment'
Vue.filter('Datafrom',function(datastr,pattern='YYYY-MM-DD hh:mm:ss'){
     return moment(datastr).format(pattern)
})

var vm = new Vue({
    el : "#app",
    data :{},
    methods : {},
    render : c => c(App),
    router
})