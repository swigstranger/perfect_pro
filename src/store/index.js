import { createStore } from 'vuex'

export default createStore({
  // 数据存放
  state: {
    user: {
      name: "",
      pwd: "",
    },
    token: "",
    // 当前激活菜单
    menuActive: "",
    tagName: "",
  },
  // 数据改变,声明方法
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_MENUACTIVE (state, menuActive) {
      state.menuActive = menuActive
    },
    SET_TAGNAME (state, tagName) {
      state.tagName = tagName
    },
  },
  actions: {
  },
  modules: {
  }
})

// this.$store.dispatch() 与 this.$store.commit()方法的区别总的来说他们只是存取方式的不同,两个方法都是传值给vuex的mutation改变state
// this.$store.dispatch() ：含有异步操作，例如向后台提交数据，写法：this.$store.dispatch(‘action方法名’,值)
// this.$store.commit()：同步操作，，写法：this.$store.commit(‘mutations方法名’,值)

// commit: 同步操作

// 存储 this.$store.commit('changeValue',name)
// 取值 this.$store.state.changeValue
// dispatch: 异步操作

// 存储 this.$store.dispatch('getlists',name)
// 取值 this.$store.getters.getlists