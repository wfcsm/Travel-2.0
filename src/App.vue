<template>
  <div id="app"> 
     <router-view>
      <home/>
     </router-view>
  </div>
</template>

<script>
import Home from './components/home/Home.vue'


export default({
  components: {
    Home: Home
  },
  data (){
    return {    
    }
  },  

})

</script>


<style>

</style>
