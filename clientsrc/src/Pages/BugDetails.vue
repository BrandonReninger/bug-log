<template>
  <div class="bugDetails container-fluid">
    <div class="row">
      <div class="col-4">
        <h1>{{bug.title}}</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-between">
      <div class="col-4">
        <h3>{{bug.creatorEmail}}</h3>
      </div>
      <div class="col-3">
        <!--<div class="text-primary" v-if="bug.closed == false">Status: Open</div>
        <div class="text-warning" v-else>Status: Closed</div>-->
        <button class="btn btn-sm btn-danger" @click="closeBug">Close Bug?</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p class="border border-dark">{{bug.description}}</p>
      </div>
      <button class="btn btn-sm btn-primary" @click="$router.push({name: 'Home'})">BACK</button>
    </div>
    <!--edit-bug-->
    <button
      v-show="bug.closed !==true"
      class="btn btn-sm btn-primary"
      @click="openEdit =!openEdit"
    >Edit</button>
    <edit-bug v-if="openEdit && bug.creatorEmail == $auth.userInfo.email"></edit-bug>
    <!--notes here-->
    <create-note :bugData="bug"></create-note>
    <note v-for="note in notes" :noteData="note" :key="note._id"></note>
  </div>
</template>


<script>
import EditBug from "../components/EditBug";
import CreateNote from "../components/CreateNote";
import Note from "../components/Note";
export default {
  name: "bugDetails",

  data() {
    return {
      openEdit: false
    };
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
  methods: {
    closeBug() {
      if (confirm("Is this bug fixed")) {
        this.bug.closed = true;
        this.$store.dispatch("closeBug", this.bug);
      } else {
        console.log("change your mind?");
      }
    }
  },
  components: { CreateNote, Note, EditBug }
};
</script>


<style scoped>
</style>