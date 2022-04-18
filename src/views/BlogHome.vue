<template>
  <el-row>

    <el-col :span="18">
      <ArticlePage/>
    </el-col>
    <el-col :span="6">
      <NavAside/>
    </el-col>
  </el-row>

</template>

<script>


import NavAside from "@/components/NavAside";
import ArticlePage from "@/views/ArticlePage";

export default {
  name: 'BlogHome',
  data() {
    return {
      activeIndex: '',
      footerShow: true
    }
  },
  components: {
    ArticlePage,
    NavAside
  },

}
</script>

<style scoped>

</style>
