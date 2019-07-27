<template>
  <div>
    <h3>{{potoin.title}}</h3>
    <p class="subtitl">
      <span>{{potoin.add_time | Datafrom}}</span>
      <span>点击:{{potoin.click}}次</span>
    </p>
    <hr />

    <div>
      <!-- 缩略图 -->
      <vue-preview :slides="imgs"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="potoin.content"></div>
    <!-- 调用之前的评论子组件 -->
    <moment :id="id"></moment>
  </div>
</template>
<script>
//调用评论子组件
import moment from "../subcomponent/comment.vue";
import { log } from "util";
export default {
  data() {
    return {
      id: this.$route.params.id,
      potoin: [],
      imgs: []
    };
  },
  created() {
    this.getpotoinfo();
    this.getThums();
  },
  methods: {
    //获取图片详情
    getpotoinfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        // console.log(res.body);
        if (res.body.status == 0) {
          this.potoin = res.body.message[0];
        }
      });
    },
    getThums() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        console.log(res.body);
        if (res.body.message.status == 0) {
          this.imgs = res.body.message;
          this.imgs.forEach(el => {
            el.w = 600;
            el.h = 400;
            el.msrc = el.src;
          });
        }
      });
    }
  },
  components: {
    moment //注册子组件评论
  }
};
</script>
<style>
</style>
