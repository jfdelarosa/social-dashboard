<template lang="pug">
  div
    div(style="margin-bottom: 1rem")
      el-button(v-on:click="showAddComponent = true") Add component
    el-dialog(title="Add Component" :visible.sync="showAddComponent")
      el-form(label-position="top" size="small" v-on:submit.native.prevent="addComponent")
        el-row(:gutter="20")
          el-col(:span="8")
            el-form-item(label="Component")
              el-input(v-model="component.component")
          el-col(:span="8")
            el-form-item(label="Name")
              el-input(v-model="component.name")
          el-col(:span="8")
            el-form-item(label="Network")
              el-select.cap(v-model="component.network")
                el-option.cap(v-for="item in networks" :key="item" :label="item" :value="item")
        el-row(:gutter="20")
          el-col(:span="6")
            el-form-item(label="Width")
              el-input-number(v-model="component.width" controls-position="right")
          el-col(:span="6")
            el-form-item(label="Height")
              el-input-number(v-model="component.height" controls-position="right")
          el-col(:span="6")
            el-form-item(label="x")
              el-input-number(v-model="component.x" controls-position="right")
          el-col(:span="6")
            el-form-item(label="y")
              el-input-number(v-model="component.y" controls-position="right")
        el-form-item(label="Desc")
          el-input(v-model="component.desc" type="textarea")
        el-button(type="success" icon="el-icon-plus" v-on:click="addComponent") Add Component
    //- div.cap(v-for="item in networks")
    //-   h1 {{item}}
    //-   el-table(:data="dynamicData(item)" style="margin-bottom: 1rem")
    //-     el-table-column(type="index" label="#" align="center")
    //-     el-table-column(prop="name" label="Name")
    //-     el-table-column(prop="desc" label="Description")
    //-     el-table-column(prop="component" label="Component Name")
    //-     el-table-column(prop="network" label="Network")
    //-     el-table-column(label="Options")
    //-       template(slot-scope="scope")
    //-         el-button(type="danger" size="mini" icon="el-icon-delete") Remove

    el-table(:data="components")
      el-table-column(type="index" label="#" align="center")
      el-table-column(prop="name" label="Name")
      el-table-column(prop="desc" label="Description")
      el-table-column(prop="component" label="Component Name")
      el-table-column(prop="network" label="Network")
      el-table-column(label="Options")
        template(slot-scope="scope")
          el-button(type="danger" size="mini" icon="el-icon-delete" v-on:click="removeComponent(scope.row.id)") Remove
</template>
<script>
import firebase from '../../firebase'
const db = firebase.firestore()
export default{
  name: "admin",
  data(){
    return {
      showAddComponent: false,
      networks: ["twitter", "facebook", "google", "instagram"],
      component: {
        component: "",
        desc: "",
        height: 0,
        width: 0,
        x: 0,
        y: 0,
        name: "",
        network: ""
      },
      components: []
    }
  },
  methods: {
    dynamicData(network){
      return this.components.filter(item => {
        return item.network == network
      })
    },
    removeComponent(item){
      this.$confirm('Are you sure you want to delete the component?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        db.collection("components").doc(item).delete().then(() => {        
          this.$message({
            type: 'success',
            message: 'Component successfully deleted!'
          });
        })
      })
    },
    addComponent(){
      let id = btoa(Math.random()).substring(0,12)
      this.component.id = id
      this.showAddComponent = false
      db.collection("components").doc(id).set(this.component).then(() => {
        this.component = {
          component: "",
          desc: "",
          height: 0,
          width: 0,
          x: 0,
          y: 0,
          name: "",
          network: ""
        }
      })
    }
  },
  firestore: {
    components: db.collection("components")
  }
}
</script>
<style>
.cap{
  text-transform: capitalize;
}
.el-form-item__label{
  padding: 0!important;
}
</style>