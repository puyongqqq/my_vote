<template>
  <div class="vote-list">
    <van-search
      v-model="voteTitle"
      shape="round"
      show-action
      placeholder="请输入搜索关键词"
      maxlength="30"
      @search="onSearch"
    >
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
    <van-pull-refresh v-model="refreshing">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
        <div v-for="(item, i) in respData"
            :key="i">
          <van-card
            num="2"
            :price="item.deadline | dateString"
            :desc="item.voteDesc"
            :title="item.voteTitle"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import $http from "../utils/http.js";
import { Toast } from "vant";
export default {
  name: "voteList",
  data() {
    return {
      voteTitle: "",
      showJoin: true,
      respData: [],
      loading: false,
      finished: false,
      refreshing: false,
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    onLoad() {
      // setTimeout(() => {
      //   if (this.refreshing) {
      //     this.list = [];
      //     this.refreshing = false;
      //   }
      //   for (let i = 0; i < 1; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;
      //   if (this.list.length >= 1) {
      //     this.finished = true;
      //   }
      // }, 1000);
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
      console.log("2123123123 ssss");
    },

    queryVoteInfoList() {
      let params = {
        voteTitle: this.voteTitle,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      };
      $http.$axios.get("/vote/vote/list", params).then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
        } else {
          Toast.fail({
            message: "获取投票列表失败",
            icon: "cross",
          });
        }
      });
    },
  },
  created: function () {
    $http.$axios.get("vote/list", {
      headers: {
        'Authorization': localStorage.getItem("vote_token")
      },
      params: {
        voteTitle: this.voteTitle,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      }
    }).then((res) => {
      if (res.status === 200) {
        this.respData = res.data.data.records
      } else {
        Toast.fail({
          message: "获取投票列表失败",
          icon: "cross",
        });
      }
    });
  },
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