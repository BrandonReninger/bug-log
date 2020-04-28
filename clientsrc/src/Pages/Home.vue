<template>
  <div class="home container-fluid">
    <h1 class="text-center">Welcome to Bug Tracker</h1>
    <create-bug></create-bug>

    <table class="table">
      <thead class="bg-info">Current Bugs</thead>
      <th scope="col">Title</th>
      <th scope="col">Reported By</th>
      <th scope="col">Status</th>
      <th scope="col">Last Modified</th>
      <tbody>
        <bug v-for="bug in bugs" :key="bug._id" :bugData="bug"></bug>
      </tbody>
    </table>
  </div>
</template>

<script>
import CreateBug from "../components/CreateBug";
import Bug from "../components/Bug";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    created() {
      this.$store.dispatch("getBugs");
    }
  },
  components: { CreateBug, Bug }
};
</script>
