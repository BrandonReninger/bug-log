<template>
  <div class="create-note">
    <form @submit.prevent="addNote">
      <input type="text" placeholder="add note" v-model="newNote.content" required />
      <button class="btn btn-sm btn-primary" type="submit">Add Note</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "create-note",
  props: ["bugData"],
  data() {
    return {
      newNote: { content: "" }
    };
  },
  computed: {},
  methods: {
    addNote() {
      this.newNote.bugId = this.bugData.id;
      this.$store.dispatch("addNote", this.newNote);
      this.newNote = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>