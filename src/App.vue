<template>
  <div class="container">
    <nav-top></nav-top>
    <div class="layout">
      <router-view />
    </div>
    <go-top></go-top>
  </div>
 </template>

<script>
import GoTop from "@/components/GoTop";
import NavTop from "@/components/NavTop";
export default {
  name: 'App',
  components: {NavTop, GoTop }
}
</script>

<style lang="less">
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
