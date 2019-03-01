<template lang="pug">
  metric(label="Favourites" :value="count" :loading="loading" :error="error")
</template>

<script>
import Metric from "../Metric.vue"
export default{
  name: "Name",
  components: {
    Metric
  },
  data(){
    return {
      error: false,
      loading: false
    }
  },
  computed: {
    uid(){
      return this.$store.getters.provider("facebook").uid
    },
    count(){
      let data = this.$store.getters.dataSource("facebook/users")
      if(data.error || data.errors){
        this.error = true
        return 0
      }else{
        return data.favourites_count
      }
    }
  },
  mounted(){
    this.loading = true
    this.$store.dispatch('addDataSource', {endpoint: "facebook/users", param: this.uid})
    this.loading = false
  }
}
</script>