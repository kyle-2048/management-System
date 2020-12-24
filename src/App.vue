<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  // import VueJsonp from 'vue-jsonp'
  // import Vue from 'vue'
  // Vue.use(VueJsonp)
  export  default {
    name:"app",
    data(){
      return{
        imgList:[],
      }
    },
    mounted() {
      // this.axios.get('api/v2/market/category/travel?start=0&count=4').then(res=>{
      //   console.log(res.data.data)
      // })
      // this.axios.get('https://market.douban.com/api/v2/market/category/travel?start=0&count=4').then(res=>{
      //   console.log(res.data.data)
      // })
      // this.$jsonp('https://market.douban.com/api/v2/market/category/travel?start=0&count=4').then(res=>{
      //   console.log(res.data)
      // })

  }
  }
</script>

<style lang="less">
  #app{
    height: 100%;
    min-height: 100%;
  }

</style>
