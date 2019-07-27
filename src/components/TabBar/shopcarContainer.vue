<template>
    <div class="shopCar">
        <!-- 商品列表区域 -->
       <div class="mui-card" v-for="item in shopcar" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <spopnumbox></spopnumbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div> 
        <!-- 结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
    </div>
  
</template>
<script>
import spopnumbox from  '../subcomponent/spopcar_numbox.vue'

import {shopcar} from '../../axios'
export default {
  components :{
      spopnumbox
  },
  data() {
      return {
        shopcar :[]
      }
  },
  created() {
       this.getshopcar()
  },
  methods :{
      getshopcar() {
          var godcart=[]
          this.$store.state.car.forEach(el => {
              godcart.push(el.id)
          });
            // axios.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +godcart.join(","))
            // .then( res=>{
            //     // console.log(res);
            //    if(res.data.status== 0) {
            //         this.shopcar = res.data.message
            //    }
            // })
            shopcar(godcart.join(","))
            .then(res=>{
                // console.log(res);
                if(res.data.status== 0) {
                    this.shopcar = res.data.message
                }
            })
           
      }
  }
}
</script>
<style lang="scss" scoped>
    .shopCar {
        .mui-card-content-inner {
            display: flex;
            align-items: center;
        }
        background-color: #eee;
        overflow: hidden;
        .mui-card {
            img {
               width: 60px;
               height: 60px; 
            }
            h1 {
                font-size: 14px;
            }
            .info {
                .price{
                    color:crimson ;
                }
            }
        }
    }
</style>