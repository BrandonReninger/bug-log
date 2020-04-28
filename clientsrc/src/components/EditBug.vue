<template>
  <div class="edit-bug">
    <div class="row">
      <div class="col-6">
        <h3>Edit Bug</h3>
        <div class="form-group">
          <label for="title"></label>
          <input type="text" class="form-control" placeholder="Title here" v-model="newBug.title" />
        </div>
        <div class="form-group">
          <label for="description"></label>
          <input
            type="text"
            class="form-control"
            placeholder="description here"
            v-model="newBug.description"
          />
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
    return {
      newBug: {}
    };
  },
  computed: {
    bug() {
      this.$store.state.activeBug;
    }
  },
  methods: {
    editBug() {
      this.$store.dispatch("editBug", this.newBug);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>