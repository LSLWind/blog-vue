<template>
  <div v-title :data-title="title">

    <div class="left clearfix">
      <h3
          v-if="params.tag_id"
          class="left-title"
      > 相关的文章：</h3>
      <ul
          class="articles-list"
          id="list"
      >
        <transition-group name="el-fade-in">
          <li
              v-for="(article) in articles"
              :key="article.id"
              class="item"
          >
            <a
                :href="article.id"
                target="_blank"
            >
              <img
                  class="wrap-img img-blur-done"
                  :data-src="article.img_url"
                  data-has-lazy-src="false"
                  src="../assets/logo.png"
                  alt="文章封面"
              />
              <div class="content">
                <h4 class="title">{{ article.title }}</h4>
                <p class="abstract">{{ article.desc }}</p>
                <div class="meta">
                  <span>查看 {{ article.views }}</span>
                  <span>评论 {{ article.comments }}</span>
                  <span>赞 {{ article.likes }}</span>
                  <span
                      v-if="article.create_time"
                      class="time"
                  >
                  {{ article.create_time }}
                </span>
                </div>
              </div>
            </a>
          </li>
        </transition-group>
      </ul>
      <!--          <LoadingCustom v-if="state.isLoading"></LoadingCustom>-->
    </div>


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


  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "ArticlePage",
  components: {},
  data() {
    return {
      isLoadEnd: false,
      isLoading: false,
      articles: [],
      total: 0,
      loading: false,
      noData: false,
      //分页数据
      innerPage: {
        page: 1,
        pageSize: 5,
      },
      tag_name: '41',
      params: {
        keyword: "",
        likes: "", // 是否是热门文章
        state: 1, // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
        tag_id: '',
        category_id: '',
        pageNum: 1,
        pageSize: 10,
      },

      title: '文章'
    }
  },
  created() {
    this.getAllArticles()
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

}
</script>

<style lang="less" scoped>
.left {
  .articles-list {
    margin: 0;
    padding: 0;
    list-style: none;

    .title {
      color: #333;
      margin: 7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }

    .item > div {
      padding-right: 140px;
    }

    .item .wrap-img {
      position: absolute;
      top: 50%;
      margin-top: -50px;
      right: 0;
      width: 125px;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
      }
    }

    li {
      line-height: 20px;
      position: relative;
      // width: 100%;
      padding: 15px 0px;
      padding-right: 150px;
      border-bottom: 1px solid #f0f0f0;
      word-wrap: break-word;
      cursor: pointer;

      &:hover {
        .title {
          color: #000;
        }
      }

      .abstract {
        min-height: 30px;
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #555;
      }

      .meta {
        padding-right: 0 !important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;

        a {
          margin-right: 10px;
          color: #b4b4b4;

          &:hover {
            transition: 0.1s ease-in;
            -webkit-transition: 0.1s ease-in;
            -moz-transition: 0.1s ease-in;
            -o-transition: 0.1s ease-in;
            -ms-transition: 0.1s ease-in;
          }
        }

        span {
          margin-right: 10px;
          color: #666;
        }
      }
    }
  }
}
</style>