<template>
  <div class="footer">
    <ul>
      <li>
        <router-link :to='{name:"Index"}'>
          <i class="iconfont icon-shouye2"></i>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link :to='{name:"Category"}'>
          <i class="iconfont icon-fenlei2"></i>
          <p>分类</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img :src="VipIcon" class="vip">
        </router-link>
      </li>
      <li>
        <router-link :to='{name:"ShoppingCart"}'>
          <i class="iconfont icon-gouwuche1"></i>
          <p>购物车</p>
          <span class="cartNum">1</span>
          <!--<img class="cartMore" src="/images/99.png">-->
        </router-link>
      </li>
      <li>
        <router-link :to='{name:"UserInfo"}'>
          <i class="iconfont icon-wode1"></i>
          <p>个人中心</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import VipIcon from '@/assets/footVipIcon.png'
export default {
  name: 'Footer',
  data () {
    return {
      VipIcon: VipIcon
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #d9d9d9;
    z-index: 99;
    ul {
      display: flex;
      li {
        width: 20%;
        text-align: center;
        height: .8rem;
        line-height: 1;
        font-size: 0.2rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        text-align: center;
        justify-content: center;
        a {
          display: flex;
          display: -webkit-flex;
          align-items: center;
          -webkit-align-items: center;
          flex-direction: column;
          -webkit-flex-direction: column;
          .cartNum {
            position: absolute;
            top: 0;
            right: 1.4rem;
            width: 1.5em;
            height: 1.5em;
            line-height: 1.5em;
            text-align: center;
            color: #fff;
            border-radius: 50%;
            background: #E8264F;
          }
          .vip {
            width: 1rem;
            height: 1rem;
            @keyframes rotating {
              0% {
                transform: scale(1);
                -webkit-transform: scale(1);
              }
              50% {
                transform: scale(0.9);
                -webkit-transform: scale(0.9);
              }
              100% {
                transform: scale(1);
                -webkit-transform: scale(1);
              }
            }
            animation: rotating 1s infinite;
            -webkit-animation: rotating 1s infinite;
          }
        }
        p {
          color: #666;
          padding-top: 0.2em;
        }
      }
    }
  }
</style>
