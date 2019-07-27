<template>
  <div class="app-box" >
    <mt-header fixed title="京东商城" class="mintet"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab" id="dibu">
      <router-link class="mui-tab-item-llb" to="/home" >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge" >{{ $store.getters.getAll}}</span>
        </span>
        <span class="mui-tab-label" >购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search" >
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang ="scss" >
  /* .app-box {
    #dibu {
      margin-bottom: 50px;
    }
  } */
  .app-box{
    .mint-header{
      background-color: #226aff;
    }
    padding-bottom: 50px;
  }
.mui-bar-tab .mui-tab-item-llb span {
  display: block;
}
.mui-bar-tab .mui-tab-item-llb span:nth-child(1) {
  padding: 0!important;
}

.mint-header-title {
        font-size :18px;
        display:block;
        background-color: #266aff;
        height: 40px;
        color: #EE0000;
        text-align: center;
        line-height: 40px;
        letter-spacing: 10px;
        width: 100%;
         margin: 0 0 3px 0;

    }
    .mint-header-button {
        position: relative;
        height: 40px;
    }
    .app-box {
    padding-top: 40px;
    /* padding-bottom: 40px; */
    overflow-x: hidden;
    }
    .v-enter {
    opacity: 0;
    transform: translateX(100%);
    }
    .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
    transition: all 0.5s ease;
    }
    /* --解决滑动切换组件失效-- */
    .mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
    }

    .mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
    }

    /* .mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
    } */

    .mui-scroll-wrapper[data-v-76c54bad] {
    margin-top: 0;
}
</style>