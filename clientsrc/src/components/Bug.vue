<template>
  <div class="bug container-fluid">
    <h3>Current Bugs</h3>
    <tr class="row">
      <th class="col-3">{{bugData.title}}</th>
      <th class="col-3">{{bugData.creatorEmail}}</th>
      <th class="col-1">{{bugData.closed}}</th>
      <th class="col-2">{{bugData.updatedAt}}</th>
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