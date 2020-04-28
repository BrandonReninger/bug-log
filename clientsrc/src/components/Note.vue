<template>
  <div class="note">
    <!--<h3>{{noteData.creatorEmail}}</h3>-->
    <p>{{noteData.content}}</p>

    <button class="btn btn-sm btn-danger" @click="deleteNote(noteData.id)">DELETE</button>
  </div>
</template>


<script>
export default {
  name: "note",
  props: ["noteData"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getNotes", this.$route.params.noteId);
  },
  computed: {
    note() {
      return this.store.state.activeNote;
    }
  },
  methods: {
    deleteNote() {
      debugger;
      this.$store.dispatch("deleteNote", this.noteData);
      this.$store.dispatch("getNotes", this.noteData.bugId);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>