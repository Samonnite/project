<template>
<div class="navBar">
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-row type="flex" justify="space-between">
    <BreadCrumb class="breadCrumb"></BreadCrumb>
  <el-submenu index="2">
    <template slot="title">个人中心</template>
    <el-menu-item class="item" index="2-1">设置</el-menu-item>
    <el-menu-item class="item" index="2-2" @click="logout">退出登录</el-menu-item>
  </el-submenu>
  </el-row>
</el-menu>
</div>
</template>

<script>
import BreadCrumb from './breadCrumb'
export default {
  data () {
    return {
    }
  },
  components: {
    BreadCrumb
  },
  methods: {
    logout () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.breadCrumb {
  line-height: 56px;
}
</style>
