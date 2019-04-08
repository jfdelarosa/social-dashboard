<template lang="pug">
  div
    div(style="margin-bottom: 1rem")
      el-date-picker(v-model="range" type="daterange" align="right" start-placeholder="Start Date" end-placeholder="End Date")
      div(style="float: right")
        el-button(v-on:click="do_search" v-if="range.length == 2" icon="el-icon-search" type="success") Search
        el-button(v-on:click="showDialog = true" icon="el-icon-setting") Manage users
    el-dialog(title="Manage users" :visible.sync="showDialog")
      el-form(v-on:submit.native.prevent="add")
        el-row(:gutter="20")
          el-col(:span="16")
            el-input(v-model="username" placeholder="Username")
              template(slot="prepend") @
          el-col(:span="8")
            el-button(v-on:click="add" style="width: 100%" type="success") Add user
      el-table(:data="allUsers")
        el-table-column(type="index" label="#")
        el-table-column(prop="username" label="Username")
        el-table-column(label="Option")
          table(slot-scope="scope")
            el-button(v-on:click="remove(scope.row.username)" type="danger" size="mini") Remove
    el-progress(:text-inside="true" :stroke-width="18" :percentage="per" v-if="showBar" style="margin-bottom: 1rem")
    el-table(:data="count" v-if="showTable" v-loading="count.length == 0")
      el-table-column(type="index" label="#" align="center")
      el-table-column(label="Username")
        template(slot-scope="scope")
          a(:href="'http://twitter.com/' + scope.row.username" target="_BLANK")
            | {{scope.row.username}}
            span(v-if="scope.row.suspended")  (Cuenta suspendida)
      el-table-column(prop="free" label="Free tweets" align="center")
      el-table-column(prop="qpro" label="QuestionPro tweets" align="center")
</template>
<script>
import firebase from "../../firebase";
const db = firebase.firestore();
export default {
  data() {
    return {
      data: null,
      username: "",
      current: 0,
      loading: [],
      range: [],
      count: [],
      showTable: false,
      status: "",
      showDialog: false,
      allUsers: []
    };
  },
  firestore() {
    return {
      allUsers: db.collection("qp_twitter")
    };
  },
  computed: {
    per() {
      let per = (this.count.length / this.allUsers.length) * 100;
      return Number(per.toFixed(2));
    },
    showBar() {
      return this.per >= 0 && this.per < 100 && this.showTable;
    }
  },
  methods: {
    add() {
      db.collection("qp_twitter").add({
        username: this.username.toLowerCase()
      });
      this.username = "";
    },
    remove(user) {
      db.collection("qp_twitter")
        .where("username", "==", user)
        .get()
        .then(function(snap) {
          snap.forEach(function(doc) {
            doc.ref.delete();
          });
        });
    },
    is_loading(user) {
      let isLoading = this.loading.indexOf(user) > -1;
      return isLoading;
    },
    do_search() {
      this.showTable = true;
      this.count = [];
      this.get_data();
    },
    get_data() {
      let current = this.allUsers[this.current].username;
      this.loading.push(current);
      this.$http
        .get("/twitter/tweets/" + current)
        .then(res => {
          let index = this.loading.indexOf(current);
          this.loading.splice(index, 1);
          if (!res.data.error) {
            this.count_tweets(res.data, current);
          } else {
            this.count.push({
              username: current,
              free: 0,
              qpro: 0,
              suspended: true
            });
          }
          this.current = this.current + 1;
          if (this.current < this.allUsers.length) {
            return this.get_data();
          } else {
            this.current = 0;
            return "done";
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    count_tweets(data, user) {
      let filterByDate = data.filter(tweet => {
        let date = new Date(tweet.created_at);
        let r1 = this.range[0];
        let r2 = this.range[1];
        let max = new Date(r2.toString());

        max.setHours(max.getHours() + 23);
        max.setMinutes(max.getMinutes() + 59);

        return date >= r1 && date <= max;
      });

      let filteredTweets = filterByDate.map(tweet => {
        if (!tweet.entities) {
          return false;
        } else {
          let filteredHashtags = tweet.entities.hashtags.filter(hash => {
            return hash.text.toUpperCase() == "QUESTIONPRO";
          });
          return filteredHashtags;
        }
      });

      let QP = filteredTweets.filter(tweet => {
        return tweet.length > 0;
      });

      this.count.push({
        username: user,
        free: filteredTweets.length - QP.length,
        qpro: QP.length
      });
    }
  }
};
</script>