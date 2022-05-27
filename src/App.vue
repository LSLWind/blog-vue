<template>
  <div class="container">
    <!--固定顶部导航-->
    <nav-top></nav-top>
    <!--主体内容-->
    <div class="layout">
      <router-view/>
    </div>
    <!--回到顶部-->
    <el-backtop :right="100" :bottom="100" style="background: #a6a6a6"/>
  </div>
</template>

<script>
import NavTop from "@/components/NavTop";

export default {
  name: 'App',
  components: {NavTop}
}
</script>

<style lang="less">
// 引入子组件的样式
@import url("./less/monokai_sublime.less");
@import url("./less/index.less");
@import url("./less/mobile.less");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding-top: 61px;
}

img {
  vertical-align: bottom;
}
</style>
