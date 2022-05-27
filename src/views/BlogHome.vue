<template>
  <el-row>
    <!--滚动文章页-->
    <el-col :span="18">
      <ArticlePage/>
    </el-col>
    <!--主页信息导航侧边-->
    <el-col :span="6">
      <InfoNavAside/>
    </el-col>
  </el-row>

</template>

<script>


import InfoNavAside from "@/components/InfoNavAside";
import ArticlePage from "@/views/ArticlePage";

export default {
  name: 'BlogHome',
  components: {
    ArticlePage,
    InfoNavAside
  },

}
</script>

<style scoped>

</style>
