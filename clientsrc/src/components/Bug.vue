<template>
  <div class="bug">
    <tr scope="row">
      <td>{{bugData.title}}</td>
      <td>{{bugData.creatorEmail}}</td>
      <td>{{bugData.closed}}</td>
      <td>{{bugData.updatedAt}}</td>
    </tr>
  </div>
</template>


<script>
export default {
  name: "bug",
  props: ["bugData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>