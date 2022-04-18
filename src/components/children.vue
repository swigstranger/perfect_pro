<template>
  <p>{{ msg + "---" + title.title + title.num + content }}</p>
</template>

<script>
// 父组件向子组件传值
export default {
  name: "children",
  props: ["title", "content"],
  data() {
    return {
      msg: "子组件本身的值",
    };
  },
  methods: {
    childrenFun() {},
  },
};
</script>

<style>
</style>