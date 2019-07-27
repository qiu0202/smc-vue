<template>
  <div class="boxlist">
    <!-- 购物小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflage" ref="ball"></div>
    </transition>
    <div class="lunbo">
      <swip :setlbt="godlis"></swip>
    </div>
    <!-- 卡片视图(mui-商品购买) -->
    <div class="mui-card">
      <div class="mui-card-header">{{gdlis.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥{{gdlis.market_price}}</del>&nbsp;&nbsp;销售价:
            <span class="now_price">￥{{gdlis.sell_price}}</span>
          </p>
          <p>
            购买数量:
            <numbox @getgodinf="getSelect" :max="gdlis.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addcar" >加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品详情mui -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{gdlis.goods_no }}</p>
          <p>库存情况:{{gdlis.stock_quantity}}件</p>
          <p>上架时间: {{gdlis.add_time | Datafrom}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swip from "../subcomponent/swiplunbotu.vue";
import numbox from "../subcomponent/numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, //先把列表中的Id挂在出来方便后面使用
      godlis: [],
      gdlis: {}, //商品数
      ballflage: false,
      selectinfo:1 //商品数量默认为1
    };
  },
  components: {
    swip,
    numbox
  },
  created() {
    this.getGoodList();
    this.getgdlist();
  },
  methods: {
  
    //获取轮播图片
    getGoodList() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        res.body.message.forEach(el => {
          el.img = el.src;
        });
        this.godlis = res.body.message;
      });
    },
    //获取商品参数区和价格，标题等数据
    getgdlist() {
      this.$http.get("api/goods/getinfo/" + this.id).then(res => {
        // console.log(res);
        this.gdlis = res.body.message[0];
      });
    },
    //使用编程式导航跳转 --> 图文介绍
    goDesc(id) {
      this.$router.push({ name: "goddesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "godcomment", params: { id } });
    },
    //购物车小球动画

    beforeEnter: function(el) {
      //beforeEnter表示动画入场之前 动画开始 可以再beforeEnter中设置元素的起始样式
      //设置小球开始动画以前的起始位置
      el.style.opacity = 1;
      el.style.transform = "translate(0,0)";
    },
    enter: function(el, done) {
      //这句话没有实际的作用 但是不写出不来效果
      //el.offsetWidth可以认为可以强制刷新动画

      const ballpoaition = this.$refs.ball.getBoundingClientRect();
      const shopcarposition = document .getElementById("badge").getBoundingClientRect(); 
      const leftpos = shopcarposition.left - ballpoaition.left;
      const toppos = shopcarposition.top - ballpoaition.top;

      el.offsetWidth;
      //enter表示动画开始之后的样式这里可以设置小球完成动画之后的结束状态
    //   el.style.transform = "translate(150px,450px)";
      el.style.transform = `translate(${leftpos}px,${toppos}px)`;
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter: function(el) {
      //动画完成后
      this.ballflage = !this.ballflage;
      
    },
    // 购物车增加和减少
    getSelect(cont) {
        this.selectinfo=cont
        console.log(this.selectinfo);
        
    },
    //添加购物车点击事件
    addcar() {
      this.ballflage =!this.ballflage
      var goodinfo = {
        id: this.id,  //要共享的id
        const : this.selectinfo ,//数量,
        price : this.gdlis.market_price, //价格
        slelect:true
      }
      this.$store.commit("addshop",goodinfo) //第一个参数是margin 的一个方法,第二个是数据
    }

  }
};
</script>
<style lang="scss" scoped>
.boxlist {
  .lunbo {
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    margin: 10px 10px 0 10px;
  }
  .mint-swipe {
    margin: 0 15px;
  }
  .now_price {
    color: red;
  }
  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 318px;
    left: 145px;
  }
}
</style>