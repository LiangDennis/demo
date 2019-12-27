<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>将在这里mock数据</h3>
    <div
      v-for="(item, index) in list" 
      :key="index"
    >
      <img :src="item.pic" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:null,
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios({
        url: '/user',
        method: 'get'
      }).then(res => {
        console.log(res);
        this.list = res.data.data;
      });
    }
  }
}
</script>

