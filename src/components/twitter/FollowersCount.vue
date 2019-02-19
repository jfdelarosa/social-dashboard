<template lang="pug">
  metric(label="Followers" :value="count" :loading="loading" :error="error")
</template>

<script>
import Metric from "../Metric.vue"
export default{
  name: "FollowersCount",
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
      return this.$store.getters.provider("twitter").uid
    },
    count(){
      let data = this.$store.getters.dataSource("twitter/users")
      if(data.error || data.errors){
        this.error = true
        return 0
      }else{
        return data.followers_count
      }
    }
  },
  mounted(){
    this.loading = true
    this.$store.dispatch('addDataSource', {endpoint: "twitter/users", param: this.uid})
    this.loading = false
  }
}
</script>