<template>
  <div class="create-bug">
    <form class="ml-2" @submit.prevent="addBug">
      <input type="text" placeholder="title" v-model="newBug.title" required />
      <textarea type="text" placeholder="description" v-model="newBug.description" required></textarea>
      <button class="btn btn-sm btn-primary" type="submit">ADD BUG</button>
      <!--<button class="btn btn-sm btn-primary" @click="bugDeetz()">Create Bug</button>-->
    </form>
  </div>
</template>


<script>
export default {
  name: "create-bug",
  data() {
    return {
      newBug: {}
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    async addBug() {
      debugger;
      await this.$store.dispatch("addBug", this.newBug);
      this.newBug = {};
      //this.$router.push({ path: "bugs/" + bug.id, name: "BugDetails" });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>