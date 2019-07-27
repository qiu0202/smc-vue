<template>
  <div class="box" >
    <div class="box_m" v-for=" item in godList" :key="item.id" @click="getInfo(item.id)">
      <div class="box_img">
        <img :src=" item.img_url " alt />
        <h2>{{item.title}}</h2>
      </div>
      
      <div class="box_p">
          <p class="mony_math">
        <span class="new">￥{{item.sell_price}}</span>
        <span class="old">￥{{item.market_price}}</span>
      </p>
      <p class="remai">
        <span>热卖中</span>
        <span>还剩{{item.stock_quantity}}件</span>
      </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getpage">加载更多...</mt-button>
  </div>
</template>
<script>
// import { log } from 'util';
export default {
    data() {
      return {
        pageindex :1,
        godList :[]
      }
    },
    created() {
       this.getGodlist()
    },
    methods : {
      //渲染商品列表
      getGodlist() {
        this.$http.get("api/getgoods?pageindex=" + this.pageindex)
        .then(res =>{
          console.log(res.body.message);
          if(res.body.status == 0) {
            this.godList = this.godList.concat(res.body.message)
          }  
        })
      },
      //加载更多...
      getpage() {
        this.pageindex ++
         this.getGodlist()
      },
      //点击商品跳转到详情页
    getInfo(id) {
      this.$router.push({ name : "GoodInfo" ,params :{id:id}})
    }
    }
    
};
</script>
<style lang="scss" scoped>
.box {
    padding: 7px;
    justify-content: space-between;
    .box_p {
        background-color: #ccc;
    }
    display: flex;
    flex-wrap: wrap;
  .box_m {
      border: 1px solid #ccc;
    width: 49%;
    .mony_math span:nth-child(1){
        margin-left: 10px;
        color: red;
        font-weight: 700;
        font-size: 14px;
    }
    .mony_math span:nth-child(2) {
        margin-left: 15px;
        text-decoration: line-through;
    }
      h2 {
          margin-left: 5px;
    font-size: 14px;
  }
  .box_img {
    
    img {
     width: 100%;
    vertical-align: middle;
    }
  }
  .remai{
      display: flex;
      justify-content: space-between;
      padding: 0 8px;
  }
  }
}
</style>
