<template>
    <!-- <div>
        <div class="swiper-container" >
            <div class="swiper-wrapper">
                <div class="icons swiper-slide">
                    <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>            
                </div>
                <div class="icons swiper-slide">
                    <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                    <div class="icon-item">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>            
                </div>           
            </div> -->
            <!-- 分页器 -->
            <!-- <div class="swiper-pagination"></div>
        </div>  
    </div> -->
    <div>
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide>
                <div class="icons">
                    <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                     <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                     <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                     <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                     <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                     <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                     <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                     <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                </div>  
            </swiper-slide>
            <swiper-slide>
                <div class="icons">
                    <div class="icon-item ">
                        <img class="item-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">    
                        <div class="item-title">景点门票</div> 
                    </div>
                </div>  
            </swiper-slide>
            
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
    name: 'HomeIcons',
    data(){
        return{
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                }
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
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style lang="stylus" scoped>
    .icons
        width: 100%
        overflow hidden
        display flex
        flex-direction: row
        flex-wrap:wrap
        margin-top: .2rem
        .icon-item
            width: 25%
            height 1.8rem
            display flex
            flex-direction column
            align-items center
            justify-items center
            .item-img
                width: 1.1rem
                height: 1.1rem
            .item-title
                margin-top: .1rem
                color: #212121
                font-size: .28rem                                     
</style>
