<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Builder</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #42b983;
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
