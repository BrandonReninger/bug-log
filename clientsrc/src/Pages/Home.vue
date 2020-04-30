<template>
  <div class="home container-fluid">
    <h1 class="text-center">Welcome to BugTrakker</h1>
    <create-bug></create-bug>

    <div class="container table-responsive">
      <table class="table table-striped mx-auto w-auto">
        <thead class="bg-info">Current Bugs</thead>
        <th>Title</th>
        <th>Reported By</th>
        <th>Status</th>
        <th>Last Modified</th>
        <tbody>
          <bug v-for="bug in bugs" :key="bug._id" :bugData="bug"></bug>
        </tbody>
      </table>
    </div>
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
