<template>
  <div class="login">
    <el-card class="loginCard" shadow="hover">
      <el-form ref="form" :model="form" label-width="46px" >
        <div style="margin-bottom: 20px">登录/注册</div>
        <el-form-item label="账号" prop="name" label-width="50">
          <el-input v-model="form.name" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd" label-width="50">
          <el-input v-model="form.pwd" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" @click="toLogin">登录</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: "",
      },
      loading: false,
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    toLogin() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.form.name == "123" && this.form.pwd == "123") {
            this.$store.commit("SET_USER", {
              name: this.form.name,
              pwd: this.form.pwd,
            });
            const token = Math.random().toString();
            this.$store.commit("SET_TOKEN", token);
            localStorage.setItem("token", token);
            this.$message.success("登录成功!");
            this.$router.push({
              path: this.redirect || "/",
              query: this.otherQuery,
            });
            this.loading = false;
          } else {
            this.$message.error("登陆失败,请重试!");
          }
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style scoped>
.login {
  background-color: rgb(204, 205, 243);
  width: 100%;
  height: 100%;
  /* background: url('../assets/mySweetSnow.jpg') no-repeat;
  background-size:100% 100%;  */
}
.loginCard {
  width: 400px;
  height: 230px;
  position: absolute;
  left: calc(70% - 200px);
  top: calc(40% - 100px);
}
</style>