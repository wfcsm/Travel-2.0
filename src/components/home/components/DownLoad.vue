<template>
    <div class="download">
        <span class="download-close" >X</span>
        <span class="logo"></span>
        <p class="download-desc">使用去哪儿门票客户端<br>享受专属优惠体验更流畅</p>

    </div>
    
</template>

<script>
export default {
    name: 'HomeDownLoad'
}
</script>

<style lang="stylus" scoped>
    .download
        background rgba(0,0,0,.8)
        width 100%
        position fixed
        z-index: 99
        bottom 0
        left 0
        height 1rem
        .download-close
            position absolute
            top: 0
            left: 0
            display inline-block
            width: .5rem
            height: .5rem
            line-height: .5rem
            color #fff
            background: #afafaf
            text-align center
            border-radius 0 0 .5rem 0
        .logo
            background:url(../../../assets/images/logo.png)
            width: .7rem
            height: .7rem
            display inline-block
            position relative
            top: .15rem
            left: .65rem
            background-size: .7rem .7rem
            border-radius: .1rem
        .download-desc
            position absolute
            left: 1.6rem
            top: .2rem
            font-size: .24rem
            color: #fff
            line-height: .32rem
            


</style>


