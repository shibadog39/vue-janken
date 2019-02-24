<template>
  <div id="score">
    <ul>
      <li v-for="(item, index) in scores" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "score",
  computed: {
    scores() { return this.$store.getters.scores}
  }
  };
</script>

<style scoped>
.selected-btn {
  border: 2px solid black;
}
</style>
