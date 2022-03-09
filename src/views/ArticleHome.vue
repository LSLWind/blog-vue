<template>
  <div v-title data-title="ForFun Find Yourself">
    <el-container>
      <el-main class="me-articles">
        <article-scroll-page></article-scroll-page>

      </el-main>

      <el-aside>

        <card-me class="me-area">ads</card-me>
        <card-tag :tags="hotTags"></card-tag>

      </el-aside>

    </el-container>
  </div>
</template>

<script>

import ArticleScrollPage from "@/views/ArticleScrollPage";

export default {
  name: 'ArticleHome',
  created() {
  },
  data() {
    return {
      allArticles: []
    }
  },
  methods: {},
  components: {
    ArticleScrollPage
  }
}
</script>

<style scoped>

.el-container {
  width: 960px;
}

.el-aside {
  margin-left: 20px;
  width: 260px;
}

.el-main {
  padding: 0px;
  line-height: 16px;
}

.el-card {
  border-radius: 0;
}

.el-card:not(:first-child) {
  margin-top: 20px;
}
</style>
