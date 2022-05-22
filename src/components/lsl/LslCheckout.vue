<template>
  <div id="app">
    <div id="admin">
      <div class="pos" v-loading="loading">
        <h1 class="adminh1">LSL-Blog后台登录CURD</h1>
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
          <el-form-item label="用户名：" prop="pass">
            <el-input
                prefix-icon="el-icon-user"
                style="width: 250px"
                type="text"
                v-model="ruleForm.pass"
                autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密 码：" prop="checkPass">
            <el-input
                prefix-icon="el-icon-menu"
                style="width: 250px"
                show-password
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
            >提交
            </el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ElMessage} from 'element-plus'

export default {
  name: "LslCheckout",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户信息"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 8) {
        callback(new Error("长度不对!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      // 用户名与密码
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{validator: validatePass, trigger: "blur"}],
        checkPass: [{validator: validatePass2, trigger: "blur"}],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.loading = true;
          //后台校验
          setTimeout(() => {
            const params = new URLSearchParams();
            params.append('name', this.ruleForm.pass);
            params.append('password', this.ruleForm.checkPass);
            axios({
              method: 'post',
              url: '/api/lsl/check',
              data: params,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(function (res) {
              //校验成功

              //TODO 用户名密码校验的安全性、session存储的安全性

              if (res.data.status === 200) {
                ElMessage.success('登录成功')
                that.$router.push('/lsl/home')
              } else {
                ElMessage.error('用户名或密码错误')
              }
              that.loading = false;
            }).catch(function (error) {
              console.log(error)
            });
          }, 2000);
        } else {
          console.log("页面提交错误");
          return false;
        }
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#admin {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -250px;
  width: 500px;
  height: 400px;
  background: #fff;
  border-radius: 10%;
  box-shadow: 8px 10px 10px rgb(177, 223, 242);
}

.adminh1 {
  margin: 20px 0;
  text-shadow: 10px 13px 3px rgb(207, 207, 207);
  text-align: center;
}

.pos {
  width: 450px;
  height: 350px;
  position: absolute;
  top: 25px;
  left: 25px;
}
</style>