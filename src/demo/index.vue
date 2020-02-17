<template>
  <div>
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
export default {
  components: {
    sistySeconds,
    compressPic,
    bfc,
    scrollTopCom
  }
}

</script>
<style scoped>
</style>