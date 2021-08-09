import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../views/Layout/Layout.vue";
import Home from "../views/Home/index.vue";
import Login from "../views/Login.vue";
import Charts from "../views/Function/Charts/index.vue";
import List from "../views/Function/List/index.vue";
import Table from "../views/Function/Table/index.vue";
import Config from "../views/Config/index.vue";
import NotFound from "../views/Notfound/index.vue"

const routes = [
  {
    path: "/",
    redirect: '/home',
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        // 路由独享守卫
        // beforeEnter: (to, from, next) => {
        //   // ...
        // }
      },
      {
        path: "/charts",
        name: "Charts",
        component: Charts,
      },
      {
        path: "/list",
        name: "List",
        component: List,
      },
      {
        path: "/table",
        name: "Table",
        component: Table,
      },
      {
        path: "/config",
        name: "Config",
        component: Config,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      title: 'Page not found',
      isLogin: false
    },
    component: NotFound,
  },
  // 所有未定义路由，全部重定向到404页,vue3写法更新
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    const token = localStorage.getItem("token");
    if (token) return next()
    else router.push("login");
  }
})

export default router;
