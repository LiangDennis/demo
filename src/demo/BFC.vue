<template>
  <div class="outer">
    <div class="inner">
      <span class="bfc">hello world</span>
    </div>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped lang="less">
.outer {
  width: 600px;
  height: 600px;
  background: #aceaca;
  position: relative;
  .inner {
    width: 300px;
    height: 300px;
    background: yellow;
    position: absolute;
    right: 0;
    top: 0;
    .bfc {
      float: left;
      left: 0;
      bottom: 0;
    }
  }
}
</style>