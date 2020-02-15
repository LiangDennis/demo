<template>
  <div>
    <button @click="handleCode">{{code_text}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      code_text: '获取验证码'
    }
  },
  methods: {
    handleCode() {
      if(!this.timer) {//保证按钮不被多次点击
        let BASE_SECONDS = 60;
        this.timer = setInterval(()=> {
          this.code_text = --BASE_SECONDS;
          this.code_text += "s";
          if(BASE_SECONDS === 0) {
            clearInterval(this.timer);//关闭定时器
            this.timer = null;
            this.code_text = '获取验证码';
          }
        }, 1000);
      }
    }
  }
}

</script>
<style scoped>
</style>