import axios from 'axios'
export var shopcar=(params)=>{
   return  axios.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/"+params)
}