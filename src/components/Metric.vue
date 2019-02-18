<template lang="pug">
  el-card(v-loading="loading")
    el-alert(v-if="error" title="Error al cargar el widget" type="error" show-icon :closable="false")
    h1.title(v-if="!error") {{value}}
    h3.subtitle {{label}}
</template>

<script>
  export default{
    name: "Metric",
    props: {    
      label: String,
      value: Number,
      loading: Boolean,
      error: Boolean
    }
  }
</script>

<style scoped>
.el-badge{
  width: 100%;
}
.el-badge__content.is-fixed{
  top: 1rem!important;
  right: 3rem!important;
}
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