<template>
  <div class="bug">
    <tr scope="row">
      <td>{{bugData.title}}</td>
      <td>{{bugData.creatorEmail}}</td>
      <td>
        <div class="text-primary" v-if="bugData.closed == false">Open</div>
        <div class="text-warning" v-else>Closed</div>
      </td>
      <td>{{bugData.updatedAt}}</td>
      <button class="btn btn-sm btn-sucess"></button>
    </tr>
  </div>
</template>


<script>
import EditBug from "../components/EditBug";
export default {
  name: "bug",
  props: ["bugData"],
  data() {
    return {
      //openEdit: false
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>