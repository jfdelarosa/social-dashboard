<template lang="pug">
  #app
    //- el-menu.el-menu-demo(mode='horizontal' :router="true" background-color='#545c64' text-color='#fff' active-text-color='#ffd04b')
      el-menu-item(index="contacts" :route="{name: 'contacts'}") Contactos
      el-menu-item(index="pipelines-test" :route="{name: 'pipelines-test'}") Test
      el-submenu(index='2')
        template(slot='title') Opciones
        el-menu-item(index="#" v-on:click="logout") Salir
    router-view
    el-footer
      | Made with
      span.love ♥
</template>
<script>

export default {
  methods: {

  },
  mounted(){
    console.log("loaded App")
  }
}
</script>
<style>
  body{
    background: #d8e4ec;
    padding: 0;
    margin: 0;
  }
  .w100{
    width: 100%;
  }
  .p0 .el-card__body{
    padding: 0!important;
  }
  .el-card__body{
    overflow: hidden!important;
    clear: both!important;
  }
  .fr{
    float: right;
  }
  .bw{
    word-break: break-word!important;
  }
  .mb{
    margin-bottom: 1rem!important;
  }
  .w0{
    width: 0!important;
  }
  .el-footer{
    opacity: 0.6;
    text-align: center;
  }
  .el-dialog__body{
    padding: 0 20px!important;
  }
  .el-form-item{
    margin-bottom: 1rem;
  }
  .el-form-item__label{
    height: 2rem;
  }
  .love{
    color: red;
    font-weight: bold;
    font-size: 1.1rem;
  }
</style>
