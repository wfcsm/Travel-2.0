import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import City from '@/components/city/City.vue'

Vue.use(Router)

export default new Router({
  //开启路由history模式
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
     component: City
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to);
    //发生锚点行为
    if(to.hash){
      return {
        selector: to.hash
      }
    }
  }

}
)
