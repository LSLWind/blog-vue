<template>
  <div v-title :data-title="title">
    <el-container class="me-area">
      <el-main class="me-main">
        <el-button type="primary" round @click="addLog">Primary</el-button>
        <!--时间线-->
        <el-timeline>
          <el-timeline-item center :timestamp="date" placement="top">

            <el-tag>开发日志</el-tag>

          </el-timeline-item>
          <el-timeline-item
              v-for="(activity, index) in logData"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :hollow="activity.hollow"
              :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import {getCurrentDate} from "@/utils/time"

//增加日志弹出框
import {ElMessageBox, ElMessage} from 'element-plus'

export default {
  name: "LogPage",
  // setup返回的数据与函数可以直接在模板中使用
  data() {
    return {
      title: '日志 - LSL',
      date: getCurrentDate(),//获取系统当前时间
      logData: []
    }
  },
  created() {
    this.getAllLogs()
  },
  methods: {
    getAllLogs() {
      let that = this

      let size = ['normal', 'large']
      let type = ['primary', 'success', 'warning', 'danger', 'info']
      let icon = ['MoreFilled']

      axios.get("/api/logs/getAllLog").then(data => {
        // data.data是全部json数据
        let logs = data.data.data
        logs.forEach(log => {
          log.timestamp = log.updateTime
          that.logData.push(log)
        })

      }).catch(error => {
        if (error !== 'error') {
          console.log(error)
        }
      })

      //随机加入样式
      that.logData.forEach(log => {
        log.size = size[Math.floor(Math.random() * size.length)]
        log.type = type[Math.floor(Math.random() * type.length)]
        log.icon = icon[Math.floor(Math.random() * icon.length)]
      })
    },
    addLog() {
      ElMessageBox.prompt('开发日志内容', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputErrorMessage: 'Content',
      }).then(({value}) => {
        //提交开发日志表单
        ElMessage({
          type: 'success',
          message: `Your email is:${value}`,
        })
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: 'Input canceled',
        })
      })
    }


  }


}
</script>

<style scoped>
.me-main {
  overflow: hidden;
}
</style>