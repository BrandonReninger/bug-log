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
    </tr>
    <button class="btn btn-sm btn-primary" @click="openEdit =!openEdit">Edit</button>
    <edit-bug v-if="openEdit"></edit-bug>
  </div>
</template>


<script>
import EditBug from "../components/EditBug";
export default {
  name: "bug",
  props: ["bugData"],
  data() {
    return {
      openEdit: false
    };
  },
  computed: {},
  methods: {},
  components: { EditBug }
};
</script>


<style scoped>
</style>