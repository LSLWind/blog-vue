<template>
  <el-card style="width: 100%" ref="article">
    <!--标题-->
    <template #header>
      <el-input v-model="article.title" placeholder="输入标题"/>
    </template>


    <v-md-editor v-model="article.content" height="700px"></v-md-editor>

    <el-input v-model="article.desc" placeholder="输入描述"/>

    <el-cascader v-model="article.category" :options="categories"/>

    <el-button type="primary" @click="submitAddArticle">确认</el-button>


  </el-card>


</template>

<script>
import axios from "axios";

export default {
  name: "LslAddArticle",

  data() {
    return {
      categories: [],

      //文章
      article: {
        title: '',
        content: '',
        desc: '',
        categoryId: '',
        category: '',
      },

    };
  },

  created() {
    this.getAllCategories()
  },

  methods: {

    // 获取目录
    getAllCategories() {
      let that = this

      axios.get("/api/category/getCategoryList").then(data => {
        const categoryList = data.data.data;
        const categories = []

        // 获取选择框目录信息
        for (let i = 0; i < categoryList.length; i++) {
          //获取一级目录
          let categorySelect = {label: categoryList[i].name}
          //获取二级目录
          let children = []
          for (let j = 0; j < categoryList[i].subCategoryList.length; j++) {
            let child = {label: categoryList[i].subCategoryList[j].name}
            children.push(child)
          }
          categorySelect.children = children
          categories.push(categorySelect)
        }

        that.categories = categories
      }).catch(error => {
        if (error !== 'error') {
          that.$message({type: 'error', message: '目录加载失败!' + error, showClose: true})
        }
      })
    },

    // 提交文章
    submitAddArticle() {
      const article = this.article
      console.log(article)
      //校验内容
      axios.post('/api/articles/addOneArticle', article).then(
          res => {
            console.log(res.data)
          }
      );
    }


  }

}
</script>

<style scoped>

</style>