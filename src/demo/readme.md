#### 记录应该学会的功能

### 60s
  在开始倒计时，需要判断this.timer的值是否为null，该方式可以防止用户多次点击
  当计时结束时，需要使用clearInterval将this.timer清除，同时设置this.timer为null

### 压缩图片
  判断文件类型
  使用readAsDataURL转换成base64位的图片格式
  创建新的img标签，其属性src是base64
  img加载onload完成后，修改图片大小
  使用canvas将图片进行压缩