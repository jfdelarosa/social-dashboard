<template lang="pug">
  metric(label="Followers" :value="count" :loading="loading")
</template>

<script>
import Metric from "../Metric.vue"
import jsonp from "jsonp"
export default{
  name: "FollowersCount",
  props: ["uid"],
  components: {
    Metric
  },
  data(){
    return {
      count: 0,
      error: true,
      loading: false
    }
  },
  mounted(){
    this.loading = true
    this.$http.get("http://localhost:8888/social-api/twitter/followers/" + this.uid)
    .then((res) => {
      if(res.data.errors.length > 0){
        this.error = true
        console.log(res.data.errors)
      }else{
        this.count = res.data.ids.length
        this.loading = false
      }
    })
    .catch((e) => {
      console.log(e)
    })
  }
}
</script>