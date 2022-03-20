<template>
  <el-card class="me-area" :body-style="{ padding: '16px' }">
    <div class="me-article-header">

      <a @click="view(id)" class="me-article-title">{{title}}</a>
      <el-button class="me-article-icon" type="text">置顶</el-button>
      <span class="me-pull-right me-article-count">
        <i class="me-icon-comment"></i>
        {{comments}}
      </span>

      <span class="me-pull-right me-article-count">
        <i class="el-icon-view"></i>&nbsp;{{views}}
      </span>
    </div>

    <div class="me-artile-description">
      {{desc}}
    </div>
    <div class="me-article-footer">
      <span class="me-article-author">
        <i class="me-icon-author"></i>&nbsp;{{author}}
      </span>

      <el-tag v-for="t in tags" :key="t.tagname" size="mini" type="success">{{'t.tagname'}}</el-tag>
      {{updateTime}}

      <span class="me-pull-right me-article-count">
        <el-icon><timer />{{updateTime}}</el-icon>
      </span>

    </div>
  </el-card>
</template>

<script>
import {Timer} from '@element-plus/icons-vue'
export default {
  name: 'ArticleItem',
  components:{
    Timer
  },
  props: {
    id: Number,
    title: String,
    keyword:String,
    author:String,
    desc:String,
    numbers:Number,
    imgUrl:String,
    type:Number,
    category:String,
    views:Number,
    comments:Number,
    likes:Number,
    tags:String,
    createTime: String,
    updateTime:String,
  },
  data() {
    return {}
  },
  methods: {
    // view(id) {
    //   this.$router.push({path: `/api/getArticleList`})
    // }
  }
}
</script>

<style scoped>

.me-article-header {
  /*padding: 10px 18px;*/
  padding-bottom: 10px;
}

.me-article-title {
  font-weight: 600;
}

.me-article-icon {
  padding: 3px 8px;
}

.me-article-count {
  color: #a6a6a6;
  padding-left: 14px;
  font-size: 13px;
}

.me-pull-right {
  float: right;
}

.me-artile-description {
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 10px;
}

.me-article-author {
  color: #a6a6a6;
  padding-right: 18px;
  font-size: 13px;
}

.el-tag {
  margin-left: 6px;
}

</style>
