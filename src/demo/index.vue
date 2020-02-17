<template>
  <div>
    <debounce />
    <sisty-seconds />
    <compress-pic />
    <bfc />
    <scroll-top-com/>
  </div>
</template>

<script>
import sistySeconds from './sistySeconds';
import compressPic from './compressPic';
import bfc from './BFC';
import scrollTopCom from './scrollTop';
import debounce from './debounce';
export default {
  components: {
    sistySeconds,
    compressPic,
    bfc,
    scrollTopCom,
    debounce
  }
}

</script>
<style scoped>
</style>