<template>
    <div class="gooddesc">
        <h2>{{info.title}}</h2>
        <hr>
        <div class="content" v-html="info.content">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            info:[]
        }
    },
    created() {
         this.getDesc()
    },
    methods :{
        getDesc(){
            this.$http.get("api/goods/getdesc/" + this.id)
            .then( res =>{
                console.log(res);  
                if( res.body.status == 0) {
                    this.info=res.body.message[0]
                }
            })
        }
    }
}
</script>
<style lang="scss" >
    .gooddesc {
        padding: 5px;
        h2 {
            font-size :16px;
            color:#226aff;
            text-align: center;
            margin: 15px 0;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>
