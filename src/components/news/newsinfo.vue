<template>
    <div class="newsinfo-content">
        <h3 class="titl">{{newsnifost.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{newsnifost.add_time | Datafrom}}</span>
            <span>点击:{{newsnifost.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsnifost.content"></div>
        <!-- 评论区 -->
        <moment :id="this.id"></moment>
    </div> 
</template>
<script>
import moment from '../subcomponent/comment.vue' //导入评论子组件
export default {
    data() {
        return {
            id :this.$route.params.id,
            newsnifost:[]
        }
    },
    created(){
        this.getnewsnifo()
    },
    methods :{
        getnewsnifo() {
            this.$http.get("api/getnew/"+this.id)
            .then(res=>{
                // console.log(res.body);
                if(res.body.status==0) {
                    this.newsnifost =res.body.message[0] 
                }
            })
        }
    },
   components :{
       moment
   }
}
</script>
<style >
    .newsinfo-content {
        padding: 0 4px;
        text-align: center;
        
    }
    .newsinfo-content img {
        width: 100%;
    }
    .newsinfo-content .titl {
        color: Crimson;
        font-size: 16px;
    }
    .newsinfo-content .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #226aff;
    }
     * {
        touch-action: pan-y;
    }
    
</style>
