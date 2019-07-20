<template>
    <div class="cmt-box">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请评论最多120字的内容" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in commentinfo" :key="item.add_time">
            <div class="cmt-item">
                
                    <div class="cmt-li">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | Datafrom}}
                    </div>
                
                <div class="cmt-body">
                    {{item.content=='undefined' ? '这个人很懒什么都木有留下':item.content}}
                </div>
            </div>
        </div>
         <mt-button type="danger" size="large" class="btn" plain @click="addbtn">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data() {
        return {
            pageIndex:1,
            commentinfo:[],
            msg :''
        }
    },
    created() {
        this.getcomment()
    },
    methods:{
        getcomment() {
            this.$http.get("api/getcomments/"+ this.id+"?pageindex="+this.pageIndex)
            .then(res =>{
                // console.log(res.body);
                if(res.body.status == 0) {
                    //数组拼接，才能是获取的评论列表显示完全
                    this.commentinfo = this.commentinfo.concat(res.body.message) 
                }else {
                    Toast('获取评论失败...')
                }
            })
        },
        addbtn() {
             this.pageIndex++;
            this.getcomment()
        }, 
        postcomment() {
        if(this.msg.trim().length ==0) {
            Toast('发表内容不能为空')
        }
        this.$http.post("api/postcomment/"+this.$route.params.id,{content:this.msg.trim()})
        .then(res =>{
            console.log(res.body);
            if(res.body.status==0) {
                var cmt= { user_name: '匿名用户',add_time :Date.now(),content:this.msg.trim()}
            }
            this.commentinfo.unshift(cmt)
            this.msg ='';
        })
    },
    },
   
    props :['id']
}
</script>
<style scoped>
    .btn {
        margin-bottom: 10px!important;
    }
    .cmt-box h4 {
        display: inline-block;
        font-size: 16px;
        margin-right: 290px;
    }
    .cmt-box .cmt-item {
        font-size: 13px;
    }

    .cmt-li {
        /* margin-right: 40px; */
        height: 30px;
       background-color:#ccc;
    }
    
    .cmt-body {
        height: 50px;
    }
    textarea{
        margin: 0;
        font-size: 14px;
        height: 80px;
    }
</style>
