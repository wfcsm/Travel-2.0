<template>
    <div>
        <div class="header">
            <router-link to="/">
                <div  class="header-left iconfont">&#xe67c;</div>
            </router-link>
            <h2 class="header-title">城市选择</h2>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'AreaHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        background: #00bcd4
        width: 100%
        height: .88rem
        color: #fff
        position relative
        .header-left
            // float left
            position absolute
            font-size: .36rem
            width: .4rem
            text-align:left
            line-height: .88rem
            padding: 0 .2rem   
            top 0
            left 0 
            color #fff
        .header-title
            font-size: .32rem
            text-align center
            line-height: .88rem

</style>

