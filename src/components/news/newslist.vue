<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for= "item in newslist " :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h2>{{item.title}}</h2>
							<p class="mui-ellipsis">
                                <span>发表时间：{{item.add_time | Datafrom}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>
<script>
export default {
   data() {
       return {
           newslist :[]
       }
   },
   created() {
       this.getNews()
   },
   methods :{
       getNews() {
           this.$http.get("api/getnewslist")
           .then( res =>{
            //    console.log(res.body);
               if(res.body.status ==0) {
                   this.newslist=res.body.message
               }
               
           })
       }
   }
}
</script>
<style scoped>
     .mui-media-body h2 {
        font-size: 16px;
    }
    .mui-ellipsis {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #226aff;
    }
</style>
