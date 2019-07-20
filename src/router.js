import VueRouter from 'vue-router'

import homeContainer from './components/TabBar/HomeContainer.vue'
import memberContainer from './components/TabBar/menberContainer.vue'
import shopcarContainer from './components/TabBar/shopcarContainer.vue'
import searchContainer from './components/TabBar/searchContainer.vue'

var router =new VueRouter({
    routes :[
        {path:"/",redirect:homeContainer},
        {path:"/home",component:homeContainer},
        {path:"/member",component:memberContainer},
        {path:"/shopcar",component:shopcarContainer},
        {path:"/search",component:searchContainer}
    ],
    linkActiveClass : "mui-active"
})
export default router