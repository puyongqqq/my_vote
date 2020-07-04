<template>
  <div class="login-form">
    <h3>欢迎使用——投票系统</h3>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        maxlength="20"
        :rules="[{ required: true, message: '请填写用户名' },  {maxLength: 20, message: '不能超过20字符'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        maxlength="20"
        :rules="[{ required: true, message: '请填写密码'}, {maxLength: 20, message: '不能超过20字符'}]"
      />
      <!-- <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码">
        <template #button>
          <van-image @click="getCheckcode" src="https://img.yzcdn.cn/vant/cat.jpeg">
            <template v-slot:error>加载失败</template>
          </van-image>
        </template>
      </van-field> -->
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import $http from "../utils/http.js";
import { Toast } from "vant";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      sms: ''
    };
  },
  methods: {
    onSubmit(values) {
      Toast.loading({
        message: "登录中...",
        forbidClick: true
      });
      $http.$axios
        .post("oauth/token", values, {
          transformRequest: [
            function(data) {
              let ret = "";
              for (let it in data) {
                ret +=
                  encodeURIComponent(it) +
                  "=" +
                  encodeURIComponent(data[it]) +
                  "&";
              }
              ret = ret.substring(0, ret.lastIndexOf("&"));
              return ret;
            }
          ]
        })
        .then(res => {
          if (res.status === 200 && res.data.code === "200") {
            // 登录成功
            localStorage.setItem("vote_token", res.data.token);
            // Toast.success(res.data.msg);
            // this.$router.push({path: '/index'})
            this.$router.push({ path: "/index" });
          } else {
            // 登录失败
            Toast.fail(res.data.msg);
          }

          console.log(localStorage.getItem("vote_token"));
        });
    },
    getCheckcode: function() {
    }
  }
};
</script>

<style lang="less" scoped>
.login-form {
  margin: 20px auto;
  padding: 20px;
}
.van-image {
  width: 100px;
  height: 35px;
}

</style>