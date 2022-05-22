<template>
  <!-- 添加一级目录 -->
  <el-button text @click="addOneLevelCategoryVisible = true">添加一级目录</el-button>
  <el-dialog v-model="addOneLevelCategoryVisible" title="添加一级目录">
    <el-form :model="oneLevelCategory" ref="oneLevelCategoryForm">
      <el-form-item label="一级目录" :label-width="formLabelWidth">
        <el-input v-model="oneLevelCategory.title" autocomplete="off" placeholder="一级目录"/>
      </el-form-item>
      <el-form-item label="二级目录" :label-width="formLabelWidth">
        <el-input v-model="oneLevelCategory.subTitle" autocomplete="off" placeholder="至少需要一个二级目录"/>
      </el-form-item>
      <el-form-item label="svg图标信息">
        <el-input v-model="oneLevelCategory.svgIcon" type="textarea" placeholder="svg icon信息"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addOneLevelCategoryVisible = false">取消</el-button>
        <el-button type="primary" @click="submitAddOneLevelCategory">确认</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 添加文章，跳转 -->
  <el-button text  @click="this.$router.push('/lsl/addArticle')">添加文章</el-button>


</template>

<script>


import axios from "axios";

export default {
  name: "LslHome",

  data() {
    return {
      addOneLevelCategoryVisible: false,
      formLabelWidth: '140px',
      //添加一级目录
      oneLevelCategory: {
        title: "",
        subTitle: "",
        svgIcon: "",
      },
    }
  },

  methods: {
    //增加一级目录
    submitAddOneLevelCategory() {
      const params = new URLSearchParams();
      params.append('title', this.oneLevelCategory.title);
      params.append('subTitle', this.oneLevelCategory.subTitle);
      params.append('svgIcon', this.oneLevelCategory.svgIcon);
      axios({
        method: 'post',
        url: '/api/lsl/addOneLevelCategory',
        data: params,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      }).then(function (res) {
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      });

      this.addOneLevelCategoryVisible = false
    },

  }
}
</script>

<style scoped>

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>