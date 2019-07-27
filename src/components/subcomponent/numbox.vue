<template>

    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="getgoodnumbox" 
      ref="goodnumbox" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>

</template>
<script>
import mui from "../../lib/js/mui.min.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods :{
    getgoodnumbox() {
      // console.log(this.$refs.goodnumbox.value);
      this.$emit("getgodinf",parseInt(this.$refs.goodnumbox.value))
    },
    
  },
  props :['max'],
  //属性监听
  watch: {
      'max' :function(newval,oldval){
        // 在mui官网 js   api 方法
         mui(".mui-numbox").numbox().setOption('max',newval)
      }
    }
};
</script>
<style lang="sass" scoped>

</style>
