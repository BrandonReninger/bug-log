<template>
  <div class="bug">
    <tr scope="row align-items-center">
      <button class="btn btn-sm btn-light" @click="bugDeetz">Details</button>
      <td>{{bugData.title}}</td>
      <td>{{bugData.creatorEmail}}</td>
      <td>
        <div class="text-success" v-if="bugData.closed == false">Open</div>
        <div class="text-danger" v-else>Closed</div>
      </td>
      <td>{{bugData.updatedAt | moment("dddd, MMMM Do YYYY")}}</td>
    </tr>
  </div>
</template>


<script>
export default {
  name: "bug",
  props: ["bugData"],
  data() {
    return {
      //openEdit: false
    };
  },
  computed: {},
  methods: {
    bugDeetz() {
      this.$store.commit("setActiveBug");
      this.$store.dispatch("bugDeetz", this.bugData.id);
      this.$store.commit("setNotes");
      this.$router.push({
        name: "BugDetails",
        params: { bugId: this.bugData.id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>