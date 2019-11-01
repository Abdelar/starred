<template>
  <div class="container mt-3">
    <div class="jumbotron jumbotron-fluid rounded">
      <div class="container">
        <h1 class="display-4">
          The Most Starred Repos
          <font-awesome-icon icon="star" class="text-warning" />
        </h1>
        <p class="lead">Submitted in the last 30 days to GitHub.</p>
        <hr class="my-2" />
        <p>by Abdellatif ELAROUSSI</p>
        <p class="lead">
          <a
            class="btn btn-primary btn"
            href="https://developer.github.com/v3/"
            role="button"
          >REST API v3</a>
        </p>
      </div>
    </div>
    <div v-for="item in repos.items" :key="item.id">
      <div class="row d-flex mb-3 align-items-start">
        <div class="col-sm-6 col-lg-3">
          <img
            class="img-fluid d-block img-thumbnail"
            :src="item.owner.avatar_url"
            :alt="item.owner.login"
          />
          <!-- embed a link in the image element to the repo owner -->
          <!-- <a :href="item.owner.html_url" class="stretched-link" :title="item.owner.login"></a> -->
        </div>
        <div class="col">
          <small class="float-sm-right text-muted text-small">
            <font-awesome-icon icon="calendar-check" class="mr-2" />Submitted
            <span>{{formattedDate(item.created_at)}}</span> days ago by
            <span class="text-primary">
              <a
                :href="item.owner.html_url"
                :title="item.owner.login"
                class="text-decoration-none"
              >{{item.owner.login}}</a>
            </span>
          </small>
          <h3 class="text-primary">
            <a :href="item.html_url" :title="item.name" class="text-decoration-none">{{item.name}}</a>
          </h3>
          <p class="mb-0 mb-2 lead">{{item.description}}</p>
          <span class="badge badge-primary mr-2 p-1">
            Stars:
            <span>{{item.stargazers_count}}</span>
          </span>
          <span class="badge badge-primary p-1">
            Issues:
            <span>{{item.open_issues_count}}</span>
          </span>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "app",
  data() {
    return {
      repos: []
    };
  },
  methods: {
    formattedDate(date) {
      return moment().diff(new Date(date), "days");
    }
  },
  mounted() {
    axios
      .get(
        "https://api.github.com/search/repositories?q=created:>" +
          moment()
            .subtract("days", 30)
            .format("YYYY-MM-DD") +
          "&sort=stars&order=desc"
      )
      .then(response => (this.repos = response.data));
    //this gets the results of the last 30 days despite what the current date is.
  },
  components: { FontAwesomeIcon }
};
</script>

<style lang="scss">
// overriding bootstrap default styles
$primary: #283943;
@import "node_modules/bootstrap/scss/bootstrap";
img {
  width: 200px;
}
</style>
