<template>
  <div class="vote-list">
    <van-search v-model="value" shape="round" show-action placeholder="请输入搜索关键词" maxlength="30" @search="onSearch">
      <template #action>
        <!-- <div @click="onSearch">搜索</div> -->
        <van-button round type="info" @click="onSearch" size="small">搜索</van-button>
      </template>
    </van-search>
    <!-- 切换 -->
    <!-- <div class="vote-list-switch">
        <div>
            {{ showJoin ? '我参与的' : '我创建的' }}
        </div>
      <van-switch v-model="showJoin" active-color="#07c160" inactive-color="#ee0a24" />
    </div>-->

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
  </div>
</template>

<script>
export default {
  name: "voteList",
  data() {
    return {
      value: '',
      showJoin: true,
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

        if (this.list.length >= 1) {
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
    },
    onSearch() {
      console.log('2123123123 ssss');
    }
  }
};
</script>

<style lang="less" scoped>
.van-list > div:not(:last-child) {
  margin: 0px 5px 5px;
}

.van-list > div:first-child {
  margin-top: 5px;
}

.vote-list-switch {
  display: inline;
}

.vote-list {
  margin: 10px auto;
}

.van-button--small {
  padding: 0 15px;
}

.van-search__action:active {
    background-color: unset;
}
</style>