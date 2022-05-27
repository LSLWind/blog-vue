<template>
  <div v-title :data-title="title">
    <div class="left clearfix">
      <el-row :gutter="30">
        <!--目录导航-->
        <el-col :span="5">
          <NavCategory/>
        </el-col>
        <!--文章列表 设置无限滑动-->
        <el-col :span="19">
          <!--无限滚动-->
          <ul class="articles-list" id="list" v-infinite-scroll="scrollLoadArticle">
            <transition-group name="el-fade-in">
              <li v-for="(article) in articles" :key="article.id" class="item">
                <router-link :to="`/articleDetail/${article.id}`" :key="article.id" class="around">
                  <!--侧边图片-->
                  <div class="wrap-img img-blur-done">
                    <el-image :src="article.imgUrl"/>
                  </div>
                  <div class="content">
                    <!--面包屑-->
                    <el-breadcrumb separator="/">
                      <el-breadcrumb-item :to="{ path: '/' }">{{ article.category }}</el-breadcrumb-item>
                      <el-breadcrumb-item><a href="/">{{ article.updateTime }}</a></el-breadcrumb-item>
                      <el-breadcrumb-item>{{ article.numbers }} 字</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!--标题与描述-->
                    <h4 class="title">{{ article.title }}</h4>
                    <p class="abstract">{{ article.desc }}</p>
                    <div class="meta">
                      <span><el-icon :size="15" color="#409EFC"><View/></el-icon> {{ article.views }}</span>
                      <span><el-icon :size="15" color="#67C23A"><ChatDotRound/></el-icon> {{ article.comments }}</span>
                      <span><el-icon :size="15" color="#F56C6C"><Star/></el-icon> {{ article.likes }}</span>
                      <span class="time">{{ article.create_time }}</span>
                    </div>
                  </div>
                </router-link>
              </li>
              <!--数据全部加载完毕显示-->
              <el-result v-show="noData" icon="success" title="已经全部加载完啦！"></el-result>
            </transition-group>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import NavCategory from "@/components/base/NavCategory";
import {View, ChatDotRound, Star} from '@element-plus/icons-vue'

export default {
  name: "ArticlePage",
  components: {
    NavCategory,
    View,
    ChatDotRound,
    Star,
  },
  data() {
    return {
      articles: [],
      // 全部加载完了
      noData: false,
      // 分页数据
      page: 1,
      size: 10,
      // 浏览器tab标题
      title: '文章',
    }
  },
  // 初始加载文章
  created() {
    this.getArticles(this.page, this.size)
  },

  methods: {
    //滚动加载文章
    scrollLoadArticle() {
      if (!this.noData) {
        this.page += 1
        this.getArticles(this.page, this.size)
      }
    },

    getArticles(page, size) {
      axios.get("/api/articles/getArticleListByPageAndSize?page=" + page + "&pageSize=" + size).then(data => {
        // data.data是全部json数据
        let newArticles = data.data.data

        if (newArticles && newArticles.length > 0) {
          this.articles = this.articles.concat(newArticles)
          console.log(newArticles)
        } else {
          this.noData = true
        }
      }).catch(error => {
        if (error !== 'error') {
          this.$message({type: 'error', message: '文章加载失败!', showClose: true})
        }
      }).finally(() => {
      })
    },

  },

}
</script>

<style lang="less" scoped>
.left {
  .articles-list {
    //需加入高度，否则无限滚动会一直触发load事件
    height: 100%;
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