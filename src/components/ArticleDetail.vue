<template>
  <div style="width: 100%">
    <div class="article clearfix">
      <el-container id="container">
        <!--文章头信息-->
        <el-header style="height:105px">
          <el-row>
            <!--标题-->
            <el-col :span="24" style="text-align: center">
              <h1 class="title">{{ article.title }}</h1>
            </el-col>
            <!--统计信息-->
            <el-col :span="12" :offset="12">
              <el-space wrap>
                <el-descriptions border>
                  <el-descriptions-item>
                    <template #label>
                      <div class="cell-item">
                        <el-space wrap>
                          <span style="margin-top: 40%">
                            <el-icon :size="15" color="#409EFC"><Timer/></el-icon>
                          </span>
                          <div>最后更新</div>
                        </el-space>
                      </div>
                    </template>
                    <div style="color:#909399;">{{ article.updateTime }}</div>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template #label>
                      <div class="cell-item">
                        <el-space wrap>
                          <span style="margin-top: 40%">
                            <el-icon :size="15" color="#67C23A"><DataAnalysis/></el-icon>
                          </span>
                          <div>字数</div>
                        </el-space>
                      </div>
                    </template>
                    <div style="color:#909399;">{{ article.numbers }}</div>
                  </el-descriptions-item>
                  <el-descriptions-item label="阅读">
                    <template #label>
                      <div class="cell-item">
                        <el-space wrap>
                          <span style="margin-top: 40%">
                            <el-icon :size="15" color="#F56C6C"><View/></el-icon>
                          </span>
                          <div>阅读</div>
                        </el-space>
                      </div>
                    </template>
                    <div style="color:#909399;">{{ article.views }}</div>
                  </el-descriptions-item>
                </el-descriptions>
              </el-space>
            </el-col>
          </el-row>


        </el-header>
        <!--主体-->
        <el-row :gutter="20">
          <el-col :span="3">
            <el-aside>Aside</el-aside>
          </el-col>
          <!--中间 文章展示-->
          <el-col :span="17">
            <el-main>
              <div class="content">
                <v-md-preview :text="article.content" ref="preview"></v-md-preview>
              </div>
            </el-main>
          </el-col>
          <!--右侧边-目录导航-->
          <el-col :span="4">
            <el-card shadow="always" style=" position: fixed; width:200px">
              <template #header>
                <div class="card-header">
                  <span>目录</span>
                </div>
              </template>
              <!--目录导航锚点-->
              <div>
                <div v-for="anchor in titles" :key="anchor"
                     :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
                     @click="handleAnchorClick(anchor)">
                  <el-link style="cursor: pointer" type="primary">{{ anchor.title }}</el-link>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>


      </el-container>


    </div>
  </div>

</template>

<script>
import axios from "axios";
// import VMdPreview from 'md-editor-v3';
// import 'md-editor-v3/lib/style.css';
import {Timer, DataAnalysis, View} from '@element-plus/icons-vue'


export default {
  name: "ArticleDetail",


  data() {
    return {
      article: '',
      titles: [],
    }
  },
  components: {
    // VMdPreview,
    DataAnalysis,
    Timer,
    View,
  },
  created() {
  },

// 加载目录，async await配合等待文章获取完毕再渲染
  async mounted() {

    await this.getArticleContent();

      const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
      const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());


      if (!titles.length) {
        this.titles = [];
        return;
      }

      const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

      this.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute('data-v-md-line'),
        indent: hTags.indexOf(el.tagName),
      }));

  },

  methods: {
    // 获取文章内容
    async getArticleContent() {
      let that = this
      //获取参数里的id
      const id = this.$route.params.id;
      //获取文章内容
      await axios.get('/api/articles/getArticleById?id=' + id).then(res => {
        that.article = res.data.data
      }).catch(error => {
        if (error !== 'error') {
          that.$message({type: 'error', message: '文章加载失败!', showClose: true})
        }
      });
    },

    // 目录锚点点击
    handleAnchorClick(anchor) {
      const {preview} = this.$refs;
      const {lineIndex} = anchor;

      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 80,
        });
      }
    },

  },

  //抓取跳转前的文章id


}
</script>

<style lang="less" scoped>


.cell-item {
  display: flex;
  align-items: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article {
  width: 100%;

  .header {
    .title {
      margin: 20px 0 0;
      text-align: center;
      font-size: 34px;
      font-weight: bold;
    }

    .author {
      position: relative;
      margin: 30px 0 40px;
      padding-left: 50px;

      .avatar {
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .info {
        float: left;
        vertical-align: middle;
        // display: inline-block;
        margin-left: 8px;

        a {
          color: #333;
        }
      }

      .name {
        margin-right: 3px;
        font-size: 16px;
        vertical-align: middle;
      }

      .meta {
        margin-top: 5px;
        font-size: 12px;
        color: #969696;

        span {
          padding-right: 5px;
        }
      }

      .tags {
        float: right;
        padding-top: 15px;
        // padding-right: 20px;
        .tag {
          // padding: 0 10px;
          margin-left: 5px;
          border-right: 2px solid #eee;
        }
      }
    }
  }

  .content {
    min-height: 300px;
  }
}

.heart {
  height: 60px;
  text-align: center;
  margin: 50px;
}

.loader {
  color: rgb(226, 44, 44);
  text-align: center;
  padding: 50px;
  font-size: 16px;
}

.clearfix {
  clear: both;
}
</style>