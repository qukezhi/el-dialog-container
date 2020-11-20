# element-ui dialog plugin

## How to use?

### First 

import ElDialogContainer from 'el-dialog-container';
Vue.use(ElDialogContainer);

### Second

<template>
  <el-dialog-container title="弹框测试">
      <h1>测试弹框</h1>
  </el-dialog-container>
</template>

<script>
export default {
  props:{
    id: Number
  }
}
</script>

<style scoped>

</style>

### Last

this.$dialog(DialogDemo, {id: 1 /* props here */}).then(r=>{});
