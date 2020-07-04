<template>
  <div class="info">
    <div class="my-vote">
      <div class="headimg">
        <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="uname">
        <div class="div-info">
          <p class="info">
            蒲勇
            <van-tag round type="primary">管理员</van-tag>
          </p>
          <p class="info">17384862350</p>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-cell center title="性别">
        <template #right-icon>
          <van-switch v-model="checked" size="16px" />
        </template>
      </van-cell>
      <van-cell title="邮箱" value="ppp1296286317@163.com" />
    </van-cell-group>

    <van-cell-group>
      <van-cell center title="生日" value="2020-07-15">
        <template #right-icon>
          <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }"/>
        </template>
      </van-cell>
      <van-cell title="部门" value="破产与清算结算测试部" />
    </van-cell-group>

    <div style="margin: 16px;">
      <van-button round block type="danger" native-type="type">退出账号</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "myvote",
  data() {
    return {
      checked: true,
      show: '',
    };
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