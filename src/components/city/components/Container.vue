<template>
  <div>
    <div class="tab-con">
      <ul>
        <li :class="convert" @click="switchActive">境内</li>
        <li :class="reconvert" @click="switchActive">境外·港澳台</li>
      </ul>
    </div>
    <div class="city-list">
      <h2>热门城市</h2>
      <ul class="list">
        <router-link to="/">
          <li v-for="index in hotCities" v-bind:key="index.id" @click="saveCity(index.name,index.id)">{{index.name}}</li>
        </router-link>
      </ul>
      <h2>字母排序</h2>
      <ul class="list alphabet">
        <li v-for="(value, key,index)  in cities" v-bind:key="index" >
              <router-link :to="'#alphabet'+key">{{key}} </router-link>
        </li>
      </ul>

      <div v-for="(value, key,index)  in cities" v-bind:key="index" :id="'alphabet' + key">
        <h2>{{key}}</h2>
        <ul class="list">
          <router-link to="/">
            <li v-for="(a,b) in value" :key="b"  @click="saveCity(a.name,a.id)">{{a.name}}</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaContainer",
  data() {
    return {
      hotCities: [],
      cities: {},
      flag:true,
      convert:"active",
      reconvert:""
      
    };
  },
  methods:{
    switchActive(){ 
        if(this.flag){
            this.convert="active"
            this.reconvert=""
        }else{
            this.convert=""
            this.reconvert="active"
        }
        this.flag=!this.flag;
    },
    saveCity(city,pid){

       this.$store.dispatch('cityCommit',city,pid);
    }

  },    
  mounted() {
    let that = this;
    const url = this.Home + "cityList/?key=a5931191e19941fc8fe16af7d899fc91";
    this.$axios
      .get("../../../../static/mock/city.json")
      .then(function(response) {
        that.hotCities = response.data.data.hotCities;
        that.cities = response.data.data.cities;
        // that.cities = response.data.result
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  updated(){

  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/common.styl';

.tab-con {
  background: #00bcd4;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0.2rem 1rem;

  .active { // 选择时的颜色改变
    background: #fff;
    color: #00bcd4;
  }

  ul {
    overflow: hidden;
    border: 1px solid #fff;
  }

  li {
    float: left;
    font-size: 0.28rem;
    color: #fff;
    width: 50%;
    text-align: center;
    border-radius: 0.03rem;
    
  }
}

h2 {
  font-size: 0.28rem;
  padding: 0.3rem;
  background: #eee;
}

.list {
  position: relative;
  overflow: hidden;
  z-index: 0;
  background-color: #fff;
  margin-right: -0.02rem;

  li {
    float: left;
    width: 33%;
    text-align: center;
    height: 0.95rem;
    line-height: 0.95rem;
    font-size: 0.28rem;
    border-bottom: 0.02rem solid #ddd;
    border-right: 0.02rem solid #ddd;
  }
}

.alphabet {
  li {
    width: 20%;
    height: 0.9rem;
    line-height: 0.9rem;
    border: 0;
    left: 0.3rem;
  }
}
</style>

