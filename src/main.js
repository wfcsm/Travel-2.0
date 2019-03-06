import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import store from './store' //引入store
import './assets/styles/reset.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import router from './router/router'

//把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
Vue.prototype.$axios = axios;
Vue.prototype.Home = '/api';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
Vue.prototype.URL= "http://apis.haoservice.com/lifeservice/travel/cityList"

new Vue({
  router,
  store, //使用store
  render: h => h(App)
}).$mount('#app')
