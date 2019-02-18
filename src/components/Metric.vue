<template lang="pug">
  el-card(v-loading="loading")
    h1.title {{value}}
    h3.subtitle {{label}}
</template>

<script>
  export default{
    name: "Metric",
    props: ["label", "value", "loading"]
  }
</script>

<style scoped>
.el-card{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1.title{
  text-align: center;
  font-size: 2rem;
  margin: 0;
}
h3.subtitle{
  text-align: center;
  margin: 0;
}
</style>