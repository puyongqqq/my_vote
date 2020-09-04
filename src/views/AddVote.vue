<template>
  <div class="add-vote">
    <van-form validate-first @submit="onSubmit">
      <div class="my-card">
        <van-field
          v-model="caseTitle"
          rows="1"
          autosize
          label="标题"
          type="textarea"
          :rules="[{ required: true, message: '请输入正确的投票标题' }]"
          placeholder="请输入投票标题"
          maxlength="50"
        />
        <van-field
          v-model="caseDesc"
          rows="3"
          autosize
          label="描述"
          type="textarea"
          maxlength="150"
          placeholder="请输入投票描述"
          show-word-limit
        />

        <van-field
          v-model="caseItem1"
          rows="1"
          autosize
          :rules="[{ required: true, message: '请输入正确的内容' }]"
          type="textarea"
          placeholder="选项"
          maxlength="50"
        >
          <template #label>
            <div class="add-case">
              <van-icon name="add-o" @click="addCase" />
              <div class="vote-case">选项</div>
            </div>
          </template>
        </van-field>

        <div class="add-case-list">
          <van-field
            class="add-case"
            v-for="(item, i) in caseList"
            :key="i"
            v-model="item.value"
            rows="1"
            autosize
            :rules="[{ required: true, message: '请输入正确的内容' }]"
            type="textarea"
            placeholder="选项"
            maxlength="50"
          >
            <template #label>
              <div class="add-case">
                <van-icon name="close" @click="remove(i)" />
                <div class="vote-case">选项</div>
              </div>
            </template>
          </van-field>
        </div>
      </div>

      <div class="my-card">
        <van-field name="switch" label="是否多选">
          <template #input>
            <van-switch v-model="switchChecked" size="20" />
          </template>
        </van-field>

        <van-field name="switch2" label="限制传播">
          <template #input>
            <van-switch v-model="switchChecked2" size="20" />
          </template>
        </van-field>

        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="value"
          label="截止时间"
          placeholder="点击选择时间"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-datetime-picker
            type="datetime"
            :min-date="minDate"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">发起投票</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Dialog } from 'vant';

export default {
  name: "addVote",
  data() {
    return {
      caseTitle: "",
      caseDesc: "",
      caseItem1: "",
      checked: true,
      switchChecked: true,
      switchChecked2: false,
      currentDate: "",
      itemIndex: 1,
      caseList: [{ value: "", index: 1 }],
      value: "",
      showPicker: false,
      minDate: new Date()
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

    /**
     * form提交
     */
    onSubmit(values) {
      Dialog.confirm({
        message: "确定要添加投票信息吗？",
        confirmButtonColor: "blue"
      })
        .then(() => {
          // on confirm
          console.log("submit", values);
        })
        .catch(() => {
          // on cancel

          console.log("submit", values);
        });
      
    },

    /**
     * 截止时间选择
     */
    onConfirm(time) {
      this.showPicker = false;

      this.value =
        time.getFullYear() +
        "/" +
        (time.getMonth() + 1 > 9
          ? time.getMonth() + 1
          : "0" + (time.getMonth() + 1)) +
        "/" +
        (time.getDate() > 9 ? time.getDate() : "0" + time.getDate()) +
        " " +
        (time.getHours() > 9 ? time.getHours() : "0" + time.getHours()) +
        ":" +
        (time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes());
    },

    /**
     * 添加选项
     */
    addCase() {
      this.itemIndex++;
      this.caseList.push({
        value: "",
        index: this.itemIndex
      });
    },

    /**
     * 删除选项
     */
    remove(i) {
      this.caseList.splice(i, 1);
    }
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
  margin: 5px auto;
  padding: 10px auto;
}

.add-vote {
  margin: 10px auto 100px;
}
</style>

