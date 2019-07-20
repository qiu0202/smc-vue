import VueRouter from 'vue-router'

import homeContainer from './components/TabBar/HomeContainer.vue'
import memberContainer from './components/TabBar/menberContainer.vue'
import shopcarContainer from './components/TabBar/shopcarContainer.vue'
import searchContainer from './components/TabBar/searchContainer.vue'
import newslist from './components/news/newslist.vue'
import newsinfoor from './components/news/newsinfo.vue'
import potolist from './components/poto/potolist.vue'

var router =new VueRouter({
    routes :[
        {path:"/",redirect:'/home'},
        {path:"/home",component:homeContainer},
        {path:"/member",component:memberContainer},
        {path:"/shopcar",component:shopcarContainer},
        {path:"/search",component:searchContainer},
        {path :"/home/newslist",component:newslist},
        {path:"/home/newsinfo/:id",component:newsinfoor},
        {path:'/home/potolist',component:potolist}
    ],
    linkActiveClass : "mui-active"
})
export default router