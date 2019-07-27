<template>

    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9" style="height:25px;">
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
     
    },
    
  },
 
};
</script>
<style lang="scss" scoped>

</style>