<template>
  <h1>hey</h1>
</template>

<script>
export default {
  name: "user-list",
  props: ["users"],

  created() {
    console.log(this.users);
  },
};
</script>

<style>
</style>