<template>
  <div class="right slider">
    <div class="title">lsl</div>
    <div class="right-content">
      <div class="item">
        <div class="num">123</div>
        访问
      </div>
      <div class="item">
        <div class="num">123</div>
        文章
      </div>
      <div class="item">
        <div class="num">123</div>
        字数
      </div>
      <div class="item">
        <div class="num">123</div>
        天
      </div>
    </div>
    <!--    github 等信息-->
    <div class="introduce">
      <div class="title">github</div>
      <div class="content">
        <el-row :gutter="10">
          <el-col :span="6" :offset="4">
            <img
                style="width:40%;border-radius: 50%;"
                src="../assets/imgs/github.jpeg"
            />
          </el-col>
          <el-col :span="14">
            <el-link type="primary" href="https://github.com/LSLWind">LSLWind</el-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--导航信息，二级结构-->
    <div class="introduce">
      <div class="title">导航</div>
      <ul v-for="(value,key,index) in navigations" :key="index">
        <div class="title">{{ key }}</div>
        <ul v-for="nav in value" :key="nav.id">
          <el-link type="primary" href="baidu.com">{{ nav.name }}</el-link>
        </ul>
      </ul>
    </div>


    <div class="content">
      <img
          style="width:100%;"
          src="../assets/灵魂莲华小鹿.jpeg"
          alt="前端GitHub"
      />
    </div>
    <ArticleData/>

  </div>

</template>

<script>

import axios from "axios";
import ArticleData from "@/components/datacharts/ArticleData";

export default {
  name: "NavAside",
  components: {ArticleData},
  data() {
    return {
      navigations: []
    }
  },
  created() {
    this.getAllNavigations()
  },
  methods: {
    getAllNavigations() {
      let that = this
      that.loading = true

      axios.get("/api/navigations/getAllNavigationInfo").then(data => {
        // data.data是全部json数据
        let navigations = data.data.data

        console.log(navigations)

        that.navigations = navigations


      }).catch(error => {
        if (error !== 'error') {
          that.$message({type: 'error', message: '导航信息加载失败!', showClose: true})
        }
      }).finally(() => {
        that.loading = false
      })
    }
  }
}
</script>

<style scoped lang="less">
.slider {
  padding-top: 50px;
}

.right {
  text-align: center;

  .right-logo {
    width: 90px;
    height: 70px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
  }

  .right-content {
    padding: 10px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;

    .item {
      display: inline-block;
      padding: 0 10px;
      color: #969696;
      border-right: 1px solid #eee;

      &:last-child {
        border-right: none;
      }

      .num {
        color: #333;
      }
    }
  }

  .introduce {
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 14px;
      color: #969696;
    }

    .content {
      color: #333;
      line-height: 26px;
      text-align: left;
      padding: 20px 0;
    }

    .footer {
      padding-bottom: 10px;
    }
  }

  .tags {
    min-height: 200px;
    padding: 5px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 14px;
      color: #969696;
    }

    .item {
      display: inline-block;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #eee;
      color: #333;
      margin: 10px 10px 0 0;
      text-decoration: none;

      &:hover {
        color: #409eff;
      }
    }
  }

  .classification {
    padding: 5px 0 20px 0;

    .title {
      font-size: 14px;
      color: #969696;
    }

    .item {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid #eee;
      color: #666;
      margin: 10px 10px 0 0;
    }
  }
}

@keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-moz-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-webkit-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-o-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}
</style>