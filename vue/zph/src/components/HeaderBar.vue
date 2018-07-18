<template>
  <div class="headerBar">
    <!-- 搜索区域 -->
    <div class="searchBox">
      <a class="left" href="/Category2.aspx">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </a>
      <div class="right">
        <i class="iconfont icon-sousuo1" id="btnSearch"></i>
        <input type="search" id="searchName" name="" placeholder="搜索商品，正品才配哦">
      </div>
    </div>
    <!-- 类别 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="items in classify" :key="items" class="menu">
        <a href="#">{{items}}</a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import ZPH from '../assets/zph.png'

export default {
  name: 'HeaderBar',
  data () {
    return {
      zph: ZPH,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      classify: ['首页', '免费拿', '美妆', '母婴', '护理', '箱包', '零食', '电器']
    }
  }
}
</script>

<style lang="scss" scoped>
  .headerBar {
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
  }
  .searchBox {
    display: flex;
    display: -webkit-flex;
    width: 6.4rem;
    height: .88rem;
    background: #fff;
  }
  .searchBox .left {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    width: .9rem;
    height: .88rem;
    line-height: 1;
    color: #666;
  }
  .searchBox .right {
    position: relative;
    flex: 1 1 0;
    -webkit-flex: 1 1 0;
    font-size: .24rem;
    padding: .12rem .16rem;
    padding-right: .2rem;
    padding-left: 0;
  }
  .searchBox .right i {
    position: absolute;
    top: .24rem;
    right: .4rem;
  }
  .searchBox .right input {
    width: 100%;
    font-size: .24rem;
    color: #666;
    border: 1px solid #eee;
    border-radius: .8rem;
    padding: .16rem 0 .16rem .5rem;
    background: #f0f0f0;
    text-align: left;
  }
  .menu {
    height: .6rem;
  }
  .menu a {
    line-height: .6rem;
    text-align: center;
  }
</style>
