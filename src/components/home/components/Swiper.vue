<template>
  <!-- <div>
    <div class="wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"/></div>
          <div class="swiper-slide"><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg"/></div>
          <div class="swiper-slide"><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/794ed329be3e70e9b46ee96b02ebd252.jpg_750x200_036c35ee.jpg"/></div>
        </div> -->
        <!-- 分页器 -->
        <!-- <div class="swiper-pagination"></div>
      </div>
    </div>
  </div> -->
  <div class="wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"/></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"/></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
         pagination: {
            el: '.swiper-pagination',
          },
          loop: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
 
};
</script>

<style lang="stylus" scoped>
.wrap 
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 27%;
  .swiper-img
    width: 100%;

</style>


