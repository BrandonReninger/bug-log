<template>
  <div class="bug">
    <tr scope="row">
      <button class="btn btn-sm btn-success" @click="bugDeetz">Details</button>
      <td>{{bugData.title}}</td>
      <td>{{bugData.creatorEmail}}</td>
      <td>
        <div class="text-primary" v-if="bugData.closed == false">Open</div>
        <div class="text-danger" v-else>Closed</div>
      </td>
      <td>{{bugData.updatedAt}}</td>//NOTE try to get this date formatting to work
      <!-- <td>{{bugData.updatedAt | dateParse('YYYY-MM-DD') | dateFormat('MMMM D, YYYY')}}</td> -->
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