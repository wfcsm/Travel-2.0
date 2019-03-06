<template>
    <div class="main"> 
        <home-hearder></home-hearder>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-listitem></home-listitem>
        <home-hot></home-hot>
        <home-like></home-like>
        <home-weekend-trip></home-weekend-trip>
        <home-down-load></home-down-load>
    </div>
</template>

<script>
import HomeHearder from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeListitem from './components/ListItem.vue'
import HomeHot from './components/Hot.vue'
import HomeLike from './components/Like.vue'
import HomeWeekendTrip from './components/WeekendTrip.vue'
import HomeDownLoad from './components/DownLoad.vue'

export default {
    name: 'Home',
    components: {
        HomeHearder: HomeHearder,
        HomeSwiper: HomeSwiper,
        HomeIcons: HomeIcons,
        HomeListitem: HomeListitem,
        HomeHot: HomeHot,
        HomeLike: HomeLike,
        HomeWeekendTrip: HomeWeekendTrip,
        HomeDownLoad: HomeDownLoad
    },
    data () {
        return  {

        }
    }
}
</script>

<style lang="stylus" scoped>
    // .main
    //     position relative
</style>


