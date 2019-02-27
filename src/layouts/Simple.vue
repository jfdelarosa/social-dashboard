<template lang="pug">
div.bg
  el-container
    slot
  el-footer
    span
      | Made with
      span.love ♥
</template>
<script>
export default {
}
</script>
<style scoped>
.bg{
  background: #F0F0F0;
}
.el-footer{
  opacity: 0.6;
  text-align: center;
}
.love{
  color: red;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>