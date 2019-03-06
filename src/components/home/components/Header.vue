<template>
  <div class="header">
    <div class="header-left iconfont">&#xe67c;</div>
    <div class="header-middle iconfont">
      <span class="header-icon iconfont">&#xe678;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right iconfont">{{city[0]}}&#xe6b5;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data(){
      return{

      }
  },
  computed:{
      city(){
        return this.$store.getters.watchCity
      }
  }
};
</script>

<style lang="stylus" scoped>
.header {
  background: #00bcd4;
  width: 100%;
  height: 0.88rem;
  color: #fff;
  display: flex;

  .header-left {
    float: left;
    font-size: 0.36rem;
    width: 0.4rem;
    text-align: left;
  }

  .header-right {
    float: right;
    font-size: 0.28rem;
    color: #fff;
  }

  .header-middle {
    background: #fff;
    flex: 1;
    margin: auto;
    border-radius: 0.05rem;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0 0.1rem;
    color: #e4e7ea;
    font-size: 0.28rem;

    .header-icon {
      padding: 0 0 0 0.1rem;
    }
  }
}

.header-left, .header-right {
  line-height: 0.88rem;
  padding: 0 0.2rem;
}
</style>


