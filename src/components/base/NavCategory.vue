<template>
  <div style="overflow:hidden;">
    <el-menu background-color="#FAFAFA">
      <el-sub-menu v-for="(categoryA,indexA) in categoryList" :key="categoryA.id" :index="indexA">
        <template #title>
          <!-- 图表icon 阿里矢量图标库，可直接使用-->
          <el-icon v-html="categoryA.svgIcon"></el-icon>
          <strong>
            <span>
              <!--一级目录-->
                {{ categoryA.name }}
            </span>
          </strong>
        </template>
        <el-menu-item v-for="(categoryB,indexB) in categoryA.subCategoryList" :key="categoryB.id" :index="indexB">
          <!--二级目录-->
          {{ categoryB.name }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>

import axios from "axios";

export default {
  components: {},
  data() {
    return {
      categoryList: [],
    }
  },
  created() {
    this.getAllCategories()
  },
  methods: {
    getAllCategories() {
      let that = this

      axios.get("/api/category/getCategoryList").then(data => {
        // data.data是全部json数据
        that.categoryList = data.data.data
      }).catch(error => {
        if (error !== 'error') {
          that.$message({type: 'error', message: '目录加载失败!', showClose: true})
        }
      }).finally(() => {
        console.log(that.categoryList)
      })
    },
  },
  name: "NavCategory"
}
</script>

<style scoped>

</style>