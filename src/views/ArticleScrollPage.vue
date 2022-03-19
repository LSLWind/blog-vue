<template>

    <article-item v-for="article in articles" :key="article.id" v-bind="article"></article-item>

</template>

<script>
import ArticleItem from "@/components/ArticleItem";
import axios from "axios";

export default {
  name: "ArticleScrollPage",
  props: {
    offset: {
      type: Number,
      default: 100
    },
    page: {
      type: Object,
      default() {
        return {}
      }
    },
    query: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  created() {
    this.getAllArticles()
  },
  data() {
    return {
      loading: false,
      noData: false,
      //分页数据
      innerPage: {
        page: 1,
        pageSize: 5,
      },
      articles: []
    }
  },
  methods: {
    load() {
      this.getAllArticles()
    },
    view(id) {
      this.$router.push({path: `/view/${id}`})
    },
    getAllArticles() {
      let that = this
      that.loading = true

      axios.get("/api/articles/getArticleListByPageAndSize?page=1&pageSize=10").then(data => {

         // data.data是全部json数据
        let newArticles = data.data.data

        if (newArticles && newArticles.length > 0) {
          that.innerPage.page += 1
          that.articles = that.articles.concat(newArticles)
          console.log(newArticles)
        } else {
          that.noData = true
        }

      }).catch(error => {
        if (error !== 'error') {
          that.$message({type: 'error', message: '文章加载失败!', showClose: true})
        }
      }).finally(() => {
        that.loading = false
      })

    }
  },
  components: {
    'article-item': ArticleItem,
  }

}
</script>

<style scoped>
.el-card {
  border-radius: 0;
}

.el-card:not(:first-child) {
  margin-top: 10px;

}
</style>
