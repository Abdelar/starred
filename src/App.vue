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
    <div id="items-group">
      <div class="row d-flex mb-3 align-items-start">
        <div class="col-sm-6 col-lg-3">
          <img
            class="img-fluid d-block img-thumbnail"
            src="https://images.unsplash.com/photo-1570819782440-f7d16ec89cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt="alt text"
          />
        </div>
        <div class="col">
          <small class="float-sm-right text-muted text-small">
            <font-awesome-icon icon="calendar-check" class="mr-2" />Submitted
            <span>date of creation</span> days ago by
            <span class="text-primary">name of the owner</span>
          </small>
          <h3 class="text-primary">name</h3>
          <p class="mb-0 mb-2 lead">description</p>
          <span class="badge badge-primary mr-2 p-1">
            Stars:
            <span>stars count</span>
          </span>
          <span class="badge badge-primary p-1">
            Issues:
            <span>issues count</span>
          </span>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "app",
  data() {
    return {
      repos: []
    };
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
