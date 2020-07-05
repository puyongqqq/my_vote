<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="投票列表" />
    <router-view></router-view>
    <!-- 固定底部菜单 -->
    <van-tabbar fixed border v-model="active" :style="{'display': 'fixed'}">
      <!-- <van-tabbar-item>
        <span>参与</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item> -->
      <van-tabbar-item icon="add-o">
        <router-link to="/list">参与</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="add-o">
        <router-link to="/addVote">创建</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="contact">
        <router-link to="/myVote">我</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.van-tabbar--fixed {
  position: fixed;
}
</style>