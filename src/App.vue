<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/other">Other</router-link>
    </div>
    <transition name="scale">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.scale-enter, .scale-leave-to {
  transform: scale(0)
}
.scale-leave, .scale-enter-to {
  transform: scale(1)
}
.scale-enter-active, .scale-leave-active {
  transition: all .2s
}
</style>
