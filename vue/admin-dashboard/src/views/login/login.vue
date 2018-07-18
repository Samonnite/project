<template>
<div>
  <Logo></Logo>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-container">
    <h3 class="title">后台登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item id="captcha" style="width:100%;">
      <p id="wait">正在加载验证码......</p>
      <p id="notice" style="display: none;">请先完成验证</p>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-row :gutter="6">
      <el-col :span="12">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
      </el-col>
      <el-col :span="12">
        <router-link to="Register"><el-button style="width:100%;">注册</el-button></router-link>
      </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import Logo from '../../components/logo'
import { requestLogin, requestCaptcha } from '@/api/login'
import '@/common/gt'
export default {
  data () {
    return {
      loading: false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      gtCapValid: {}
    }
  },
  created () {
    this.handleCaptcha()
  },
  methods: {
    handleLogin () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.loading = true
          var loginParams = Object.assign({}, this.gtCapValid, {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          })
          requestLogin(loginParams).then(res => {
            this.loading = false
            let { errno, data, msg } = res
            if (errno) {
              this.captchaObj.reset()
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              console.log(data)
              window.localStorage.setItem('session_id', data.session_id)
              this.$router.push({ path: '/dashboard' })
            }
          })
        }
      })
    },
    handleCaptcha () {
      var geetestKey = ''
      requestCaptcha().then(data => {
        data = data.data
        geetestKey = data.geetest_key
        var params = {
          gt: data.gt,
          challenge: data.challenge,
          new_captcha: data.new_captcha,
          width: '350px',
          product: 'popup', // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
          protocol: 'https://',
          offline: !data.success // 表示用户后台检测极验服务器是否宕机，一般不需要关注
          // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config

        }
        // $('#login input[name="geetest_key"]').val(data.geetest_key)
        // 使用initGeetest接口
        // 参数1：配置参数
        // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
        window.initGeetest(params, captchaObj => {
          this.captchaObj = captchaObj
          captchaObj.appendTo('#captcha')
          captchaObj.onReady(() => {
            document.getElementById('wait').style.display = 'none'
          })
          captchaObj.onSuccess(() => {
            this.gtCapValid = captchaObj.getValidate()
            this.gtCapValid.geetest_key = geetestKey
          })
          captchaObj.onError(() => {
            // 出错啦，可以提醒用户稍后进行重试
            this.$notify.error({
              title: '错误',
              message: '出错啦，请稍后进行重试'
            })
          })
        })
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
$bg: #748f94;
$bs: #cac6c6;
.login-container {
  background: $bg;
  text-align: center;
  border-radius: 5px;
  border: 1px solid $bg;
  box-shadow: 0 0 5px $bs;
  width: 350px;
  margin: 80px auto;
  padding: 35px 35px 15px 35px;
  color: #fff;
}
.title {
  padding-bottom: 10px;
}
</style>
