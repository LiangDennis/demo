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

### BFC
  可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
  ###只要元素满足下面任一条件即可触发 BFC 特性
  body 根元素
  浮动元素：float 除 none 以外的值
  绝对定位元素：position (absolute、fixed)
  display 为 inline-block、table-cells、flex
  overflow 除了 visible 以外的值 (hidden、auto、scroll)
  ####链接：https://www.jianshu.com/p/b034663019a9

### 返回顶部
  使用ref绑定需要返回顶部的盒子
  使用this.$refs.name.scrollTop = 0;返回顶部
  直接使用scroll-to.js插件

### vue transition标签的使用
  为transition标签添加name属性
  为name属性写css样式
  样式格式如下（淡入淡出效果）
    .name-enter, .name-leave-to {
      opacity: 0
    }
    .name-leave, .name-enter-to {
      opacity: 1
    }
    .name-enter-active, .name-leave-active {
      transition: all .2s
    }