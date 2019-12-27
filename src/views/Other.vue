<template>
  <div id="other">
    <h1>helloworld</h1>
    <button @click="change">change nickname</button>
  </div>
</template>

<script>
export default {
  methods:{
    change() {
      console.log(this.$store.state.userinfo.nickname);
      this.$store.commit('changeNickname');
      console.log(this.$store.state.userinfo.nickname);
    }
  }
}

</script>
<style scoped>
</style>