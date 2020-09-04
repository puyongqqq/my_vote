<template>
  <div class="info">
    <div class="my-vote">
      <div class="headimg">
        <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="uname">
        <div class="div-info">
          <p class="info">
            {{username}}
            <van-tag round type="primary">管理员</van-tag>
          </p>
          <p class="info">{{phone}}</p>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-cell center title="性别" value="男" />
      <van-cell title="邮箱" value="ppp1296286317@163.com" />
    </van-cell-group>

    <van-cell-group>
      <van-cell center title="生日" value="2020-07-15">
        <!-- <template #right-icon>
          <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }"/>
        </template>-->
      </van-cell>
      <van-cell title="部门" value="破产与清算结算测试部" />
    </van-cell-group>

    <div style="margin: 16px;">
      <van-button round block type="danger" @click="logout" native-type="type">退出账号</van-button>
    </div>
  </div>
</template>
<script>
import $http from "../utils/http.js";
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  name: "myvote",
  data() {
    return {
      username: "蒲勇",
      phone: "13262356325",
      gender: "男",
      checked: true,
      show: ""
    };
  },
  created: function() {
    $http.$axios.get("user/info/" + 1, null).then(res => {
      if (res.status === 200) {
        let user = res.data;
        (this.username = user.username),
          (this.phone = "17384862350"),
          (this.gender = user.gender ? "女" : "男");
      } else {
        Toast.fail({
          message: "获取个人信息失败",
          icon: "cross"
        });
      }
    });
  },
  methods: {
    logout() {
      Dialog.confirm({
        title: "确定要退出登录？",
        confirmButtonColor: "blue"
      })
        .then(() => {
          localStorage.removeItem("vote_token");
          this.$router.push({ path: "/login" });
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="less" scoped>
.my-vote {
  display: flex;
  padding: 10px 5px;
  background: #fff;
  margin: 10px 0;
  align-items: center;
}
.my-vote > div {
  flex: 1;
}

.info {
  margin: 0 0 5px;
  text-align: left;
}

.info:not(:last-child) {
  border-bottom: 1px solid #fafafa;
  line-height: 24px;
}
.van-image {
  display: block;
  margin: 0 auto;
}
</style>