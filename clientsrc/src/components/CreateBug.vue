<template>
  <div class="create-bug">
    <form class="ml-2" @submit.prevent="addBug">
      <input type="text" placeholder="title" v-model="newBug.title" required />
      <textarea type="text" placeholder="description" v-model="newBug.description" required></textarea>
      <button class="btn btn-sm btn-primary" type="submit">Create Bug</button>
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