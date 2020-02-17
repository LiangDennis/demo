<template>
  <div>
    <input type="text" placeholder="input something" v-model="value" v-debounce:300ms="hanldeClick"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      timer: null
    };
  },
  mounted() {
  },
  methods: {
    // debouce：如果重复触发的事件，我们在触发事件时重新计时
    hanldeClick() {
      console.log(this.value);
    },
  }
};
</script>
<style scoped>
</style>