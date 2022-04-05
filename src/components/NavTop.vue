<template>
  <div class="nav">
    <div class="nav-content">
      <el-row :gutter="20">
        <el-col :span="3">
          <router-link to="/">
            <img
                class="logo"
                src="../assets/logo.png"
                alt="LSL"
            >
          </router-link>
        </el-col>
        <el-col :span="16">
          <!--@click="$router.push('/article')“ 路由点击跳转组件-->
          <el-menu :router=true menu-trigger="click" active-text-color="#5FB878" :default-active="activeIndex"
                   mode="horizontal">
            <el-menu-item index="/" route="/home">首页</el-menu-item>
            <el-menu-item index="/article" route="/article">文章</el-menu-item>
            <el-menu-item index="/category/all" route="/category">分类</el-menu-item>
            <el-menu-item index="/tag/all" route="tag">标签</el-menu-item>
            <el-menu-item index="/archives" route="/archives">归档</el-menu-item>
            <el-menu-item index="/log" route="/log">日志</el-menu-item>
            <el-menu-item index="/messageBoard" route="/messageBoard">留言板</el-menu-item>

            <el-col :span="4" :offset="4">
              <el-menu-item index="/write">
                <el-icon>
                  <edit/>
                </el-icon>
                写文章
              </el-menu-item>
            </el-col>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <div class="nav-right">
            <el-button size="small" type="primary" @click="handleClick('login')">后台</el-button>
            <el-button size="small" type="danger" @click="handleClick('register')">统计</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
import {Edit} from '@element-plus/icons-vue'

export default {
  name: 'NavTop',
  components: {
    Edit
  },
  props: {
    activeIndex: String,
    simple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style scoped lang="less">
.nav-mobile {
  display: flex;
  line-height: 60px;

  .nav-mobile-logo {
    flex: 1;
    margin-top: 5px;
    margin-left: 10px;
  }

  .title {
    flex: 3;
    font-size: 24px;
  }

  .menu {
    flex: 1;
    font-size: 34px;
    color: #409eff;
  }
}

.nav-mobile-content {
  font-size: 0.3rem;
  height: 7.3rem;
  width: 100%;
  background-color: #fff;

  .list {
    .item {
      line-height: 0.8rem;
      color: #303133;
      border-bottom: 1px solid #eee;

      a {
        display: block;
        width: 100%;
        color: #409eff;
        text-decoration-line: none;
      }
    }
  }
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;

  .nav-content {
    width: 1200px;
    margin: 0 auto;
  }

  .logo {
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  .el-menu--horizontal > .el-menu-item {
    cursor: pointer;
    color: #333;
  }

  .nav-right {
    position: relative;
    padding-top: 15px;
    text-align: right;

    .el-dropdown {
      cursor: pointer;
      padding-right: 60px;
    }

    .user-img {
      position: absolute;
      top: -15px;
      right: 0;
      width: 50px;
      border-radius: 50%;
    }
  }
}

.enter-slideUp,
.leave-slideDown {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1010;
}

.enter-slideUp {
  overflow: auto;
  visibility: visible;
  z-index: 1001;
  animation: slideUp 0.3s forwards;
}

.leave-slideDown {
  visibility: visible;
  z-index: 1001;
  animation: slideDown 0.3s forwards;
}

@keyframes slideUp {
  from {
    transform: translate3d(0, 100%, 0);
    opacity: 0.1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}

.mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}

.mask-fade-out {
  animation: maskFadeOut 0.4s forwards;
}

@keyframes maskFadeOut {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}
</style>
