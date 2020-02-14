#### 记录应该学会的功能

### 60s
  在开始倒计时，需要判断this.timer的值是否为null，该方式可以防止用户多次点击
  当计时结束时，需要使用clearInterval将this.timer清除，同时设置this.timer为null

### 压缩图片