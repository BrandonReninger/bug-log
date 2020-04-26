<template>
  <div class="home">
    <h1 class="text-center">Welcome to Bug Tracker</h1>
    <create-bug></create-bug>
    <bug></bug>
  </div>
</template>

<script>
import CreateBug from "../components/CreateBug";
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
  components: { CreateBug }
};
</script>
