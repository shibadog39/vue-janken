<template>
  <div id="app">
    <h1>ジャンケン勝負</h1>
    <nav>
      <router-link to="/">対戦画面</router-link>
      <router-link to="/scores">成績画面</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
