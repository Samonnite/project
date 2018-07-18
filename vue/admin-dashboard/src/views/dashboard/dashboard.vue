<template>
  <div class="dashboard">
    <SideBar></SideBar>
    <div class="content">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Logo from '../../components/logo'
import SideBar from '@/views/sidebar/sidebar'
import NavBar from '@/views/navBar/navBar'
export default {
  components: {
    SideBar,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
}
.content{
  flex: 1;
  min-height: 800px;
}
</style>
