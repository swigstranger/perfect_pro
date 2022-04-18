<template>
  <div :style="{ fontsize: fontsize + 'px' }">首页</div>
  <children :title="giveChildrenMsg" content="父组件传递的静态文本"></children>

  <p>--------------------------------</p>

  <sec-children
    @change-size="pushItemToFlu($event)"
    :flu="flu"
  ></sec-children>
</template>

<script>
import children from "../../components/children.vue";
import SecChildren from "../../components/secChildren.vue";
export default {
  components: { children, SecChildren },
  data() {
    return {
      giveChildrenMsg: {
        title: "父组件传过来的值",
        num: "8848",
      },
      flu: ["李雷", "韩梅梅"],
      fontsize: 30,
    };
  },
  methods: {
    pushItemToFlu(val) {
      this.flu.push(val);
      // this.fontsize += 5;
    },
  },
};
</script>

<style scoped>
</style>