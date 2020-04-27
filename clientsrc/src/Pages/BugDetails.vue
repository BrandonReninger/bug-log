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
      <button class="btn btn-sm btn-primary">BACK</button>
    </div>
    <!--notes here-->
  </div>
</template>


<script>
export default {
  name: "bugDetails",

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