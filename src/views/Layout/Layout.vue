<template>
  <div>
    <el-container>
      <el-header>
        <div class="title">&nbsp;&nbsp;&nbsp; Vue3+ElementPlus develop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{time}}
          <i class="el-icon-user user" @click="logOut"></i>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <el-menu
              unique-opened
              class="el-menu-vertical-demo"
              active-text-color="#409EFF"
              @select="handleOpen"
            >
              <!-- <el-menu ref="menunRef"
                     :default-active="$store.state.menuActive"
                     unique-opened
                     :default-openeds="openeds"
                     class="el-menu-vertical-demo"
                     active-text-color="#409EFF"
                     :collapse="isCollapse"
                     @select="handleOpen"
                     @close="handleClose"> -->
              <div v-for="(item, index) in menus" :key="index">
                <el-submenu
                  :index="item.routePath"  class="first-menu"  v-if="item.children !== undefined && item.children.length !== 0" >
                  <!-- <template #title> vue3,elementPlus的模板新写法，同slot="title"做对比 -->
                  <template #title>
                    <i :class="item.menuIcon"></i>
                    <span class="parent-name">{{ item.menuName }}</span>
                  </template>
                  <div v-for="(sitema, index) in item.children" :key="index">
                    <router-link :to="sitema.routePath">
                      <el-menu-item  :index="sitema.routePath"  @click="showName(sitema.menuName)" >
                        <template #title>
                          <i :class="sitema.menuIcon"></i>
                          <span class="text-hidden">{{ sitema.menuName }}</span>
                        </template>
                        <!-- <span class="text-hidden">{{ sitema.menuName }}</span> -->
                      </el-menu-item>
                    </router-link>
                  </div>
                </el-submenu>
                <router-link :to="item.routePath" v-else>
                  <el-menu-item :index="item.routePath" @click="showName(item.menuName)" class="home" >
                    <i :class="item.menuIcon"></i>
                    <span>{{ item.menuName }}</span>
                  </el-menu-item>
                </router-link>
              </div>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      time:'',
      menus: [
        {
          id: "0",
          menuName: "首页",
          menuIcon: "el-icon-reading",
          routePath: "home",
          children: [],
        },
        {
          id: "1",
          menuName: "功能",
          menuIcon: "el-icon-menu",
          routePath: "function",
          children: [
            {
              id: "3",
              menuName: "列表",
              menuIcon: "el-icon-tickets",
              routePath: "list",
              children: [],
            },
            {
              id: "4",
              menuName: "表格",
              menuIcon: "el-icon-document-remove",
              routePath: "table",
              children: [],
            },
            {
              id: "5",
              menuName: "图表",
              menuIcon: "el-icon-coin",
              routePath: "charts",
              children: [],
            },
          ],
        },
        {
          id: "2",
          menuName: "配置",
          menuIcon: "el-icon-setting",
          routePath: "config",
          children: [],
        },
      ],
    };
  },
  mounted(){
    // JS动态时间
    this.getCurrentTime();
    clearInterval(myTimeDisplay);
    let myTimeDisplay = setInterval(() => {
      this.getCurrentTime(); //每秒更新一次时间
    }, 1000);
  },
  methods: {
    init() {
      console.log(this.menuDataList);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    showName(tagName) {
      this.$store.commit("SET_TAGNAME", tagName);
      console.log("tagName",tagName);
    },
    getCurrentTime() {
      var date = new Date();
      var year = date.getFullYear(); //当前年份
      var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1; //当前月份
      var data = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); //天
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); //小时
      var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //分
      var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //秒
      var time = year + "-" + month + "-" + data + "      " + hours + ":" + minute + ":" + second;
      this.time = time;
    },
    logOut(){
      this.$confirm('是否确认退出登录?', '退出登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem("token");
        this.$message.success("退出成功!");
        this.$router.push("login");
      }).catch();
    },
  },
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  padding: 0;
}
.title {
  height: 100%;
  width: 100%;
  /* to left/right */
  background: linear-gradient(to right, rgb(255, 255, 255), rgb(46, 46, 250));
  line-height: 60px;
}
.el-menu {
  border-right: none;
}
a {
  text-decoration: none;
}
.user {
  position: absolute;
  right: 40px;
  font-size: 30px;
  line-height: 60px;
  color: #fff;
}
</style>