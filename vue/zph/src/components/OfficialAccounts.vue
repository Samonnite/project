<template>
  <div class="weixin-cont" id="GongZhongHao">
    <div class="closeBtn weiXinBtn">
      <i class="iconfont icon-close"></i>
    </div>
    <a href="javascript:void(0);" class="weixin-lg">
      <img :src="zph"/>
    </a>
    <div class="weixin-txt">
      <p class="big">欢迎进入
        <b>正品惠商城</b>
      </p>
      <p class="small">关注公众号，享专属服务</p>
    </div>
    <a class="weixin-gz"
       href="http://mp.weixin.qq.com/s?__biz=MzA3NzAwOTI0NQ==&mid=400661652&idx=1&sn=06a71a4dda9a1be4a0e2b98de81a5afe#rd"
       target="_blank">立即关注
    </a>
  </div>
</template>

<script>
import ZPH from '../assets/zph.png'

export default {
  name: 'OfficialAccounts',
  data () {
    return {
      zph: ZPH
    }
  }
}
</script>

<style lang="scss" scoped>
  .weixin-cont {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    font-size: .24rem;
    color: #fff;
    padding: .1rem;
    padding-left: 0;
    background-color: #333;
  }

  .closeBtn {
    width: .6rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
  }

  .weixin-lg {
    width: .8rem;
    height: .8rem;
    margin-right: .1rem;
  }

  .weixin-lg img {
    width: 100%;
    height: auto;
  }

  .weixin-txt {
    flex: 1 1 0;
    -webkit-flex: 1 1 0;
  }

  .weixin-gz {
    width: 1.4rem;
    flex: 0 0 1.4rem;
    -webkit-flex: 0 0 1.4rem;
    height: .55rem;
    line-height: .55rem;
    text-align: center;
    color: #fff;
    border-radius: .1rem;
    background-color: #29c943;
  }
</style>
