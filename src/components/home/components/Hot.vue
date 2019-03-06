<template>
    <div class="wrap">
        <div class="title">
            <div class="hot-title"><span class="img"></span>本周热门榜单</div>
            <div class="title-more">全部榜单<span class="arrows"></span></div>
            <div class="clear"></div>
        </div>            
        <ul class="hot-list">
            <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"> -->
                <li class="hot-item">
                    <div class="hot-img-wrap">
                        <img class="hot-img" src="http://img1.qunarzz.com/sight/p0/1812/30/308fce51111d148fa3.img.jpg_250x250_b17b66fe.jpg" >
                    </div>
                    <div class="hot-sight">临安大明山滑雪场</div>
                    <div class="hot-price"><span class="price">¥</span><em class="num">128</em>起</div>
                </li>
                 <li class="hot-item">
                    <div class="hot-img-wrap">
                        <img class="hot-img" src="http://img1.qunarzz.com/sight/p0/1812/30/308fce51111d148fa3.img.jpg_250x250_b17b66fe.jpg" >
                    </div>
                    <div class="hot-sight">临安大明山滑雪场</div>
                    <div class="hot-price"><span class="price">¥</span><em class="num">128</em>起</div>
                </li>
                 <li class="hot-item">
                    <div class="hot-img-wrap">
                        <img class="hot-img" src="http://img1.qunarzz.com/sight/p0/1812/30/308fce51111d148fa3.img.jpg_250x250_b17b66fe.jpg" >
                    </div>
                    <div class="hot-sight">临安大明山滑雪场</div>
                    <div class="hot-price"><span class="price">¥</span><em class="num">128</em>起</div>
                </li>
                 <li class="hot-item">
                    <div class="hot-img-wrap">
                        <img class="hot-img" src="http://img1.qunarzz.com/sight/p0/1812/30/308fce51111d148fa3.img.jpg_250x250_b17b66fe.jpg" >
                    </div>
                    <div class="hot-sight">临安大明山滑雪场</div>
                    <div class="hot-price"><span class="price">¥</span><em class="num">128</em>起</div>
                </li>
                 <li class="hot-item">
                    <div class="hot-img-wrap">
                        <img class="hot-img" src="http://img1.qunarzz.com/sight/p0/1812/30/308fce51111d148fa3.img.jpg_250x250_b17b66fe.jpg" >
                    </div>
                    <div class="hot-sight">临安大明山滑雪场</div>
                    <div class="hot-price"><span class="price">¥</span><em class="num">128</em>起</div>
                </li>
                 <li class="hot-item">
                    <div class="hot-img-wrap">
                        <img class="hot-img" src="http://img1.qunarzz.com/sight/p0/1812/30/308fce51111d148fa3.img.jpg_250x250_b17b66fe.jpg" >
                    </div>
                    <div class="hot-sight">临安大明山滑雪场</div>
                    <div class="hot-price"><span class="price">¥</span><em class="num">128</em>起</div>
                </li>
            <!-- </swiper> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeHot'
}
</script>

<style lang="stylus" scoped>
    .clear
        clear:both
// --------------清除样式-------
    .img ,
    .arrows
        width: .3rem
        height: .3rem
        display inline-block

    .price,
    .num
        color:#ff8300
// ----------金额字体颜色---------
    .wrap
        background: #eee
        padding-top: .3rem
        padding-bottom: .3rem
        .title
            background: #fff
            padding: .24rem 0  .26rem
        .hot-title
            font-size: .32rem
            float: left
            height: .44rem
            line-height: .44rem
            margin-left: .08rem
            .img
                background: url('../../../assets/images/fire.png') no-repeat
                margin-left: .2rem
                margin-right: .2rem
                background-size: .3rem .3rem  
        .title-more
            float: right
            font-size: .24rem
            color: #616161
            .arrows
                background: url('../../../assets/images/right_arrows.png') no-repeat
                background-position-y: .05rem
                background-size: .3rem .3rem  
                margin-right: .3rem

//------------底部滑动区

    .hot-list
        padding: 0 .24rem
        overflow-x: scroll
        background: #fff
        white-space: nowrap
        .hot-item
            // position relative
            // float left 
            display inline-block
            padding: .06rem 0 .2rem
            width: 2rem
            .hot-img-wrap
                height: 0
                overflow hidden
                width 2rem
                padding-bottom: 100%
                .hot-img
                    width 100%
            .hot-sight
                padding-top: .12rem
                color: #212121
                font-size: .24rem
                line-height: .32rem
            .hot-price
                text-align: center

    .hot-item:not(:first-child)
        margin-left: .12rem
</style>


