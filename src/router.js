import VueRouter from 'vue-router'

import homeContainer from './components/TabBar/HomeContainer.vue'
import memberContainer from './components/TabBar/menberContainer.vue'
import shopcarContainer from './components/TabBar/shopcarContainer.vue'
import searchContainer from './components/TabBar/searchContainer.vue'
import newslist from './components/news/newslist.vue'
import newsinfoor from './components/news/newsinfo.vue'
import potolist from './components/poto/potolist.vue'
import potinfo from './components/poto/potoinfo.vue'
import goodlist from './components/goods/goodlist.vue'
import goodinfo from './components/goods/goodinfo.vue'
import goodDesc from './components/goods/goodDesc.vue'
import goodCommen from './components/goods/goodComment.vue'

var router =new VueRouter({
    routes :[
        {path:"/",redirect:'/home'},
        {path:"/home",component:homeContainer},
        {path:"/member",component:memberContainer},
        {path:"/shopcar",component:shopcarContainer},
        {path:"/search",component:searchContainer},
        {path :"/home/newslist",component:newslist},
        {path:"/home/newsinfo/:id",component:newsinfoor},
        {path:'/home/potolist',component:potolist},
        {path:"/home/potoinfo/:id",component:potinfo},
        {path:"/home/goodlist",component:goodlist},
        {path:"/home/goodinfo/:id",component:goodinfo,name :"GoodInfo"},
        {path:"/home/goodDesc/:id",component:goodDesc,name :"goddesc"},
        {path:"/home/goodComment/:id",component:goodCommen,name :"godcomment"}
    ],
    linkActiveClass : "mui-active"
})
export default router