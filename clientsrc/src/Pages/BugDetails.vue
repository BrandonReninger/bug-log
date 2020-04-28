<template>
  <div class="bugDetails container-fluid">
    <div class="row">
      <div class="col-4">
        <h1>{{bug.title}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <h3>{{bug.creatorEmail}}</h3>
      </div>
      <div class="col-3">{{bug.closed}}</div>
    </div>
    <div class="row">
      <div class="col-12">
        <p>{{bug.description}}</p>
      </div>
      <button class="btn btn-sm btn-primary" @click="$router.push({name: 'Home'})">BACK</button>
    </div>
    <!--notes here-->
    <create-note :bugData="bug"></create-note>
    <note v-for="note in notes" :noteData="note" :key="note._id"></note>
  </div>
</template>


<script>
import CreateNote from "../components/CreateNote";
import Note from "../components/Note";
export default {
  name: "bugDetails",

  data() {
    return {};
  },
  //created() {},
  mounted() {
    this.$store.dispatch("bugDeetz", this.$route.params.bugId);
    this.$store.dispatch("getNotes", this.$route.params.bugId);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {},
  components: { CreateNote, Note }
};
</script>


<style scoped>
</style>