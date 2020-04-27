<template>
  <div class="home container-fluid">
    <h1 class="text-center">Welcome to Bug Tracker</h1>
    <create-bug></create-bug>
    <div class="row d-flex">
      <table class="col-12">
        <thead class="bg-info mt-2">Current Bugs</thead>
        <th class="col-3">Title</th>
        <th class="col-3">Reported By</th>
        <th class="col-2">Status</th>
        <th class="col-3">Last Modified</th>
        <tbody>
          <tr v-for="bug in bugs" :key="bug.id" :bugData="bug">
            <td class="col-3">{{bug.title}}</td>
            <td class="col-3">{{bug.creatorEmail}}</td>
            <td class="col-2">{{bug.closed}}</td>
            <td class="col-3">{{bug.updatedAt}}</td>
          </tr>
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
    }
  },
  components: { CreateBug, Bug }
};
</script>
