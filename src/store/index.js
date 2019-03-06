import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = { //要设置的全局访问的state对象
    city:"杭州",
    pid:null,
    cid:null
}
const getters = {  //实时监听state值的变化(最新状态)
    watchCity(state) {
        return [state.city,state.pid]
    }
    // watchPid(state) {
    //     return []
    // },
    // watchCid(state) {
    //     return state.cid
    // }

}
const mutations = {
    changeCity(state,city,pid){
        state.city=city;
        state.pid = pid;
     
    }
    // changePid(state,pid){
    //     state.pid = pid
    // },
    // changeCid(state, cid){
    //     state.cid = cid
    // }
}
const actions = {
    cityCommit(context,city,pid){
        context.commit('changeCity',city,pid)

    }
    // pidCommit(context,pid){
    //     context.commit('changePid',pid)
    // },
    // cidCommit(context,cid){

    //     context.commit('changeCid',cid)
    // }
}
const store = new Vuex.Store({
    state:state,
    getters:getters,
    mutations:mutations,
    actions:actions
});

export default store;