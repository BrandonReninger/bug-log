<template>
  <div class="create-bug">
    <form class="ml-2">
      <input type="text" placeholder="title" v-model="newBug.title" required />
      <textarea type="text" placeholder="description" v-model="newBug.description" required></textarea>
      <button class="btn btn-sm btn-primary" type="submit" @click="addBug()"></button>
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
  computed: {},
  methods: {
    bugDeetz() {
      this.$store.commit("setActiveBug", {});
      this.$router.push({
        name: bugDetails,
        params: { bugId: this.bugData._id }
      });
    },

    addBug() {
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>