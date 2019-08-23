<template lang="pug">
  div
    el-form(v-on:submit.native.prevent="search" v-loading="loading" style="margin-bottom: 1rem;")
      el-row(:gutter="20")
        el-col(:span="5")
          el-input(v-model="hashtag" placeholder="Hashtag")
        el-col(:span="2")
          el-button(v-on:click="search" style="width: 100%" type="success") Search
    el-table(:data="tweetCount" :default-sort="{prop: 'questionpro_es', order: 'descending'}" style="width: 100%" v-if="tweetCount.length > 0")
      el-table-column(prop="screen_name" label="Username" sortable)
      el-table-column(prop="questionpro_es" label="questionpro_es Tweet Count" sortable)
      el-table-column(prop="qpro_live" label="qpro_live Tweet Count" sortable)
      el-table-column(prop="tudashboard" label="tudashboard Tweet Count" sortable)
      el-table-column(prop="other" label="other Tweet Count" sortable)
</template>
<script>
export default {
  data: () => ({
    hashtag: "TalkIN19",
    latest: null,
    loading: false,
    globalCount: 0,
    tweetCount: []
  }),
  methods: {
    getId(str) {
      return str.split("&")[0].replace("?max_id=", "");
    },
    parseData(data) {
      let l = data.statuses.length;
      for (let i = 0; i < l; i++) {
        this.globalCount++;
        let screen_name = data.statuses[i].user.screen_name;
        let user = this.tweetCount.filter(
          item => item.screen_name == screen_name
        );
        let mentions = data.statuses[i].entities.user_mentions;
        let questionpro_es =
          mentions.filter(i => i.screen_name == "questionpro_es").length > 0;
        let qpro_live =
          mentions.filter(i => i.screen_name == "QPro_Live").length > 0;
        let tudashboard =
          mentions.filter(i => i.screen_name == "TuDashboard").length > 0;
        if (user.length == 0) {
          let data = { screen_name: screen_name, other: 0 };
          data.questionpro_es = questionpro_es ? 1 : 0;
          data.qpro_live = qpro_live ? 1 : 0;
          data.tudashboard = tudashboard ? 1 : 0;
          if (!questionpro_es && !qpro_live && !tudashboard) {
            data.other = 1;
          }
          this.tweetCount.push(data);
        } else {
          if (questionpro_es) {
            user[0].questionpro_es++;
          }
          if (qpro_live) {
            user[0].qpro_live++;
          }
          if (tudashboard) {
            user[0].tudashboard++;
          }
          if (!questionpro_es && !qpro_live && !tudashboard) {
            user[0].other++;
          }
        }
      }
    },
    parseResponse(res) {
      console.log(res);
      let data = res.data;
      this.parseData(data);
      if (data.search_metadata.hasOwnProperty("next_results")) {
        let max_id = this.getId(data.search_metadata.next_results);
        this.searchMore(max_id);
      } else {
        this.loading = false;
      }
    },
    search() {
      this.loading = true;
      this.$http
        .get(`/twitter/hashtag/${this.hashtag}`)
        .then(res => {
          this.parseResponse(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    searchMore(id) {
      this.$http
        .get(`/twitter/hashtag/${this.hashtag}/${id}`)
        .then(res => {
          this.parseResponse(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>