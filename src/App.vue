<template>
  <div id="app">
    <h1>じゃんけんしよう</h1>
    <ul>
      <li>
        <router-link to="/game">ゲーム</router-link>
      </li>
      <li>
        <router-link to="/score">せいせき</router-link>
      </li>
    </ul>
    <div class="inner">
      <router-view scores="scores"></router-view>
    </div>
  </div>
</template>
<script>
import Storage from "./util/Storage";

let storage = new Storage();
export default {
  name: "app",
  data() {
    return {
      scores: storage.getData("scores") || []
    };
  },
  watch: {
    scores: "saveData"
  },
  methods: {
    saveData() {
      storage.setData("scores", this.scores);
    }
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
