<template>
  <div class="note">
    <!--<h3>{{noteData.creatorEmail}}</h3>-->
    <p>{{noteData.content}}</p>

    <button>DELETE</button>
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>