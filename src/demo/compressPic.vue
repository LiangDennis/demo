<template>
  <div>
    选择图片：<input type="file" accept="image/*" @change="handleFile">
    <img v-if="imgFile" :src="imgFile">
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgFile: null
    }
  },
  methods: {
    handleFile(e) {
      let file = e.target.files[0];
      if (!/image\/\w+/.test(file.type)) {//判断文件类型
        alert("请选择图片");
        return false;
      }
      let render = new FileReader();
      render.readAsDataURL(file);
      let img = new Image;
      render.onload = (e)=> {//转化成base64位的图片格式
        img.src = e.target.result;
        img.onload = ()=> {//创建新的img加载完成后
          let canvas = document.createElement('canvas'),//使用canvas压缩图片
              drawer = canvas.getContext('2d'),
              width = 500,
              height = 300,
              quality = 0.8;
          canvas.width = width;
          canvas.height = height;
          drawer.drawImage(img, 0, 0, width, height);
          this.imgFile = canvas.toDataURL('image/png', quality);//将图片加载到页面
        }
      };

    }
  }
}

</script>
<style scoped>
</style>