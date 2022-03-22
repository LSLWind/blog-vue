<template>
  <el-dialog
      title="登录"
      :width="isMobile ? '90%' : '50%'"
      v-model="state.dialogDodel"
      @close="cancel"
      :show-close="true"
  >
    <el-form>
      <el-formItem
          label="邮箱"
          :label-width="state.formLabelWidth"
      >
        <el-input
            v-model="state.params.email"
            placeholder="邮箱"
            autocomplete="off"
        >
        </el-input>
      </el-formItem>
      <el-formItem
          label="密码"
          :label-width="state.formLabelWidth"
      >
        <el-input
            type="password"
            placeholder="密码"
            v-model="state.params.password"
            autocomplete="off"
        ></el-input>
      </el-formItem>
      <el-formItem
          v-if="handleFlag === 'register'"
          label="昵称"
          :label-width="state.formLabelWidth"
      >
        <el-input
            v-model="state.params.name"
            placeholder="用户名或昵称"
            autocomplete="off"
        ></el-input>
      </el-formItem>
      <el-formItem
          v-if="handleFlag === 'register'"
          label="手机"
          :label-width="state.formLabelWidth"
      >
        <el-input
            v-model="state.params.phone"
            placeholder="手机号"
            autocomplete="off"
        ></el-input>
      </el-formItem>
      <el-formItem
          v-if="handleFlag === 'register'"
          label="简介"
          :label-width="state.formLabelWidth"
      >
        <el-input
            v-model="state.params.desc"
            placeholder="个人简介"
            autocomplete="off"
        ></el-input>
      </el-formItem>
    </el-form>
    <div
        class="dialog-footer"
    >
      <el-button
          type="success"
          @click="handleOAuth"
      >github 授权登录</el-button>
      <el-button
          v-if="handleFlag === 'login'"
          :loading="state.btnLoading"
          type="primary"
          @click="handleOk"
      >登 录</el-button>
      <el-button
          v-if="handleFlag === 'register'"
          :loading="state.btnLoading"
          type="primary"
          @click="handleOk"
      >注 册</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent} from "vue";



export default defineComponent({
  name: "BackAndSta",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    handleFlag: {
      type: String,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["ok", "cancel"],
});
</script>
<style scoped>
.dialog-footer {
  text-align: right;
}
</style>