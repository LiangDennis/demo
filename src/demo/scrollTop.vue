<template>
<div style="position: relative;">
  <div ref="box" class="container">
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
    <div @click="handleTop" class="to-top"></div>
  </div>
</div>
</template>

<script>
import {scrollTo} from '../utils/scroll-to.js';
export default {
  methods: {
    handleTop() {
      this.$refs.box.scrollTop = 0;//控制的是小盒子的返回顶部，没有动画效果
      scrollTo(0);//控制整个页面的返回顶部，有动画效果
    }
  }
}

</script>
<style scoped lang='less'>
.container {
  height: 300px;
  background: #ace;
  overflow: scroll;
  .to-top {
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: yellow;
  }
}
</style>