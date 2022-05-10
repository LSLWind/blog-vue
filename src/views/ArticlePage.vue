<template>
  <div v-title :data-title="title">
    <div class="left clearfix">
      <el-row :gutter="30">
        <!--目录导航-->
        <el-col :span="5">
          <NavCategory/>
        </el-col>
        <!--文章列表-->
        <el-col :span="19">
          <ul class="articles-list" id="list">
            <transition-group name="el-fade-in">
              <li v-for="(article) in articles" :key="article.id" class="item" >
<!--                <a :href="['http://localhost:3001/articleDetail?article_id='+article.id]" target="_blank">-->

                  <router-link  :to="`/articleDetail/${article.id}`" :key="article.id" class="around" >
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