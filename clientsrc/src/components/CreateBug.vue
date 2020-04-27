<template>
  <div class="create-bug">
    <form class="ml-2" @submit.prevent="addBug">
      <input type="text" placeholder="title" v-model="newBug.title" required />
      <textarea type="text" placeholder="description" v-model="newBug.description" required></textarea>
      <button class="btn btn-sm btn-primary" @click="bugDeetz()">Create Bug</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "create-bug",
  data() {
    return {
      newBug: { title: "", description: "" }
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
    }
  },
  components: {}
};
</script>


<style scoped>
</style>