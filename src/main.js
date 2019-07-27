
import Vue from 'vue'

// import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui' //按需导入mint-ui组件
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.component(Lazyload.name,Lazyload)
import mintui from 'mint-ui'
Vue.use(mintui)
import 'mint-ui/lib/style.css'


import router from './router.js' //引入router文件
import VueRouter from 'vue-router' //导入路由
Vue.use( VueRouter) //安装路由

//安装缩虐图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//vuex注册
import Vuex from 'vuex'
Vue.use(Vuex)

//每次进入页面。会先从本地存贮把数据取出来
var car = JSON.parse(localStorage.getItem('car' || "[]"))
const store = new Vuex.Store({
     state :{
          car:car
     },
     mutations :{
          addshop(state,pro) {
               let flage = false 
               state.car.some( item =>{
                    if(item.id == pro.id) {
                         item.const += parseInt(pro.const)
                         flage = true 
                         return true
                    }

               })
             
                 !flage && state.car.push(pro)
                 localStorage.setItem('car',JSON.stringify(state.car))
          }
     },
     //相当于计算属性
     getters :{
          //改变徽标实现购物车数据联动
          getAll(state) {
               let c=0;
               state.car.forEach( item =>{
                    c +=item.const
               })
               return c
          }
     }
})

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
    router, //挂载路由 
    store //挂在store
})