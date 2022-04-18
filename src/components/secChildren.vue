<template>
  <p v-for="(item, index) in flu" :key="index">{{ item + index }}</p>
  <button @click="$emit('change-size',5)">添加</button>
</template>

<script>
// 子组件想父组件传值
export default {
  name: "secChildren",
  props: ["flu"],
  data() {
    return {
      msg: "第二个子组件自己的值",
    };
  },
};
</script>

<style>
</style>