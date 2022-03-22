<template>
  <transition>
    <div @click="toTop" v-show="topShow" class="el-icon-arrow-up">
      <el-icon :size="30">
        <caret-top/>
      </el-icon>
    </div>
  </transition>
</template>

<script>
import {CaretTop} from '@element-plus/icons-vue'

export default {
  name: 'GoTop',
  components: {
    CaretTop
  },
  data() {
    return {
      topShow: false
    }
  },
  methods: {
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.topShow = false;
    },
    needToTop() {
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop;

      if (curHeight > 400) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }

    }
  },
  mounted() {
    /**
     * 等到整个视图都渲染完毕
     */
    this.$nextTick(function () {
      window.addEventListener('scroll', this.needToTop);
    });
  }
}
</script>

<style>
.el-icon-arrow-up {
  position: fixed;
  bottom: 50px;
  right: 40px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: rgb(119, 118, 118);
  cursor: pointer;
  padding: 15px;
  color: white;
  border-radius: 50%;
}

.el-icon-arrow-up:hover {
  background-color: #555;
}

</style>
