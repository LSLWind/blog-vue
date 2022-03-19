<template>
  <div v-title :data-title="title">
    <el-container>
      <el-main class="me-articles">
        <article-scroll-page></article-scroll-page>

      </el-main>

      <el-aside>

        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" type="text">Operation button</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>

      </el-aside>

    </el-container>
  </div>
</template>

<script>
import ArticleScrollPage from "@/views/ArticleScrollPage";
export default {
  name: "ArticlePage",
  components:{
    ArticleScrollPage,
  },
  data() {
    return {
      title: '文章'
    }
  }
}
</script>

<style scoped>

</style>