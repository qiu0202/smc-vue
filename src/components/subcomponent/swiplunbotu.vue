<template>
    <div>
      <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in setlbt" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>
<script>
export default {
    props :['setlbt']
}
</script>
<style lang="css">
    .mint-swipe img {
    width: 100%;
    height: 140px;
}
</style>