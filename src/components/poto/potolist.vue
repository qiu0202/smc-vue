<template>
  <div>
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          :class="['mui-control-item',item.id==0? 'mui-active': '']"
          v-for="item in potolis"
          :key="item.id"
        @click="getpotolist(item.id)">{{item.title}}</a>
      </div>
    </div>

    <!-- 图片列表 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/potoinfo/' +item.id">
        <img v-lazy="item.img_url" />
        {{item.content}}
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/js/mui.min.js";

export default {
  data() {
    return {
      list:[],
      potolis: [],
      imgid :0
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getAlllist();
    this.getpotolist(0)
  },
  methods: {
    //分类列表(顶部的滑动导航)
    getAlllist() {
      this.$http.get("api/getimgcategory").then(res => {
        // console.log(res.body);
        if (res.body.status == 0) {
          res.body.message.unshift({ title: "全部", id: 0 });
          this.potolis = res.body.message;
        }
      });
    },
    //点击分类获取对于图片
    getpotolist(cateid) {
      this.$http.get("api/getimages/" + cateid)
      .then(res =>{
        console.log(res.body);
        if(res.body.status == 0) {
          this.list=res.body.message
        }
        
      })
    }
  }
};
</script>
<style scoped>
* {
  touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

/* 图片懒加载样式 */
.photo-list{
list-style: none;
margin: 0;
padding: 10px;
}
.photo-list li {
  background-color: #fff;
text-align: center;
margin-bottom: 10px;
box-shadow: 0 0 9px #999;
position: relative;
}

.photo-list li img {
  width:100%;
  vertical-align: middle
}

.photo-list li img[lazy=loading] {
width: 40px;
height: 300px;
margin: auto;
}



.mui-scroll-wrapper {
  margin-top: 60px;
}

</style>
