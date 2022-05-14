<template>
  <div class="right slider">
    <!-- 头像 -->
    <el-avatar :size="100">
      <img src="../assets/凯尔.jpg" alt="头像加载失败"/>
    </el-avatar>
     <div class="title">lsl</div>
    <!--统计信息-->
    <div class="right-content">
      <div class="item">
         <el-icon :size="25"><svg t="1651665407219" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16585" width="32" height="32"><path d="M511.29 670.28c-89.61 0-162.51-72.91-162.51-162.51s72.91-162.51 162.51-162.51S673.8 418.17 673.8 507.77s-72.9 162.51-162.51 162.51z m0-280.2c-64.89 0-117.68 52.79-117.68 117.68s52.79 117.68 117.68 117.68 117.68-52.79 117.68-117.68-52.78-117.68-117.68-117.68z" fill="#D7261D" p-id="16586"></path><path d="M511.29 804.77c-191.39 0-365.61-112.99-443.86-287.85a22.31 22.31 0 0 1 0-18.31c78.25-174.87 252.47-287.85 443.86-287.85S876.9 323.75 955.15 498.61a22.31 22.31 0 0 1 0 18.31c-78.24 174.87-252.47 287.85-443.86 287.85zM112.57 507.76c72.95 153.53 228.35 252.18 398.72 252.18s325.77-98.64 398.72-252.18c-72.95-153.53-228.35-252.18-398.72-252.18s-325.77 98.65-398.72 252.18z" fill="#333333" p-id="16587"></path></svg></el-icon>
        <div class="num"><strong>123 访问</strong></div>
      </div>
      <div class="item">
        <el-icon :size="25"><svg t="1651665658111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17802" width="16" height="16"><path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="17803"></path><path d="M682.666667 204.8h238.933333a34.133333 34.133333 0 0 1 34.133333 34.133333v648.533334a68.266667 68.266667 0 0 1-68.266666 68.266666h-204.8V204.8z" fill="#FFAA44" p-id="17804"></path><path d="M68.266667 921.6a34.133333 34.133333 0 0 0 34.133333 34.133333h785.066667a68.266667 68.266667 0 0 1-68.266667-68.266666V102.4a34.133333 34.133333 0 0 0-34.133333-34.133333H102.4a34.133333 34.133333 0 0 0-34.133333 34.133333v819.2z" fill="#11AA66" p-id="17805"></path><path d="M238.933333 307.2a34.133333 34.133333 0 0 0 0 68.266667h136.533334a34.133333 34.133333 0 1 0 0-68.266667H238.933333z m0 204.8a34.133333 34.133333 0 1 0 0 68.266667h409.6a34.133333 34.133333 0 1 0 0-68.266667H238.933333z m0 204.8a34.133333 34.133333 0 1 0 0 68.266667h204.8a34.133333 34.133333 0 1 0 0-68.266667H238.933333z" fill="#FFFFFF" p-id="17806"></path></svg></el-icon>
        <div class="num"><strong>23文章</strong></div>
      </div>
      <div class="item">
        <el-icon :size="25"><svg t="1651665715392" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18609" width="16" height="16"><path d="M938.666667 864.711111c0-5.688889 0-5.688889 0 0 5.688889-11.377778 5.688889-17.066667 5.688889-28.444444V244.622222c0-45.511111-34.133333-79.644444-79.644445-79.644444H147.911111c-5.688889 0-11.377778 0-11.377778 5.688889-11.377778 0-17.066667 5.688889-22.755555 11.377777h-5.688889c0 5.688889-5.688889 11.377778-11.377778 17.066667-5.688889 5.688889-11.377778 11.377778-11.377778 17.066667v5.688889c0 5.688889-5.688889 17.066667-5.688889 22.755555v591.644445c0 45.511111 34.133333 79.644444 79.644445 79.644444h716.8c5.688889 0 11.377778 0 11.377778-5.688889 5.688889 0 11.377778-5.688889 17.066666-11.377778h5.688889l11.377778-11.377777c11.377778-11.377778 17.066667-17.066667 17.066667-22.755556z m-779.377778 5.688889c-17.066667 0-34.133333-17.066667-34.133333-34.133333V244.622222c0-17.066667 17.066667-34.133333 34.133333-34.133333h705.422222c17.066667 0 34.133333 17.066667 34.133333 34.133333v591.644445c0 17.066667-17.066667 34.133333-34.133333 34.133333H159.288889z" fill="#148BE3" p-id="18610"></path><path d="M534.755556 369.777778h273.066666c11.377778 0 22.755556-11.377778 22.755556-22.755556s-11.377778-22.755556-22.755556-22.755555H534.755556c-11.377778 0-22.755556 11.377778-22.755556 22.755555s11.377778 22.755556 22.755556 22.755556zM802.133333 443.733333h-170.666666c-11.377778 0-22.755556 11.377778-22.755556 22.755556s11.377778 22.755556 22.755556 22.755555h170.666666c11.377778 0 22.755556-11.377778 22.755556-22.755555s-5.688889-22.755556-22.755556-22.755556zM824.888889 585.955556c0-11.377778-11.377778-22.755556-22.755556-22.755556h-102.4c-11.377778 0-22.755556 11.377778-22.755555 22.755556s11.377778 22.755556 22.755555 22.755555h102.4c17.066667 0 22.755556-11.377778 22.755556-22.755555zM432.355556 312.888889c-5.688889-11.377778-17.066667-17.066667-28.444445-11.377778-5.688889 0-11.377778 5.688889-17.066667 11.377778l-204.8 449.422222c-5.688889 11.377778 0 22.755556 11.377778 28.444445h11.377778c11.377778 0 17.066667-5.688889 22.755556-11.377778l85.333333-193.422222h193.422222l85.333333 193.422222c5.688889 5.688889 11.377778 11.377778 22.755556 11.377778h11.377778c11.377778-5.688889 17.066667-17.066667 11.377778-28.444445L432.355556 312.888889zM335.644444 546.133333l73.955556-170.666666 73.955556 170.666666H335.644444z" fill="#148BE3" p-id="18611"></path></svg></el-icon>
        <div class="num"><strong>235623字数</strong></div>
      </div>
      <div class="item">
        <el-icon :size="25"><svg t="1651665746873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19432" width="16" height="16"><path d="M74.666667 298.666667h874.666666a32 32 0 1 1 0 64H74.666667a32 32 0 0 1 0-64z m426.666666 170.666666h114.56l-11.861333 40.917334a32 32 0 0 1-30.72 23.082666H501.333333a32 32 0 1 1 0-64z m256 155.306667v149.333333a32 32 0 1 1-64 0v-149.333333a32 32 0 0 1 64 0z m-21.333333-558.805333V213.333333a32 32 0 0 1-64 0V65.834667a32 32 0 1 1 64 0z m-373.333333 0V213.333333A32 32 0 0 1 298.666667 213.333333V65.834667a32 32 0 1 1 64 0z" fill="#85DAFF" p-id="19433"></path><path d="M202.666667 469.333333h149.333333a32 32 0 1 1 0 64h-149.333333a32 32 0 1 1 0-64z m0 213.333334h149.333333a32 32 0 1 1 0 64h-149.333333a32 32 0 1 1 0-64z m746.666666-269.312V180.053333H74.666667v726.613334h404.096a342.912 342.912 0 0 0 51.925333 64H42.666667A32 32 0 0 1 10.666667 938.666667V148.053333A32 32 0 0 1 42.666667 116.053333h938.666666a32 32 0 0 1 32 32v302.592a341.034667 341.034667 0 0 0-64-37.290666z m-213.333333 557.312a266.666667 266.666667 0 1 1 0-533.333334 266.666667 266.666667 0 0 1 0 533.333334z m0-64a202.666667 202.666667 0 1 0 0-405.333334 202.666667 202.666667 0 0 0 0 405.333334z" fill="#38B6EE" p-id="19434"></path></svg></el-icon>
        <div class="num"><strong>123天</strong></div>
      </div>
    </div>
    <!--导航信息，二级结构-->
    <div class="introduce">
      <div class="title"><strong>导航</strong></div>
      <ul v-for="(value,key,index) in navigations" :key="index">
        <div class="title">{{ key }}</div>
        <ul v-for="nav in value" :key="nav.id">
          <el-link type="primary" href="baidu.com">{{ nav.name }}</el-link>
        </ul>
      </ul>
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