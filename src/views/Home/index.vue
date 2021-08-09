<template>
  <div>
    首页
    <el-button type="primary" @click="logOut">退出登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("@/assets/mySweetSnow.jpg"),
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$message.success("退出成功!");
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.mySweetSnow {
  width: 100;
  height: 100%;
}
</style>