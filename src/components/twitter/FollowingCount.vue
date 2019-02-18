<template lang="pug">
  metric(label="Following" :value="count" :loading="loading" :error="error")
</template>

<script>
import Metric from "../Metric.vue"
import jsonp from "jsonp"
export default{
  name: "FollowersCount",
  components: {
    Metric
  },
  data(){
    return {
      count: 0,
      error: false,
      loading: false
    }
  },
  computed: {
    uid(){
      return this.$store.getters.provider("twitter").uid
    }
  },
  mounted(){
    this.loading = true
    this.$http.get("http://localhost:8888/social-api/twitter/following/" + this.uid)
    .then((res) => {
      if(res.data.error || res.data.errors){
        this.error = true
      }else{
        this.count = res.data.ids.length
      }
      this.loading = false
    })
    .catch((e) => {
      console.log(e)
    })
  }
}
</script>