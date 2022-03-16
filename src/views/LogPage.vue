<template>
  <div v-title :data-title="title">
    <el-container class="me-area">
      <el-main class="me-main">
        <el-row>
          <el-col :span="16"></el-col>
          <el-col :span="4">
            <!--提交开发日志-->
            <el-button type="primary" round @click="addLog">提交日志</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-row :gutter="20">
              <!--侧边导航-->
              <el-col :span="6">
                <NavAside/>
              </el-col>
              <!-- 日志-->
              <el-col :span="9">
                <!--时间线，文章日志-->
                <el-timeline>
                  <el-timeline-item center :timestamp="date" placement="top">
                    <el-tag>文章日志</el-tag>
                  </el-timeline-item>
                  <el-timeline-item
                      v-for="(log, index) in articleLog"
                      :key="index"
                      :color="log.color"
                      :timestamp="log.timestamp"
                  >
                    {{ log.content }}
                  </el-timeline-item>
                </el-timeline>
              </el-col>
              <el-col :span="9">
                <!--时间线，开发日志-->
                <el-timeline>
                  <el-timeline-item center :timestamp="date" placement="top">
                    <el-tag>开发日志</el-tag>
                  </el-timeline-item>
                  <el-timeline-item
                      v-for="(log, index) in developLog"
                      :key="index"
                      :color="log.color"
                      :timestamp="log.timestamp"
                  >
                    {{ log.content }}
                  </el-timeline-item>
                </el-timeline>
              </el-col>
            </el-row>
          </el-col>
          <!--          日历-->
          <el-col :span="6">
            <DateCalendar/>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import {getCurrentDate} from "@/utils/time"

//增加日志弹出框
import {ElMessageBox, ElMessage} from 'element-plus'
import NavAside from "@/components/NavAside";
import DateCalendar from "@/components/utils/DateCalendar";

export default {
  name: "LogPage",
  components: {DateCalendar, NavAside},
  // setup返回的数据与函数可以直接在模板中使用
  data() {
    return {
      title: '日志 - LSL',
      date: getCurrentDate(),//获取系统当前时间
      articleLog: [],
      developLog: []
    }
  },
  created() {
    this.getAllLogs()
  },
  methods: {
    getAllLogs() {
      let that = this
      let color = ['#F56C6C', '#67C23A', '#909399', '#E6A23C', '#409EFF', '#606266', '#F2F6FC']

      axios.get("/api/logs/getAllLog").then(data => {
        // data.data是全部json数据
        let logs = data.data.data
        logs.forEach(log => {
          //随机加入样式
          log.color = color[Math.floor(Math.random() * color.length)]
          if (log.type === 0) {
            that.developLog.push(log)
          } else {
            that.articleLog.push(log)
          }
        })

      }).catch(error => {
        if (error !== 'error') {
          console.log(error)
        }
      })

    },
    addLog() {
      ElMessageBox.prompt('开发日志内容', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputErrorMessage: 'Content',
      }).then(({value}) => {
        //提交开发日志表单
        axios.post('/api/logs/add', {
          'type': 0,//0代表开发日志
          'content': value
        }).then(() => {
          ElMessage({
            type: 'success',
            message: '日志已提交',
          })
        }).catch(error => {
          ElMessage({
            type: 'error',
            message: `日志提交失败：${error}`,
          })
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