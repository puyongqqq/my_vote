<template>
  <div class="add-vote">
    <van-form validate-first @failed="onFailed">
      <div class="my-card">
        <van-field
          v-model="value1"
          rows="1"
          autosize
          label="标题"
          type="textarea"
          placeholder="请输入投票标题"
          maxlength="50"
        />
        <van-field
          v-model="value2"
          rows="3"
          autosize
          label="描述"
          type="textarea"
          maxlength="150"
          placeholder="请输入投票描述"
          show-word-limit
        />

        <van-field
          v-model="value3"
          rows="1"
          autosize
          type="textarea"
          placeholder="选项一"
          maxlength="50"
        >
          <template #label>
            <div class="add-case">
              <van-icon name="add-o" @click="addCase" />
              <div class="vote-case">选项</div>
            </div>
          </template>
        </van-field>

        <van-field rows="1" autosize type="textarea" placeholder="选项二" maxlength="50">
          <template #label>
            <div class="add-case">
              <van-icon name="close" @click="remove" />
              <div class="vote-case">选项</div>
            </div>
          </template>
        </van-field>

        <van-field rows="1" autosize type="textarea" placeholder="选项三" maxlength="50">
          <template #label>
            <div class="add-case">
              <van-icon name="close" @click="remove" />
              <div class="vote-case">选项</div>
            </div>
          </template>
        </van-field>
      </div>

      <div class="my-card">
        <van-field name="switch" label="是否匿名">
          <template #input>
            <van-switch v-model="switchChecked" size="20" />
          </template>
        </van-field>

        <van-field name="switch2" label="限制传播">
          <template #input>
            <van-switch v-model="switchChecked2" size="20" />
          </template>
        </van-field>

        <!-- <van-field name="switch2" label="截止时间">
          <template #input>
            <van-datetime-picker
              v-model="currentDate"
              type="datetime"
              title="选择截止时间"
            />
          </template>
        </van-field> -->
      </div>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">发起投票</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "addVote",
  data() {
    return {
      value1: "",
      value2: "",
      value4: "",
      value5: "",
      value7: "",
      value3: "",
      pattern: /\d{6}/,
      caseList: [],
      checked: true,
      switchChecked: true,
      switchChecked2: false,
      currentDate: ''
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise(resolve => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },

    addCase() {},
    remove() {}
  }
};
</script>

<style lang="less" scoped>
.van-cell__title,
.van-cell__value {
  text-align: left;
}
.vote-case {
  margin-left: 10px;
  display: inline-block;
}
.van-icon-add-o::before {
  font-size: 20px;
  margin: 5px;
  color: #1989fa;
}

.van-icon-close::before {
  font-size: 20px;
  margin: 5px;
  color: red;
}

.add-case {
  display: flex;
  align-items: center;
}

.my-card {
  margin: 5px;
  padding: 10px auto;
}

.add-vote {
  margin: 10px auto;
}
</style>

