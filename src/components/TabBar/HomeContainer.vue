<template>
  <div>
    <swipe :setlbt="setlbt"></swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../img/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/potolist">
		                     <img src="../../img/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
		                     <img src="../../img/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../img/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../img/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../img/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui"; //消息弹框
// import { log } from 'util';

import swipe from '../subcomponent/swiplunbotu.vue'
export default {
  data() {
    return {
      setlbt: []
    };
  },
  created() {
    this.getlbt();
  },
  components :{
    swipe
  },
  methods: {
    getlbt() {
      this.$http
        .get("api/getlunbo")
        .then(res => {
            // console.log(res.body);
            
          if (res.body.status === 0) {
            this.setlbt = res.body.message;
          } else {
            Toast("加载失败...");
          }
        });
    }
  }
};
</script>
<style >

.mui-grid-9 img {
    width: 60px;
    height: 60px;
}
.mui-grid-9 mui-table-view-cell {
    border:  none;
}
.mint-swipe-items-wrap {
    height: 140px;
    overflow: hidden;
}
.mint-swipe-item {
  float: left !important;
}
/* .mint-swipe-items-wrap .mint-swipe-item img {
  display: block;
  float: left;
} */
</style>
