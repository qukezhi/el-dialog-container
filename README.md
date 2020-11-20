# element-ui dialog plugin

## How to use?

### First 
```
import ElDialogContainer from 'el-dialog-container';
Vue.use(ElDialogContainer);
```

### Second, create a new file "DialogDemo.Vue"
```
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
```

### Last
```
<template>
  <div class="home">
    <el-button type="primary" @click="onClick">测试</el-button>
  </div>
</template>

<script>
import DialogDemo from './DialogDemo.vue';

export default {
  methods:{
    onClick(){
      this.$dialog(DialogDemo, {id: 1 /* props here */}).then(r=>{}); // call dialog here
    }
  }
}
</script>
```
