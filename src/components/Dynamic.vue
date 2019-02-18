<template>
  <component :is="component" :data="data" v-if="component" />
</template>
<script>
export default {
  name: "dynamic",
  props: ["data", "type", "network"],
  data() {
    return {
      component: null,
    }
  },
  computed: {
    loader() {
      if (!this.type) {
        return null
      }
      return () => import("./" + this.network + "/" + this.type)
    },
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import("./Default")
      })
  },
}
</script>