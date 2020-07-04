<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="投票列表" />

    <!-- 列表 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="item in list" :key="item">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </div>
      </van-list>
    </van-pull-refresh>

    <!-- 固定底部菜单 -->
    <van-tabbar fixed border v-model="active" :style="{'display': 'fixed'}">
      <van-tabbar-item>
        <span>参与</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="add-o">创建</van-tabbar-item>
      <van-tabbar-item icon="contact">我</van-tabbar-item>
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
      },
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 1; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>

<style lang="less" scoped>
.van-tabbar--fixed {
  position: fixed;
}

// .van-list > div {
//   background-color: #f8f8f9;
//   border-radius: 15px;
// }

.van-list > div:not(:last-child) {
  margin: 0px 5px 5px;
}

.van-list > div:first-child {
  margin-top: 5px;
}


</style>