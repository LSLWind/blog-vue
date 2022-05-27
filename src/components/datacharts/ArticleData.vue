<template>
  <!--echarts 统计信息-->
  <div id="main" style='height: 500px'></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
export default {
  name: "ArticleData",
  setup() {
    onMounted(() => {
      // 获取DOM元素并且进行初始化
      var myChart = echarts.init(document.getElementById('main'));
      // 创建图标
      myChart.setOption({
        title: {
          text: '数据统计'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '文章数',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    })
  },

  methods:{

  }
};
</script>

<style lang="less" scoped>

</style>