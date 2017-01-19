<template>
	 <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" :router="true" @open="handleOpen" @close="handleClose">
      	<el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="1-1" :route="{name:'index'}">选项1</el-menu-item>
        <el-menu-item index="1-2" :route="{name:'page1'}">选项2</el-menu-item>
        <el-menu-item index="1-3" :route="{name:'page2'}">选项3</el-menu-item>
        <el-menu-item index="1-4" :route="{name:'page3'}">选项4</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" :route="{name:'index'}"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3" :route="{name:'page1'}"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toHome(key, keyPath){
      	console.log(key, keyPath);
      }
    }
  }
</script>