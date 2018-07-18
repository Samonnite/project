<template>
<div class="sidebar">
<!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group> -->
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">权限管理</span>
    </template>
    <el-menu-item-group>
      <router-link to="/dashboard/role"><el-menu-item index="1-1">角色管理</el-menu-item></router-link>
      <router-link to="/dashboard/resource"><el-menu-item index="1-2">资源列表</el-menu-item></router-link>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
</el-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      label: false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
  border-radius: 5px;
}
.sidebar {
  width: 200px;
  margin-bottom: 30px;
}
a {
  text-decoration: none;
}
</style>
