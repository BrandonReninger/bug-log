<template>
  <div class="bug">
    <tr>
      <td class="col-3">{{bugData.title}}</td>
      <td class="col-3">{{bugData.creatorEmail}}</td>
      <td class="col-1">{{bugData.closed}}</td>
      <td class="col-2">{{bugData.updatedAt}}</td>
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