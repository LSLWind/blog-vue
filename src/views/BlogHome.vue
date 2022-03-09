<!--
BlogHome - ArticleHome - ArticleScrollPage - ScrollPage/ArticleItem
-->
<template>
  <div id="blogHome">
    <el-container>
      <!--base-nav参数，activeIndex，底部显示当前活动导航页-->
      <base-nav :activeIndex="activeIndex"></base-nav>

      <router-view class="me-container"/>
      <router-view name="ArticleHome"/>

      <base-footer v-show="footerShow"></base-footer>

    </el-container>

  </div>

</template>

<script>
import BaseFooter from '@/components/BaseFooter'
import NavTop from "@/components/NavTop";

export default {
  name: 'BlogHome',
  data() {
    return {
      activeIndex: '',
      footerShow: true
    }
  },
  components: {
    'base-nav': NavTop,
    'base-footer': BaseFooter
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.activeIndex = to.path
  //   })
  // },
  // beforeRouteUpdate(to, from, next) {
  //   this.footerShow = to.path === '/';
  //   this.activeIndex = to.path
  //   next()
  // }
}
</script>

<style>

.me-container {
  margin: 100px auto 140px;
}
</style>
