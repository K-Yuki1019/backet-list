<template>
  <div id="app">
    <div class="header">
      <router-link class="item" to="/">Topへ</router-link>
      <router-link class="item" to="/signup">新規登録画面へ</router-link>
      <router-link class="item" to="/login">Login画面へ</router-link>
      <router-link class="item" to="/about">詳細ページへ</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.item {
  margin-right: 8px;
}
</style>
