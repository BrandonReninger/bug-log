<template>
  <div class="edit-bug border border-dark shadow mt-3">
    <div class="row">
      <div class="col-6 d-flex flex-column">
        <h3>Edit Bug</h3>
        <div class="form-group">
          <label for="title"></label>
          <input type="text" class="form-control" placeholder="Title here" v-model="bug.title" />
        </div>
        <div class="form-group">
          <label for="description"></label>
          <input
            type="text"
            class="form-control"
            placeholder="description here"
            v-model="bug.description"
          />
        </div>
        <div class="dropdown mb-3">
          <button
            class="btn btn-sm btn-warning dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Status</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" v-on:click.prevent="bug.closed === false">Open</a>
            <a class="dropdown-item" href="#" v-on:click.prevent="bug.closed === true">Closed</a>
          </div>
        </div>
        <button class="btn btn-sm btn-primary" @click="editBug">Submit</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "edit-bug",
  //props: ["bugData"],
  data() {
    return {};
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    editBug() {
      this.$store.dispatch("editBug", this.bug);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>