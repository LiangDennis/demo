<template>
  <div>
    <sisty-seconds />
    <compress-pic />
    <bfc />
  </div>
</template>

<script>
import sistySeconds from './sistySeconds';
import compressPic from './compressPic';
import bfc from './BFC';
export default {
  components: {
    sistySeconds,
    compressPic,
    bfc
  }
}

</script>
<style scoped>
</style>