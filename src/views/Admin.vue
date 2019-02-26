<template lang="pug">
  el-container
    el-main
      el-table(:data="components")
        el-table-column(type="index" label="#")
        el-table-column(prop="name" label="Name")
        el-table-column(prop="desc" label="Description")
        el-table-column(prop="component" label="Component Name")
        el-table-column(prop="network" label="Network")
</template>
<script>
import firebase from '../firebase'
const db = firebase.firestore()
export default{
  name: "admin",
  data(){
    return {
      components: []
    }
  },
  firestore: {
    components: db.collection("components")
  }
}
</script>