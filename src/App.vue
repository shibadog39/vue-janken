<template>
  <div id="app">
    <div>links</div>
    <Fight/>
    <Score/>
  </div>
</template>

<script>
import Fight from "./components/Fight.vue";
export default {
  name: "app",
  components: {
    Fight
  }
};
</script>

<style>
</style>
